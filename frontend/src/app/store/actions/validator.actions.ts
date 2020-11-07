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

export const getValidatorsStart = createAction(
   '[VALIDATOR] GET VALDIATORS START'
);
export const getValidatorsSuccess = createAction(
   '[VALIDATOR] GET VALIDATORS SUCCESS',
   props<{ payload: Validator[] }>()
);

export const deleteValidatorStart = createAction(
   '[VALIDATOR] DELETE VALDIATOR START',
   props<{ payload: { id: string } }>()
);
export const deleteValidatorSuccess = createAction(
   '[VALIDATOR] DELETE VALIDATOR SUCCESS',
   props<{ payload: Validator }>()
);

export const editValidatorStart = createAction(
   '[VALIDATOR] EDIT VALDIATOR START',
   props<{ payload: { id: string; validator: Validator } }>()
);
export const editValidatorSuccess = createAction(
   '[VALIDATOR] EDIT VALDIATOR SUCCESS',
   props<{ payload: Validator }>()
);

export const validatorError = createAction(
   '[VALIDATOR] ERROR',
   props<{ payload: string }>()
);
