import { Exchange } from '../../core/models/exchange.model';
import { ExchangeService } from '../../core/services/exchange.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ExchangeActions from '../actions/exchange.actions';
import { Router } from '@angular/router';
import * as fromRoot from '../index';
import { Store } from '@ngrx/store';

@Injectable()
export class ExchangeEffects {
   createExchange$ = createEffect(() =>
      this.actions$.pipe(
         ofType(ExchangeActions.addExchangeStart),
         mergeMap((action) =>
            this.exchangeService.createExchange(action.payload).pipe(
               map((exchange: Exchange) =>
                  ExchangeActions.addExchangeSuccess({
                     payload: exchange,
                  })
               ),
               catchError((error) =>
                  of(ExchangeActions.exchangeError({ payload: error.message }))
               )
            )
         )
      )
   );

   exchangeNavigate$ = createEffect(
      () =>
         this.actions$.pipe(
            ofType(
               ExchangeActions.addExchangeSuccess,
               ExchangeActions.editExchangeSuccess
            ),
            tap(() => {
               this.router.navigate(['admin-dashboard/exchanges-show']);
            })
         ),
      { dispatch: false }
   );

   loadExchanges$ = createEffect(() =>
      this.actions$.pipe(
         ofType(ExchangeActions.loadExchangesStart),
         mergeMap((action) =>
            this.exchangeService.getExchanges().pipe(
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
         withLatestFrom(this.store.select(fromRoot.selectRouterParamId)),
         mergeMap(([action, id]) =>
            this.exchangeService
               .updateExchange(id || action.payload.id, action.payload.body)
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
      private actions$: Actions,
      private store: Store<fromRoot.AppState>,
      private router: Router
   ) {}
}
