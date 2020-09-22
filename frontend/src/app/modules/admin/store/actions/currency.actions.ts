import { Currency } from './../../../../core/models/currency.model';
import { Action } from '@ngrx/store';

export const ADD_CURRENCY = '[CURRENCY] ADD';
export const DELETE_CURRENCY = '[CURRENCY] DELETE';
export const LOAD_CURRENCIES = '[CURRENCY] LOAD CURRENCIES';
export const CURRENCIES_LOAD_SUCCESS = '[CURRENCY] LOAD SUCCESS';
export const CURRENCIES_LOAD_FAIL = '[CURRENCY] LOAD FAIL';

export class AddCurrency implements Action {
   readonly type = ADD_CURRENCY;

   constructor(public payload: Currency) {}
}

export class LoadCurrencies implements Action {
   readonly type = LOAD_CURRENCIES;
}

export class CurrenciesLoadSuccess implements Action {
   readonly type = CURRENCIES_LOAD_SUCCESS;

   constructor(public payload: Currency[]) {}
}

export class CurrenciesLoadFail implements Action {
   readonly type = CURRENCIES_LOAD_FAIL;

   constructor(public payload: string) {}
}

export class DeleteCurrency implements Action {
   readonly type = DELETE_CURRENCY;

   constructor(public payload: string) {}
}

export type Actions =
   | AddCurrency
   | DeleteCurrency
   | LoadCurrencies
   | CurrenciesLoadSuccess
   | CurrenciesLoadFail;
