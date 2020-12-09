import { Exchange } from '../../core/models/exchange.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as ExchangeActions from '../actions/exchange.actions';

export interface State {
   entities: { [id: string]: Exchange };
   exchange: Exchange;
   exchangeError: string;
}

export const initialState: State = {
   entities: {},
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
   on(ExchangeActions.addExchangeSuccess, (state, { payload }) => {
      state.entities[payload.id] = payload;

      return {
         ...state,
      };
   }),

   on(ExchangeActions.loadExchangesStart, (state) => ({
      ...state,
      exchangeError: null,
      exchange: null,
   })),
   on(ExchangeActions.loadExchangesSuccess, (state, { payload }) => {
      const exchanges = payload;

      const entities = exchanges.reduce(
         (entities: { [id: string]: Exchange }, exchange: Exchange) => {
            return {
               ...entities,
               [exchange.id]: exchange,
            };
         },
         { ...state.entities }
      );

      return {
         ...state,
         entities,
      };
   }),

   on(ExchangeActions.deleteExchangeStart, (state) => ({
      ...state,
   })),
   on(ExchangeActions.deleteExchangeSuccess, (state, { payload }) => {
      state.entities[payload.id] = null;

      return {
         ...state,
      };
   }),

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
   on(ExchangeActions.editExchangeSuccess, (state, { payload }) => {
      state.entities[payload.id] = payload;

      return {
         ...state,
         exchange: null,
      };
   }),

   on(ExchangeActions.exchangeError, (state, { payload }) => ({
      ...state,
      exchangeError: payload,
   }))
);

export function reducer(state: State, action: Action): State {
   return exchangeReducer(state, action);
}

export const getExchangesEntities = (state: State) => state.entities;

export const getExchange = (state: State) => state.exchange;
export const getExchangeError = (state: State) => state.exchangeError;
