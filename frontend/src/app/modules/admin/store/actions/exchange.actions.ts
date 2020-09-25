import { createAction, props } from '@ngrx/store';
import { Exchange } from './../../../../core/models/exchange.model';

export const addExchangeStart = createAction(
   '[EXCHANGE] ADD START',
   props<{ payload: Exchange }>()
);

export const addExchangeSuccess = createAction(
   '[EXCHANGE] ADD SUCCESS',
   props<{ payload: Exchange }>()
);

export const exchangeError = createAction(
   '[EXCHANGE] ERROR',
   props<{ payload: string }>()
);
