import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromExchange from './reducers/exchange.reducer';
import * as fromProgress from './reducers/progress.reducer';
import * as fromOrder from './reducers/order.reducer';

export interface AppState {
   exchange: fromExchange.State;
   progress: fromProgress.State;
   order: fromOrder.State;
}
export const appReducers: ActionReducerMap<AppState> = {
   exchange: fromExchange.reducer,
   progress: fromProgress.reducer,
   order: fromOrder.reducer,
};

export const exchangeState = (state: AppState) => state.exchange;
export const getExchangesEntities = createSelector(
   exchangeState,
   fromExchange.getExchangesEntities
);

export const getAllExchanges = createSelector(
   getExchangesEntities,
   (entities) => {
      return Object.keys(entities).map((id) => entities[id]);
   }
);

export const getExchange = createSelector(
   exchangeState,
   fromExchange.getExchange
);
export const getExchangeError = createSelector(
   exchangeState,
   fromExchange.getExchangeError
);

export const orderState = (state: AppState) => state.order;
export const getAllOrders = createSelector(orderState, fromOrder.getAllOrders);
export const getOrder = createSelector(orderState, fromOrder.getOrder);
export const getOrderError = createSelector(
   orderState,
   fromOrder.getOrderError
);
