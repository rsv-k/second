import { Validator } from '../../core/models/validator.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as ValidatorActions from '../actions/validator.actions';

export const FEATURE_NAME = 'exchange';

export interface State {
   validators: Validator[];
   validatorError: string;
}

export const initialState: State = {
   validators: [],
   validatorError: null,
};

const validatorReducer = createReducer(
   initialState,
   on(ValidatorActions.addValidatorStart, (state) => ({
      ...state,
      validatorError: null,
   })),
   on(ValidatorActions.addValidatorSuccess, (state, { payload }) => ({
      ...state,
      validators: [...state.validators, payload],
   })),

   on(ValidatorActions.validatorError, (state, { payload }) => ({
      ...state,
      validatorError: payload,
   }))
);

export function reducer(state: State, action: Action): State {
   return validatorReducer(state, action);
}
