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
         ofType(CurrencyActions.currenciesLoadStart),
         mergeMap((action) =>
            this.currencyService.getCurrencies().pipe(
               map(
                  (currencies: {
                     currencies: Currency[];
                     currenciesAmount: number;
                  }) =>
                     CurrencyActions.currenciesLoadSuccess({
                        payload: currencies,
                     })
               ),
               catchError((error) =>
                  of(CurrencyActions.currencyError(error.message))
               )
            )
         )
      )
   );

   createCurrency$ = createEffect(() =>
      this.actions$.pipe(
         ofType(CurrencyActions.addCurrencyStart),
         mergeMap((action) =>
            this.currencyService.createCurrency(action.payload).pipe(
               map((currency: Currency) =>
                  CurrencyActions.addCurrencySuccess({ payload: currency })
               ),
               catchError((error) =>
                  of(CurrencyActions.currencyError({ payload: error.message }))
               )
            )
         )
      )
   );

   deleteCurrency$ = createEffect(() =>
      this.actions$.pipe(
         ofType(CurrencyActions.deleteCurrencyStart),
         mergeMap((action) =>
            this.currencyService.deleteCurrency(action.payload).pipe(
               map((currency: Currency) =>
                  CurrencyActions.deleteCurrencySuccess({
                     payload: currency.id,
                  })
               ),
               catchError((error) =>
                  of(
                     CurrencyActions.currencyError({
                        payload: error.message,
                     })
                  )
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
