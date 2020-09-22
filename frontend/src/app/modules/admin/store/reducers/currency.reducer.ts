import { Currency } from './../../../../core/models/currency.model';
import * as CurrencyActions from '../actions/currency.actions';

export interface State {
   currencies: Currency[];
   currenciesFetchError: string;
}

const initialState: State = {
   currencies: [],
   currenciesFetchError: null,
};

export function currencyReducer(
   state = initialState,
   action: CurrencyActions.Actions
): State {
   switch (action.type) {
      case CurrencyActions.ADD_CURRENCY:
         return {
            ...state,
            currencies: [...state.currencies, action.payload],
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
