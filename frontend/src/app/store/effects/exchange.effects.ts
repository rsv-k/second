import { Exchange } from '../../core/models/exchange.model';
import { ExchangeService } from '../../modules/admin/services/exchange.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ExchangeActions from '../actions/exchange.actions';

@Injectable()
export class ExchangeEffects {
   createExchange$ = createEffect(() =>
      this.actions$.pipe(
         ofType(ExchangeActions.addExchangeStart),
         mergeMap((action) =>
            this.exchangeService.createExchange(action.payload).pipe(
               map((exchange: Exchange) =>
                  ExchangeActions.addExchangeSuccess({ payload: exchange })
               ),
               catchError((error) =>
                  of(ExchangeActions.exchangeError({ payload: error.message }))
               )
            )
         )
      )
   );

   loadExchanges$ = createEffect(() =>
      this.actions$.pipe(
         ofType(ExchangeActions.loadExchangesStart),
         mergeMap(() =>
            this.exchangeService.getExchanges().pipe(
               map((exchanges: Exchange[]) =>
                  ExchangeActions.loadExchangesSuccess({ payload: exchanges })
               ),
               catchError((error) =>
                  of(ExchangeActions.exchangeError({ payload: error.message }))
               )
            )
         )
      )
   );

   constructor(
      private exchangeService: ExchangeService,
      private actions$: Actions
   ) {}
}
