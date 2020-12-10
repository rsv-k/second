import { Currency } from './../../../../core/models/currency.model';
import * as CurrencyActions from '../actions/currency.actions';
import { createReducer, on, Action } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface State extends EntityState<Currency> {
   currencyError: string;
}

export const adapter: EntityAdapter<Currency> = createEntityAdapter<Currency>();

const initialState: State = adapter.getInitialState({
   currencyError: null,
});

const currencyReducer = createReducer(
   initialState,
   on(CurrencyActions.addCurrencySuccess, (state, { payload }) =>
      adapter.addOne(payload, state)
   ),
   on(CurrencyActions.currenciesLoadSuccess, (state, { payload }) =>
      adapter.addMany(payload, state)
   ),
   on(CurrencyActions.deleteCurrencySuccess, (state, { payload }) =>
      adapter.removeOne(payload, state)
   ),
   on(CurrencyActions.currencyLoadSuccess, (state, { payload }) =>
      adapter.setOne(payload, state)
   ),
   on(CurrencyActions.currencyUpdateSuccess, (state, { payload }) =>
      adapter.setOne(payload, state)
   ),

   on(CurrencyActions.currencyError, (state, { payload }) => ({
      ...state,
      currencyError: payload,
   }))
);

export function reducer(state: State, action: Action): State {
   return currencyReducer(state, action);
}

export const getCurrenciesEntities = (state: State) => state.entities;
export const getCurrencyError = (state: State) => state.currencyError;
