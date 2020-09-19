import { Currency } from './../../../../core/models/currency.model';
import * as CurrencyActions from '../actions/currency.actions';

export interface State {
   currencies: Currency[];
}

const initialState: State = {
   currencies: [
      {
         id: '1',
         name: 'ADV-RUB',
         stringId: 'Advanced Cash RUB',
         card: '1234123412341234',
         reserve: 25000,
         icon:
            'https://images.unsplash.com/photo-1600493504591-aa1849716b36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
         currencyCode: 'RUB',
      },
      {
         id: '2',
         name: 'ADV-EUR',
         stringId: 'Advanced Cash EUR',
         card: '1234123412341234',
         reserve: 1000,
         icon:
            'https://images.unsplash.com/photo-1600493504591-aa1849716b36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
         currencyCode: 'EUR',
      },
   ],
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
      default:
         return state;
   }
}
