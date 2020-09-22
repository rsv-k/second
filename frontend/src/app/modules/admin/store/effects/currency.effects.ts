import { Currency } from './../../../../core/models/currency.model';
import { CurrencyService } from './../../services/currency.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CurrencyActions from '../actions/currency.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CurrencyEffects {
   loadCurrencies$ = createEffect(() =>
      this.actions$.pipe(
         ofType(CurrencyActions.LOAD_CURRENCIES),
         mergeMap((data) =>
            this.currencyService.getCurrencies().pipe(
               map(
                  (currencies: Currency[]) =>
                     new CurrencyActions.CurrenciesLoadSuccess(currencies)
               ),
               catchError((error) =>
                  of(new CurrencyActions.CurrenciesLoadFail(error.message))
               )
            )
         )
      )
   );

   createCurrency$ = createEffect(() =>
      this.actions$.pipe(
         ofType(CurrencyActions.ADD_CURRENCY_START),
         mergeMap((data: CurrencyActions.AddCurrencyStart) =>
            this.currencyService.createCurrency(data.payload).pipe(
               map(
                  (currency: Currency) =>
                     new CurrencyActions.AddCurrencySuccess(currency)
               ),
               catchError((error) =>
                  of(new CurrencyActions.CurrenciesLoadFail(error.message))
               )
            )
         )
      )
   );

   constructor(
      private actions$: Actions,
      private currencyService: CurrencyService
   ) {}
}
