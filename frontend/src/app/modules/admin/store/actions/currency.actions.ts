import { Currency } from './../../../../core/models/currency.model';
import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

export const addCurrencyStart = createAction(
   '[CURRENCY] ADD START',
   props<{ payload: Currency }>()
);
export const addCurrencySuccess = createAction(
   '[CURRENCY] ADD SUCCESS',
   props<{ payload: Currency }>()
);

export const currenciesLoadStart = createAction(
   '[CURRENCY] LOAD CURRENCIES START'
);
export const currenciesLoadSuccess = createAction(
   '[CURRENCY] LOAD SUCCESS',
   props<{ payload: Currency[] }>()
);

export const deleteCurrencyStart = createAction(
   '[CURRENCY] DELETE START',
   props<{ payload: string }>()
);
export const deleteCurrencySuccess = createAction(
   '[CURRENCY] DELETE SUCCESS',
   props<{ payload: string }>()
);

export const currencyLoadStart = createAction(
   '[CURRENCY] LOAD CURRENCY START',
   props<{ payload: string }>()
);

export const currencyLoadSuccess = createAction(
   '[CURRENCY] LOAD CURRENCY SUCCESS',
   props<{ payload: Currency }>()
);

export const currencyUpdateStart = createAction(
   '[CURRENCY] UPDATE CURRENCY START',
   props<{ payload: { id: string; currency: any } }>()
);

export const currencyUpdateSuccess = createAction(
   '[CURRENCY] UPDATE CURRENCY SUCCESS',
   props<{ payload: Update<Currency> }>()
);

export const currencyError = createAction(
   '[CURRENCY] ERROR',
   props<{ payload: string }>()
);
