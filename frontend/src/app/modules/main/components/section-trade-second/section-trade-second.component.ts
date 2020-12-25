import { Currency } from './../../../../core/models/currency.model';
import { WebmoneyService } from './../../../../core/services/webmoney.service';
import { Exchange } from './../../../../core/models/exchange.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
   FormControl,
   FormGroup,
   ValidationErrors,
   Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { catchError, filter, first, map, tap } from 'rxjs/operators';
import * as fromRoot from '../../../../store/index';
import * as ProgressActions from '../../../../store/actions/progress.actions';
import * as OrderActions from '../../../../store/actions/order.actions';
import { Order } from '@models/order.model';
import { Observable, of } from 'rxjs';

@Component({
   selector: 'app-section-trade-second',
   templateUrl: './section-trade-second.component.html',
   styleUrls: ['./section-trade-second.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTradeSecondComponent implements OnInit {
   form: FormGroup;
   exchange$: Observable<Exchange>;

   fields: { [key: string]: boolean } = {};
   webmoneyErrorMessage = `Платежная система WebMoney не разрешает данный обмен. Возможно, это связано с
   тем, что кошельки не принадлежат одному WMID, не связаны, или данные
   участника системы Webmoney не совпадают с указанными.`;

   private takenCourse: number;
   private givenCourse: number;
   constructor(
      private store: Store<fromRoot.AppState>,
      private webmoneyService: WebmoneyService
   ) {}

   ngOnInit(): void {
      this.store.dispatch(ProgressActions.setCurrentProcess({ payload: 2 }));

      this.exchange$ = this.store.select(fromRoot.getExchange).pipe(
         filter((exchange) => !!exchange),
         tap((exchange) => {
            this.takenCourse = exchange.takenCurrencyCourse;
            this.givenCourse = exchange.givenCurrencyCourse;

            for (const control of exchange.fields) {
               this.fields[control] = true;
            }

            this.initForm(exchange);
         })
      );
   }

   onCurrencyChange(property: string, value: number): void {
      if (!value || value < 0) {
         return this.form.get(property).patchValue('');
      }

      let calculatedCurrency;

      if (property.startsWith('taken')) {
         calculatedCurrency = this.takenCourse * value;
      } else {
         calculatedCurrency = value / this.takenCourse;
      }

      if (property.startsWith('taken') && this.givenCourse > this.takenCourse) {
         calculatedCurrency = value / this.givenCourse;
      }

      this.form.get(property).patchValue(calculatedCurrency);
   }

   onSubmit(exchange: Exchange): void {
      if (!this.form.valid) {
         return;
      }

      const order: Order = {
         ...this.form.value,
         phone: this.form.value.phone,
         givenCurrency: exchange.givenCurrency.id,
         takenCurrency: exchange.takenCurrency.id,
         givenCurrencyCourse: exchange.givenCurrencyCourse,
         takenCurrencyCourse: exchange.takenCurrencyCourse,
         merchant: exchange.merchant,
      };

      this.store.dispatch(OrderActions.createOrderStart({ payload: order }));
   }

   private initForm(exchange: Exchange): void {
      const givenCurrency = exchange.givenCurrency;
      const takenCurrency = exchange.takenCurrency;
      const optionalControls = this.getOptionalControls(
         givenCurrency,
         takenCurrency
      );

      const controls = {
         givenCurrencyAmount: new FormControl('', {
            validators: [
               Validators.required,
               Validators.min(exchange.minGivenCurrency),
               Validators.max(exchange.maxGivenCurrency),
            ],
         }),
         takenCurrencyAmount: new FormControl('', {
            validators: [
               Validators.required,
               Validators.min(
                  exchange.minGivenCurrency * exchange.takenCurrencyCourse
               ),
               Validators.max(exchange.takenCurrency.reserve),
            ],
         }),
      };

      for (const control of exchange.fields) {
         controls[control] = optionalControls[control];
      }

      this.form = new FormGroup(controls, {
         updateOn: 'submit',
      });

      if (exchange.enableWMInterface) {
         this.form.setAsyncValidators(this.webmoneyValidator.bind(this));
      }
   }

   private getOptionalControls(
      givenCurrency: Currency,
      takenCurrency: Currency
   ): { [key: string]: FormControl } {
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
      };

      return this.webmoneyService.check(order).pipe(
         map((result) => (result ? null : { invalidData: true })),
         catchError(() => of({ invalidData: true }))
      );
   }
}
