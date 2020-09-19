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
   ],
};

export function currencyReducer(
   state = initialState,
   action: CurrencyActions.AddCurrency
): State {
   switch (action.type) {
      case CurrencyActions.ADD_CURRENCY:
         return {
            ...state,
            currencies: [...state.currencies, action.payload],
         };
      default:
         return state;
   }
}
