import { Exchange } from './../../../../core/models/exchange.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { first, pluck } from 'rxjs/operators';
import * as fromApp from '../../../../store/index';
import * as ProgressActions from '../../../../store/actions/progress.actions';

@Component({
   selector: 'app-section-trade-second',
   templateUrl: './section-trade-second.component.html',
   styleUrls: ['./section-trade-second.component.scss'],
})
export class SectionTradeSecondComponent implements OnInit {
   form: FormGroup;
   exchange: Exchange;

   givenCurrencyName: string;
   takenCurrencyName: string;

   private currencyNames = {
      EUR: 'евро',
      UAH: 'гривнах',
      USD: 'долларах',
      RUB: 'рублях',
   };

   constructor(
      private store: Store<fromApp.AppState>,
      private route: ActivatedRoute,
      private router: Router
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
            this.givenCurrencyName = this.currencyNames[
               this.exchange.givenCurrency.currencyCode
            ];
            this.takenCurrencyName = this.currencyNames[
               this.exchange.takenCurrency.currencyCode
            ];

            this.initForm();
         });
   }

   onGivenCurrencyChange(value: number): void {
      if (!value || value < 0) {
         return this.form.get('takenCurrency').patchValue('');
      }

      const calculatedCurrency = this.exchange.takenCurrencyCourse * value;
      this.form.get('takenCurrency').patchValue(calculatedCurrency);
   }

   onTakenCurrencyChange(value: number): void {
      if (!value || value < 0) {
         return this.form.get('givenCurrency').patchValue('');
      }

      const calculatedCurrency = value / this.exchange.takenCurrencyCourse;
      this.form.get('givenCurrency').patchValue(calculatedCurrency);
   }

   onSubmit(): void {
      if (!this.form.valid) {
         return;
      }

      console.log('valid');
   }

   private initForm(): void {
      this.form = new FormGroup({
         givenCurrency: new FormControl('', [
            Validators.required,
            Validators.min(this.exchange.minGivenCurrency),
            Validators.max(this.exchange.maxGivenCurrency),
         ]),
         takenCurrency: new FormControl('', [
            Validators.required,
            Validators.min(
               this.exchange.minGivenCurrency *
                  this.exchange.takenCurrencyCourse
            ),
            Validators.max(this.exchange.takenCurrency.reserve),
         ]),
         givenCard: new FormControl('', [Validators.required]),
         takenCard: new FormControl('', [Validators.required]),
         phone: new FormControl('', [Validators.required]),
         email: new FormControl('', [Validators.required, Validators.email]),
      });
   }
}
