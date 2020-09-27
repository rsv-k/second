import { Currency } from './../../../../core/models/currency.model';
import * as CurrencyActions from '../actions/currency.actions';
import {
   createReducer,
   on,
   Action,
   createFeatureSelector,
   createSelector,
} from '@ngrx/store';
import * as fromApp from '../../../../store/index';

export const FEATURE_NAME = 'currency';

export interface CurrencyModuleState {
   currencies: Currency[];
   currencyError: string;
   currency: Currency;
}

const initialState: CurrencyModuleState = {
   currencies: [],
   currencyError: null,
   currency: null,
};

const currencyReducer = createReducer(
   initialState,
   on(CurrencyActions.addCurrencyStart, (state) => ({
      ...state,
      currencyError: null,
      currency: null,
   })),
   on(CurrencyActions.addCurrencySuccess, (state, { payload }) => ({
      ...state,
      currencies: [...state.currencies, payload],
   })),

   on(CurrencyActions.currenciesLoadStart, (state) => ({
      ...state,
      currencyError: null,
      currency: null,
   })),
   on(CurrencyActions.currenciesLoadSuccess, (state, { payload }) => ({
      ...state,
      currencies: [...payload],
   })),

   on(CurrencyActions.deleteCurrencyStart, (state) => ({
      ...state,
      currencyError: null,
   })),
   on(CurrencyActions.deleteCurrencySuccess, (state, { payload }) => ({
      ...state,
      currencies: state.currencies.filter(
         (currency) => currency.id !== payload
      ),
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
      currency: null,
   })),

   on(CurrencyActions.currencyError, (state, { payload }) => ({
      ...state,
      currencyError: payload,
   }))
);

export function reducer(
   state: CurrencyModuleState,
   action: Action
): CurrencyModuleState {
   return currencyReducer(state, action);
}

export interface AppState extends fromApp.AppState {
   currency: CurrencyModuleState;
}

export const selectAdmin = createFeatureSelector<AppState, CurrencyModuleState>(
   FEATURE_NAME
);
export const selectAdminCurrencies = createSelector(
   selectAdmin,
   (state: CurrencyModuleState) => state.currencies
);
