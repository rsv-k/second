import { Exchange } from '../../core/models/exchange.model';
import { ExchangeService } from '../../core/services/exchange.service';
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
         mergeMap((action) =>
            this.exchangeService.getExchanges(action.payload.isSorted).pipe(
               map((exchanges: Exchange[]) =>
                  ExchangeActions.loadExchangesSuccess({
                     payload: exchanges,
                  })
               ),
               catchError((error) =>
                  of(
                     ExchangeActions.exchangeError({
                        payload: error.message,
                     })
                  )
               )
            )
         )
      )
   );

   deleteExchange$ = createEffect(() =>
      this.actions$.pipe(
         ofType(ExchangeActions.deleteExchangeStart),
         mergeMap((action) =>
            this.exchangeService.deleteExchange(action.payload).pipe(
               map((exchange: Exchange) =>
                  ExchangeActions.deleteExchangeSuccess({ payload: exchange })
               ),
               catchError((error) =>
                  of(ExchangeActions.exchangeError({ payload: error.message }))
               )
            )
         )
      )
   );

   loadExchange$ = createEffect(() =>
      this.actions$.pipe(
         ofType(ExchangeActions.loadExchangeStart),
         mergeMap((action) =>
            this.exchangeService.getExchange(action.payload).pipe(
               map((exchange: Exchange) =>
                  ExchangeActions.loadExchangeSuccess({ payload: exchange })
               ),
               catchError((error) =>
                  of(ExchangeActions.exchangeError({ payload: error.message }))
               )
            )
         )
      )
   );

   updatedExchange$ = createEffect(() =>
      this.actions$.pipe(
         ofType(ExchangeActions.editExchangeStart),
         mergeMap((action) =>
            this.exchangeService
               .updateExchange(action.payload.id, action.payload.exchange)
               .pipe(
                  map((exchange: Exchange) =>
                     ExchangeActions.editExchangeSuccess({ payload: exchange })
                  ),
                  catchError((error) =>
                     of(
                        ExchangeActions.exchangeError({
                           payload: error.message,
                        })
                     )
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
