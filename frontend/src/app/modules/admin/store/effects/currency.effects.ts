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
         mergeMap(() =>
            this.currencyService.getCurrencies().pipe(
               map(
                  (currencies: any) =>
                     new CurrencyActions.CurrenciesLoadSuccess(currencies)
               ),
               catchError(() =>
                  of(
                     new CurrencyActions.CurrenciesLoadFail(
                        'Currencies fetch failed'
                     )
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
