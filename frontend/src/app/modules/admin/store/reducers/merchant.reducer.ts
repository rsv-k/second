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
      merchantError: null,
   })),
   on(MerchantActions.createMerchantSuccess, (state, { payload }) => ({
      ...state,
      merchant: [...state.merchants, payload],
   })),

   on(MerchantActions.getMerchantsStart, (state) => ({
      ...state,
      merchantError: null,
   })),
   on(MerchantActions.getMerchantsSuccess, (state, { payload }) => ({
      ...state,
      merchants: [...payload],
   })),

   on(MerchantActions.deleteMerchantStart, (state) => ({
      ...state,
      merchantError: null,
   })),
   on(MerchantActions.deleteMerchantSuccess, (state, { payload }) => ({
      ...state,
      merchants: state.merchants.filter((v) => v.id !== payload.id),
   })),

   on(MerchantActions.editMerchantStart, (state) => ({
      ...state,
      merchantError: null,
   })),
   on(MerchantActions.editMerchantSuccess, (state, { payload }) => ({
      ...state,
      merchants: state.merchants.map((v) => {
         if (v.id === payload.id) {
            return payload;
         }

         return v;
      }),
   })),

   on(MerchantActions.merchantError, (state, { payload }) => ({
      ...state,
      merchantError: payload,
   }))
);

export function reducer(state: State, action: Action): State {
   return merchantReducer(state, action);
}

export const getAllMerchants = (state: State) => state.merchants;
export const getMerchantError = (state: State) => state.merchantError;
