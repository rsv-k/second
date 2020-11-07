import { ValidatorService } from './../../core/services/validator.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ValidatorActions from '../actions/validator.actions';

@Injectable()
export class ValidatorEffects {
   createValidator$ = createEffect(() =>
      this.actions$.pipe(
         ofType(ValidatorActions.addValidatorStart),
         mergeMap((action) =>
            this.validatorService.createValidator(action.payload).pipe(
               map((validator) =>
                  ValidatorActions.addValidatorSuccess({ payload: validator })
               ),
               catchError((error) =>
                  of(
                     ValidatorActions.validatorError({ payload: error.message })
                  )
               )
            )
         )
      )
   );

   getValidators$ = createEffect(() =>
      this.actions$.pipe(
         ofType(ValidatorActions.getValidatorsStart),
         mergeMap((action) =>
            this.validatorService.getValidators().pipe(
               map((validator) =>
                  ValidatorActions.getValidatorsSuccess({
                     payload: validator,
                  })
               )
            )
         ),
         catchError((error) =>
            of(ValidatorActions.validatorError({ payload: error.message }))
         )
      )
   );

   deleteValidator$ = createEffect(() =>
      this.actions$.pipe(
         ofType(ValidatorActions.deleteValidatorStart),
         mergeMap((action) =>
            this.validatorService.deleteValidator(action.payload.id).pipe(
               map((validator) =>
                  ValidatorActions.deleteValidatorSuccess({
                     payload: validator,
                  })
               ),
               catchError((error) =>
                  of(
                     ValidatorActions.validatorError({ payload: error.message })
                  )
               )
            )
         )
      )
   );

   editValidator$ = createEffect(() =>
      this.actions$.pipe(
         ofType(ValidatorActions.editValidatorStart),
         mergeMap((action) =>
            this.validatorService
               .editValidator(
                  action.payload.validator.id,
                  action.payload.validator
               )
               .pipe(
                  map((validator) =>
                     ValidatorActions.editValidatorSuccess({
                        payload: validator,
                     })
                  ),
                  catchError((error) =>
                     of(
                        ValidatorActions.validatorError({
                           payload: error.message,
                        })
                     )
                  )
               )
         )
      )
   );

   constructor(
      private validatorService: ValidatorService,
      private actions$: Actions
   ) {}
}
