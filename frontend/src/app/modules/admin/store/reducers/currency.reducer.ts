import { Currency } from './../../../../core/models/currency.model';
import * as CurrencyActions from '../actions/currency.actions';
import { createReducer, on, Action } from '@ngrx/store';

export interface State {
   currencies: Currency[];
   currenciesFetchError: string;
   currencyCreateError: string;
   currencyDeleteError: string;
   currenciesAmount: number;
}

const initialState: State = {
   currencies: [],
   currenciesFetchError: null,
   currencyCreateError: null,
   currencyDeleteError: null,
   currenciesAmount: 0,
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
      currenciesAmount: state.currenciesAmount + 1,
   })),
   on(CurrencyActions.addCurrencyFail, (state, { payload }) => ({
      ...state,
      currencyCreateError: payload,
   })),

   on(CurrencyActions.currenciesLoadStart, (state) => ({
      ...state,
      currenciesFetchError: null,
   })),
   on(CurrencyActions.currenciesLoadSuccess, (state, { payload }) => ({
      ...state,
      currencies: [...payload.currencies],
      currenciesAmount: payload.currenciesAmount,
   })),
   on(CurrencyActions.currenciesLoadFail, (state, { payload }) => ({
      ...state,
      currenciesFetchError: payload,
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
      currenciesAmount: state.currenciesAmount - 1,
   })),
   on(CurrencyActions.deleteCurrencyFail, (state, { payload }) => ({
      ...state,
      currencyDeleteError: payload,
   }))
);

export function reducer(state: State, action: Action) {
   return currencyReducer(state, action);
}
