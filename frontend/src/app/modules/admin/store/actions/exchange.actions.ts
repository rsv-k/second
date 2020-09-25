import { createAction, props } from '@ngrx/store';
import { Exchange } from './../../../../core/models/exchange.model';

export const addExchangeStart = createAction(
   '[EXCHANGE] ADD EXCHANGE START',
   props<{ payload: Exchange }>()
);

export const addExchangeSuccess = createAction(
   '[EXCHANGE] ADD EXCHANGE SUCCESS',
   props<{ payload: Exchange }>()
);

export const loadExchangesStart = createAction(
   '[EXCHANGE] LOAD EXCHANGES START'
);

export const loadExchangesSuccess = createAction(
   '[EXCHANGE] LOAD EXCHANGES SUCCESS',
   props<{ payload: Exchange[] }>()
);

export const exchangeError = createAction(
   '[EXCHANGE] ERROR',
   props<{ payload: string }>()
);
