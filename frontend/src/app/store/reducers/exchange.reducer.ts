import { Exchange } from '../../core/models/exchange.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as ExchangeActions from '../actions/exchange.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface State extends EntityState<Exchange> {
   exchangeError: string;
}

export const adapter: EntityAdapter<Exchange> = createEntityAdapter<Exchange>();

export const initialState: State = adapter.getInitialState({
   exchangeError: null,
});

const exchangeReducer = createReducer(
   initialState,
   on(ExchangeActions.addExchangeSuccess, (state, { payload }) =>
      adapter.addOne(payload, state)
   ),
   on(ExchangeActions.loadExchangesSuccess, (state, { payload }) =>
      adapter.addMany(payload, state)
   ),
   on(ExchangeActions.deleteExchangeSuccess, (state, { payload }) =>
      adapter.removeOne(payload.id, state)
   ),
   on(ExchangeActions.loadExchangeSuccess, (state, { payload }) =>
      adapter.setOne(payload, state)
   ),
   on(ExchangeActions.editExchangeSuccess, (state, { payload }) =>
      adapter.setOne(payload, state)
   ),
   on(ExchangeActions.patchExchangeSuccess, (state, { payload }) =>
      adapter.setOne(payload, state)
   ),
   on(ExchangeActions.exchangeError, (state, { payload }) => ({
      ...state,
      exchangeError: payload,
   }))
);

export function reducer(state: State, action: Action): State {
   return exchangeReducer(state, action);
}

export const getExchangesEntities = (state: State) => state.entities;
export const getExchangeError = (state: State) => state.exchangeError;
