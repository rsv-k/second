import { Currency } from './../../../../core/models/currency.model';
import { Action } from '@ngrx/store';

export const ADD_CURRENCY = '[CURRENCY] ADD';

export class AddCurrency implements Action {
   readonly type = ADD_CURRENCY;

   constructor(public payload: Currency) {}
}
