import { Merchant } from '../../../../core/models/merchant.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as MerchantActions from '../actions/merchants.actions';

export const FEATURE_NAME = 'exchange';

export interface State {
   merchants: Merchant[];
   merchantError: string;
}

export const initialState: State = {
   merchants: [],
   merchantError: null,
};

const merchantReducer = createReducer(
   initialState,
   on(MerchantActions.createMerchantStart, (state) => ({
      ...state,
      validatorError: null,
   })),
   on(MerchantActions.createMerchantSuccess, (state, { payload }) => ({
      ...state,
      validators: [...state.merchants, payload],
   })),

   on(MerchantActions.getMerchantsStart, (state) => ({
      ...state,
      validatorError: null,
   })),
   on(MerchantActions.getMerchantsSuccess, (state, { payload }) => ({
      ...state,
      validators: [...payload],
   })),

   on(MerchantActions.deleteMerchantStart, (state) => ({
      ...state,
      validatorError: null,
   })),
   on(MerchantActions.deleteMerchantSuccess, (state, { payload }) => ({
      ...state,
      validators: state.merchants.filter((v) => v.id !== payload.id),
   })),

   on(MerchantActions.editMerchantStart, (state) => ({
      ...state,
      validatorError: null,
   })),
   on(MerchantActions.editMerchantSuccess, (state, { payload }) => ({
      ...state,
      validators: state.merchants.map((v) => {
         if (v.id === payload.id) {
            return payload;
         }

         return v;
      }),
   })),

   on(MerchantActions.merchantError, (state, { payload }) => ({
      ...state,
      validatorError: payload,
   }))
);

export function reducer(state: State, action: Action): State {
   return merchantReducer(state, action);
}
