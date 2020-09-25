import { Exchange } from './../../../../core/models/exchange.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Currency } from 'src/app/core/models/currency.model';
import * as fromApp from '../../../../store/index';
import * as CurrencyActions from '../../store/actions/currency.actions';
import * as ExchangeActions from '../../store/actions/exchange.actions';

@Component({
   selector: 'app-exchanges-create',
   templateUrl: './exchanges-create.component.html',
   styleUrls: ['./exchanges-create.component.scss'],
})
export class ExchangesCreateComponent implements OnInit {
   form: FormGroup;
   currencies$: Observable<Currency[]>;

   givenCurrencyId: string;
   takenCurrencyId: string;

   @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

   constructor(private store: Store<fromApp.AppState>) {}

   ngOnInit(): void {
      this.store.dispatch(CurrencyActions.currenciesLoadStart());
      this.currencies$ = this.store.pipe(select(fromApp.selectAdminCurrencies));

      this.initForm();
   }

   onSubmit(): void {
      const exchange: Exchange = {
         ...this.form.value,
         givenCurrency: this.givenCurrencyId,
         takenCurrency: this.takenCurrencyId,
      };

      this.store.dispatch(
         ExchangeActions.addExchangeStart({ payload: exchange })
      );
      this.formGroupDirective.reset();
   }

   onGivenCurrencySelect(option: Currency): void {
      this.givenCurrencyId = option.id;
      this.form.get('givenCurrency').setValue(option.name);
      this.currencies$ = this.store.pipe(
         select(fromApp.selectAdminCurrencies),
         map((currency) =>
            currency.filter((c) => c.id !== this.givenCurrencyId)
         )
      );
   }

   onTakenCurrencySelect(option: Currency): void {
      this.takenCurrencyId = option.id;
      this.form.get('takenCurrency').setValue(option.name);
      this.currencies$ = this.store.pipe(
         select(fromApp.selectAdminCurrencies),
         map((currency) =>
            currency.filter((c) => c.id !== this.takenCurrencyId)
         )
      );
   }

   private initForm(): void {
      this.form = new FormGroup({
         givenCurrency: new FormControl(''),
         takenCurrency: new FormControl(''),
         givenCurrencyCourse: new FormControl(''),
         takenCurrencyCourse: new FormControl(''),
         maxGivenCurrency: new FormControl(''),
         maxTakenCurrency: new FormControl(''),
         minGivenCurrency: new FormControl(''),
         minTakenCurrency: new FormControl(''),
         comment: new FormControl(''),
      });
   }
}
