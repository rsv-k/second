import { Validator } from '../../../../core/models/validator.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as ValidatorActions from '../actions/validator.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface State extends EntityState<Validator> {
   validatorError: string;
}

export const adapter: EntityAdapter<Validator> = createEntityAdapter<Validator>();

export const initialState: State = adapter.getInitialState({
   validatorError: null,
});

const validatorReducer = createReducer(
   initialState,
   on(ValidatorActions.addValidatorSuccess, (state, { payload }) =>
      adapter.addOne(payload, state)
   ),
   on(ValidatorActions.getValidatorsSuccess, (state, { payload }) =>
      adapter.addMany(payload, state)
   ),
   on(ValidatorActions.deleteValidatorSuccess, (state, { payload }) =>
      adapter.removeOne(payload.id, state)
   ),
   on(ValidatorActions.editValidatorSuccess, (state, { payload }) =>
      adapter.setOne(payload, state)
   ),

   on(ValidatorActions.validatorError, (state, { payload }) => ({
      ...state,
      validatorError: payload,
   }))
);

export function reducer(state: State, action: Action): State {
   return validatorReducer(state, action);
}

export const getValidatorsEntities = (state: State) => state.entities;
export const getValidatorError = (state: State) => state.validatorError;
