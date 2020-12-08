import { Exchange } from '../../core/models/exchange.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as ExchangeActions from '../actions/exchange.actions';

export const FEATURE_NAME = 'exchange';

export interface State {
   exchanges: Exchange[];
   exchange: Exchange;
   exchangeError: string;
}

export const initialState: State = {
   exchanges: [],
   exchange: null,
   exchangeError: null,
};

const exchangeReducer = createReducer(
   initialState,
   on(ExchangeActions.addExchangeStart, (state) => ({
      ...state,
      exchangeError: null,
      exchange: null,
   })),
   on(ExchangeActions.addExchangeSuccess, (state, { payload }) => ({
      ...state,
      exchanges: [...state.exchanges, payload],
   })),

   on(ExchangeActions.loadExchangesStart, (state) => ({
      ...state,
      exchangeError: null,
      exchange: null,
   })),
   on(ExchangeActions.loadExchangesSuccess, (state, { payload }) => ({
      ...state,
      exchanges: [...payload],
   })),

   on(ExchangeActions.deleteExchangeStart, (state) => ({
      ...state,
   })),
   on(ExchangeActions.deleteExchangeSuccess, (state, { payload }) => ({
      ...state,
      exchanges: state.exchanges.filter((ex) => ex.id !== payload.id),
   })),

   on(ExchangeActions.loadExchangeStart, (state) => ({
      ...state,
   })),
   on(ExchangeActions.loadExchangeSuccess, (state, { payload }) => ({
      ...state,
      exchange: payload,
   })),

   on(ExchangeActions.editExchangeStart, (state) => ({
      ...state,
   })),
   on(ExchangeActions.editExchangeSuccess, (state, { payload }) => ({
      ...state,
      exchanges: state.exchanges.map((ex) => {
         if (ex.id === payload.id) {
            return payload;
         }

         return ex;
      }),
      exchange: null,
   })),

   on(ExchangeActions.exchangeError, (state, { payload }) => ({
      ...state,
      exchangeError: payload,
   }))
);

export function reducer(state: State, action: Action): State {
   return exchangeReducer(state, action);
}

export const getAllExchanges = (state: State) => state.exchanges;
export const getExchange = (state: State) => state.exchange;
export const getExchangeError = (state: State) => state.exchangeError;
