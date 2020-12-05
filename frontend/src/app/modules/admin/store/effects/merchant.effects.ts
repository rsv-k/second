import { MerchantService } from './../../services/merchant.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as MerchantActions from '../actions/merchants.actions';

@Injectable()
export class MerchantEffects {
   createMerchant$ = createEffect(() =>
      this.actions$.pipe(
         ofType(MerchantActions.createMerchantStart),
         mergeMap((action) =>
            this.merchantService.createMerchant(action.payload).pipe(
               map((merchant) =>
                  MerchantActions.createMerchantSuccess({ payload: merchant })
               ),
               catchError((error) =>
                  of(MerchantActions.merchantError({ payload: error.message }))
               )
            )
         )
      )
   );

   getMerchants$ = createEffect(() =>
      this.actions$.pipe(
         ofType(MerchantActions.getMerchantsStart),
         mergeMap(() =>
            this.merchantService.getMerchants().pipe(
               map((merchant) =>
                  MerchantActions.getMerchantsSuccess({
                     payload: merchant,
                  })
               )
            )
         ),
         catchError((error) =>
            of(MerchantActions.merchantError({ payload: error.message }))
         )
      )
   );

   deleteMerchant$ = createEffect(() =>
      this.actions$.pipe(
         ofType(MerchantActions.deleteMerchantStart),
         mergeMap((action) =>
            this.merchantService.deleteMerchant(action.payload.id).pipe(
               map((merchant) =>
                  MerchantActions.deleteMerchantSuccess({
                     payload: merchant,
                  })
               ),
               catchError((error) =>
                  of(MerchantActions.merchantError({ payload: error.message }))
               )
            )
         )
      )
   );

   editMerchant$ = createEffect(() =>
      this.actions$.pipe(
         ofType(MerchantActions.editMerchantStart),
         mergeMap((action) =>
            this.merchantService
               .editMerchant(
                  action.payload.merchant.id,
                  action.payload.merchant
               )
               .pipe(
                  map((validator) =>
                     MerchantActions.editMerchantSuccess({
                        payload: validator,
                     })
                  ),
                  catchError((error) =>
                     of(
                        MerchantActions.merchantError({
                           payload: error.message,
                        })
                     )
                  )
               )
         )
      )
   );

   constructor(
      private merchantService: MerchantService,
      private actions$: Actions
   ) {}
}
