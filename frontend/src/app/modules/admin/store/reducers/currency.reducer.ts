import { Currency } from './../../../../core/models/currency.model';
import * as CurrencyActions from '../actions/currency.actions';
import { createReducer, on, Action } from '@ngrx/store';

export const FEATURE_NAME = 'admin';

export interface State {
   currencies: Currency[];
   currencyError: string;
   amounts: {
      currenciesAmount: number;
   };
   currency: Currency;
}

const initialState: State = {
   currencies: [],
   currencyError: null,
   amounts: {
      currenciesAmount: 0,
   },
   currency: null,
};

const currencyReducer = createReducer(
   initialState,
   on(CurrencyActions.addCurrencyStart, (state) => ({
      ...state,
      currencyCreateError: null,
   })),
   on(CurrencyActions.addCurrencySuccess, (state, { payload }) => ({
      ...state,
      currencies: [...state.currencies, payload],
      amounts: {
         currenciesAmount: state.amounts.currenciesAmount + 1,
      },
   })),

   on(CurrencyActions.currenciesLoadStart, (state) => ({
      ...state,
      currenciesFetchError: null,
   })),
   on(CurrencyActions.currenciesLoadSuccess, (state, { payload }) => ({
      ...state,
      currencies: [...payload.currencies],
      amounts: {
         currenciesAmount: payload.currenciesAmount,
      },
   })),

   on(CurrencyActions.deleteCurrencyStart, (state) => ({
      ...state,
      currencyDeleteError: null,
   })),
   on(CurrencyActions.deleteCurrencySuccess, (state, { payload }) => ({
      ...state,
      currencies: state.currencies.filter(
         (currency) => currency.id !== payload
      ),
      amounts: {
         currenciesAmount: state.amounts.currenciesAmount - 1,
      },
   })),

   on(CurrencyActions.currencyLoadStart, (state) => ({
      ...state,
   })),
   on(CurrencyActions.currencyLoadSuccess, (state, { payload }) => ({
      ...state,
      currency: payload,
   })),

   on(CurrencyActions.currencyUpdateStart, (state) => ({
      ...state,
   })),

   on(CurrencyActions.currencyUpdateSuccess, (state, { payload }) => ({
      ...state,
      currencies: state.currencies.map((currency) =>
         currency.id === payload.id ? payload : currency
      ),
   })),

   on(CurrencyActions.currencyError, (state, { payload }) => ({
      ...state,
      currencyError: payload,
   }))
);

export function reducer(state: State, action: Action) {
   return currencyReducer(state, action);
}
