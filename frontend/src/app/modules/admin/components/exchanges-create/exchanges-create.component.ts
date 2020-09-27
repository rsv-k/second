import { Exchange } from './../../../../core/models/exchange.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { Currency } from 'src/app/core/models/currency.model';
import * as fromCurrency from '../../store/reducers/currency.reducer';
import * as CurrencyActions from '../../store/actions/currency.actions';
import * as ExchangeActions from '../../../../store/actions/exchange.actions';

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

   private mode = 'create';
   private exchangeToEdit: Exchange = null;
   @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

   constructor(private store: Store<fromCurrency.AppState>) {}

   ngOnInit(): void {
      this.initForm();
      this.store.dispatch(CurrencyActions.currenciesLoadStart());
      this.currencies$ = this.store.pipe(
         select(fromCurrency.selectAdminCurrencies)
      );

      this.store
         .select('exchange')
         .pipe(first())
         .subscribe((data) => {
            this.exchangeToEdit = data.exchange;
            if (this.exchangeToEdit) {
               this.mode = 'edit';
               this.setForm(this.exchangeToEdit);
            }
         });
   }

   onSubmit(): void {
      const exchange: Exchange = {
         ...this.form.value,
         givenCurrencyId: this.givenCurrencyId,
         takenCurrencyId: this.takenCurrencyId,
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
         select(fromCurrency.selectAdminCurrencies),
         map((currency) =>
            currency.filter((c) => c.id !== this.givenCurrencyId)
         )
      );
   }

   onTakenCurrencySelect(option: Currency): void {
      this.takenCurrencyId = option.id;
      this.form.get('takenCurrency').setValue(option.name);
      this.currencies$ = this.store.pipe(
         select(fromCurrency.selectAdminCurrencies),
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

   private setForm(exchange: Exchange): void {
      console.log(exchange);
      this.form.patchValue({
         ...exchange,
         givenCurrency: exchange.givenCurrency.name,
         takenCurrency: exchange.takenCurrency.name,
      });

      this.form.get('givenCurrency').disable();
      this.form.get('takenCurrency').disable();
   }
}
