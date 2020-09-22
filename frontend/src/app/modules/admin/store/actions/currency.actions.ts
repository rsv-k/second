import { Currency } from './../../../../core/models/currency.model';
import { createAction, props } from '@ngrx/store';

export const addCurrencyStart = createAction(
   '[CURRENCY] ADD START',
   props<{ payload: Currency }>()
);
export const addCurrencySuccess = createAction(
   '[CURRENCY] ADD SUCCESS',
   props<{ payload: Currency }>()
);
export const addCurrencyFail = createAction(
   '[CURRENCY] ADD FAIL',
   props<{ payload: string }>()
);

export const currenciesLoadStart = createAction(
   '[CURRENCY] LOAD CURRENCIES START'
);
export const currenciesLoadSuccess = createAction(
   '[CURRENCY] LOAD SUCCESS',
   props<{ payload: { currencies: Currency[]; currenciesAmount: number } }>()
);
export const currenciesLoadFail = createAction(
   '[CURRENCY] LOAD FAIL',
   props<{ payload: string }>()
);

export const deleteCurrencyStart = createAction(
   '[CURRENCY] DELETE START',
   props<{ payload: string }>()
);
export const deleteCurrencySuccess = createAction(
   '[CURRENCY] DELETE SUCCESS',
   props<{ payload: string }>()
);
export const deleteCurrencyFail = createAction(
   '[CURRENCY] DELETE FAIL',
   props<{ payload: string }>()
);
