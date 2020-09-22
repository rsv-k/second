import { Currency } from './../../../../core/models/currency.model';
import * as CurrencyActions from '../actions/currency.actions';

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

export function currencyReducer(
   state = initialState,
   action: CurrencyActions.Actions
): State {
   switch (action.type) {
      case CurrencyActions.ADD_CURRENCY_START:
         return {
            ...state,
            currencyCreateError: null,
         };
      case CurrencyActions.ADD_CURRENCY_SUCCESS:
         return {
            ...state,
            currencies: [...state.currencies, action.payload],
            currenciesAmount: state.currenciesAmount + 1,
         };
      case CurrencyActions.ADD_CURRENCY_FAIL:
         return {
            ...state,
            currencyCreateError: action.payload,
         };

      case CurrencyActions.CURRENCIES_LOAD_SUCCESS:
         return {
            ...state,
            currenciesFetchError: null,
            currencies: [...action.payload.currencies],
            currenciesAmount: action.payload.currenciesAmount,
         };
      case CurrencyActions.LOAD_CURRENCIES:
         return {
            ...state,
            currenciesFetchError: null,
         };
      case CurrencyActions.CURRENCIES_LOAD_FAIL:
         return {
            ...state,
            currencies: [],
            currenciesFetchError: action.payload,
         };

      case CurrencyActions.DELETE_CURRENCY_START:
         return {
            ...state,
            currencyDeleteError: null,
         };
      case CurrencyActions.DELETE_CURRENCY_SUCCESS:
         return {
            ...state,
            currencyDeleteError: null,
            currencies: state.currencies.filter(
               (currency) => currency.id !== action.payload
            ),
            currenciesAmount: state.currenciesAmount - 1,
         };
      case CurrencyActions.DELETE_CURRENCY_FAIL:
         return {
            ...state,
            currencyDeleteError: action.payload,
         };

      default:
         return state;
   }
}
