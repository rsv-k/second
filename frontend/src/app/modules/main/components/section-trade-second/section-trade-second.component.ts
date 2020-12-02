import { WebmoneyService } from './../../../../core/services/webmoney.service';
import { Exchange } from './../../../../core/models/exchange.model';
import { Component, OnInit } from '@angular/core';
import {
   FormControl,
   FormGroup,
   ValidationErrors,
   Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, first, map, pluck } from 'rxjs/operators';
import * as fromApp from '../../../../store/index';
import * as ProgressActions from '../../../../store/actions/progress.actions';
import * as OrderActions from '../../../../store/actions/order.actions';
import { Order } from 'src/app/core/models/order.model';
import { Observable, of } from 'rxjs';

@Component({
   selector: 'app-section-trade-second',
   templateUrl: './section-trade-second.component.html',
   styleUrls: ['./section-trade-second.component.scss'],
})
export class SectionTradeSecondComponent implements OnInit {
   form: FormGroup;
   exchange: Exchange;

   fields: { [key: string]: boolean } = {};

   constructor(
      private store: Store<fromApp.AppState>,
      private route: ActivatedRoute,
      private router: Router,
      private webmoneyService: WebmoneyService
   ) {}

   ngOnInit(): void {
      this.store.dispatch(ProgressActions.setCurrentProcess({ payload: 2 }));

      this.store
         .select('exchange')
         .pipe(pluck('exchanges'), first())
         .subscribe((data) => {
            const id = this.route.snapshot.paramMap.get('id');
            const exchange = data.find((ex) => ex.id === id);

            if (!exchange) {
               return this.router.navigate(['/exchanges']);
            }

            this.exchange = exchange;
            for (const control of exchange.fields) {
               this.fields[control] = true;
            }

            this.initForm();
         });
   }

   onCurrencyChange(property: string, value: number): void {
      if (!value || value < 0) {
         return this.form.get(property).patchValue('');
      }

      console.log(
         this.exchange.givenCurrencyCourse,
         this.exchange.takenCurrencyCourse
      );

      let calculatedCurrency;

      if (property.startsWith('taken')) {
         calculatedCurrency = this.exchange.takenCurrencyCourse * value;
      } else {
         calculatedCurrency = value / this.exchange.takenCurrencyCourse;
      }

      if (
         property.startsWith('taken') &&
         this.exchange.givenCurrencyCourse > this.exchange.takenCurrencyCourse
      ) {
         calculatedCurrency = value / this.exchange.givenCurrencyCourse;
      }

      this.form.get(property).patchValue(calculatedCurrency);
   }

   onSubmit(): void {
      if (!this.form.valid) {
         return;
      }

      const order: Order = {
         ...this.form.value,
         phone: this.form.value.phone,
         givenCurrencyId: this.exchange.givenCurrency.id,
         takenCurrencyId: this.exchange.takenCurrency.id,
      };

      this.store.dispatch(OrderActions.createOrderStart({ payload: order }));
   }

   private initForm(): void {
      const givenCurrency = this.exchange.givenCurrency;
      const takenCurrency = this.exchange.takenCurrency;
      const optionalControls = this.getOptionalControls(
         givenCurrency,
         takenCurrency
      );

      const controls = {
         givenCurrencyAmount: new FormControl('', {
            validators: [
               Validators.required,
               Validators.min(this.exchange.minGivenCurrency),
               Validators.max(this.exchange.maxGivenCurrency),
            ],
         }),
         takenCurrencyAmount: new FormControl('', {
            validators: [
               Validators.required,
               Validators.min(
                  this.exchange.minGivenCurrency *
                     this.exchange.takenCurrencyCourse
               ),
               Validators.max(this.exchange.takenCurrency.reserve),
            ],
         }),
      };

      for (const control of this.exchange.fields) {
         controls[control] = optionalControls[control];
      }

      this.form = new FormGroup(controls, {
         updateOn: 'submit',
      });

      if (this.exchange.enableWMInterface) {
         this.form.setAsyncValidators(this.webmoneyValidator.bind(this));
      }
   }

   private getOptionalControls(givenCurrency, takenCurrency) {
      return {
         givenCurrencyCard: new FormControl('', {
            validators: [
               Validators.required,
               Validators.pattern(
                  givenCurrency.validator && givenCurrency.validator.regex
               ),
            ],
         }),
         takenCurrencyCard: new FormControl('', {
            validators: [
               Validators.required,
               Validators.pattern(
                  takenCurrency.validator && takenCurrency.validator.regex
               ),
            ],
         }),
         name: new FormControl('', {
            validators: [Validators.required],
         }),
         surname: new FormControl('', {
            validators: [Validators.required],
         }),
         phone: new FormControl('', {
            validators: [
               Validators.required,
               Validators.pattern('^[0-9]{1,4}[0-9]{10}$'),
            ],
         }),
         email: new FormControl('', {
            validators: [Validators.required, Validators.email],
         }),
      };
   }

   private webmoneyValidator(): Observable<ValidationErrors | null> {
      const order: Order = {
         ...this.form.value,
         givenCurrencyId: this.exchange.givenCurrency.id,
         takenCurrencyId: this.exchange.takenCurrency.id,
      };

      return this.webmoneyService.check(order).pipe(
         map((result) => (result ? null : { invalidData: true })),
         catchError(() => of(null))
      );
   }
}
