import { Currency } from './../../../../core/models/currency.model';
import { Action } from '@ngrx/store';

export const ADD_CURRENCY = '[CURRENCY] ADD';
export const DELETE_CURRENCY = '[CURRENCY] DELETE';

export class AddCurrency implements Action {
   readonly type = ADD_CURRENCY;

   constructor(public payload: Currency) {}
}

export class DeleteCurrency implements Action {
   readonly type = DELETE_CURRENCY;

   constructor(public payload: string) {}
}

export type Actions = AddCurrency | DeleteCurrency;
