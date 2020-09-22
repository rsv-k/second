import { Currency } from './../../../../core/models/currency.model';
import { Action } from '@ngrx/store';

export const ADD_CURRENCY_START = '[CURRENCY] ADD START';
export const ADD_CURRENCY_SUCCESS = '[CURRENCY] ADD SUCCESS';
export const ADD_CURRENCY_FAIL = '[CURRENCY] ADD FAIL';

export const DELETE_CURRENCY = '[CURRENCY] DELETE';
export const LOAD_CURRENCIES = '[CURRENCY] LOAD CURRENCIES';
export const CURRENCIES_LOAD_SUCCESS = '[CURRENCY] LOAD SUCCESS';
export const CURRENCIES_LOAD_FAIL = '[CURRENCY] LOAD FAIL';

export class AddCurrencyStart implements Action {
   readonly type = ADD_CURRENCY_START;

   constructor(public payload: Currency) {}
}

export class AddCurrencySuccess implements Action {
   readonly type = ADD_CURRENCY_SUCCESS;

   constructor(public payload: Currency) {}
}

export class AddCurrencyFail implements Action {
   readonly type = ADD_CURRENCY_FAIL;

   constructor(public payload: string) {}
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
   | AddCurrencyStart
   | AddCurrencySuccess
   | AddCurrencyFail
   | DeleteCurrency
   | LoadCurrencies
   | CurrenciesLoadSuccess
   | CurrenciesLoadFail;
