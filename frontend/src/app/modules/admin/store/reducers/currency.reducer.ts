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
         icon: 'test',
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
