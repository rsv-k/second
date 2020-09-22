import { Currency } from './../../../../core/models/currency.model';
import * as CurrencyActions from '../actions/currency.actions';

export interface State {
   currencies: Currency[];
   currenciesFetchError: string;
   currencyCreateError: string;
}

const initialState: State = {
   currencies: [],
   currenciesFetchError: null,
   currencyCreateError: null,
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
         };
      case CurrencyActions.ADD_CURRENCY_FAIL:
         return {
            ...state,
            currencyCreateError: action.payload,
         };
      case CurrencyActions.DELETE_CURRENCY:
         return {
            ...state,
            currencies: state.currencies.filter((c) => c.id !== action.payload),
         };
      case CurrencyActions.CURRENCIES_LOAD_SUCCESS:
         return {
            ...state,
            currenciesFetchError: null,
            currencies: [...action.payload],
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
      default:
         return state;
   }
}
