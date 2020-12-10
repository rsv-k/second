import { Merchant } from '../../../../core/models/merchant.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as MerchantActions from '../actions/merchants.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface State extends EntityState<Merchant> {
   merchantError: string;
}

export const adapter: EntityAdapter<Merchant> = createEntityAdapter<Merchant>();

export const initialState: State = adapter.getInitialState({
   merchantError: null,
});

const merchantReducer = createReducer(
   initialState,
   on(MerchantActions.createMerchantSuccess, (state, { payload }) =>
      adapter.addOne(payload, state)
   ),
   on(MerchantActions.getMerchantsSuccess, (state, { payload }) =>
      adapter.addMany(payload, state)
   ),
   on(MerchantActions.deleteMerchantSuccess, (state, { payload }) =>
      adapter.removeOne(payload.id, state)
   ),
   on(MerchantActions.editMerchantSuccess, (state, { payload }) =>
      adapter.updateOne(payload, state)
   ),

   on(MerchantActions.merchantError, (state, { payload }) => ({
      ...state,
      merchantError: payload,
   }))
);

export function reducer(state: State, action: Action): State {
   return merchantReducer(state, action);
}

export const getMerchantsEntities = (state: State) => state.entities;
export const getMerchantError = (state: State) => state.merchantError;
