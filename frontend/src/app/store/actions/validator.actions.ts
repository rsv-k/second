import { createAction, props } from '@ngrx/store';
import { Validator } from '../../core/models/validator.model';

export const addValidatorStart = createAction(
   '[VALIDATOR] ADD VALIDATOR START',
   props<{ payload: Validator }>()
);

export const addValidatorSuccess = createAction(
   '[VALIDATOR] ADD VALIDATOR SUCCESS',
   props<{ payload: Validator }>()
);

export const validatorError = createAction(
   '[VALIDATOR] ERROR',
   props<{ payload: string }>()
);
