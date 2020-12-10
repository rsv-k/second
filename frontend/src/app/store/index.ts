import {
   ActionReducerMap,
   createFeatureSelector,
   createSelector,
} from '@ngrx/store';
import * as fromExchange from './reducers/exchange.reducer';
import * as fromProgress from './reducers/progress.reducer';
import * as fromOrder from './reducers/order.reducer';
import * as fromRouter from '@ngrx/router-store';
import { Params } from '@angular/router';

export interface RouterStateUrl {
   url: string;
   queryParams: Params;
   params: Params;
}

export interface AppState {
   exchange: fromExchange.State;
   progress: fromProgress.State;
   order: fromOrder.State;
   routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const appReducers: ActionReducerMap<AppState> = {
   exchange: fromExchange.reducer,
   progress: fromProgress.reducer,
   order: fromOrder.reducer,
   routerReducer: fromRouter.routerReducer,
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
   (state, props) => state.entities[props.id]
);
export const getExchangeError = createSelector(
   exchangeState,
   fromExchange.getExchangeError
);

export const orderState = (state: AppState) => state.order;
export const getOrdersEntities = createSelector(
   orderState,
   fromOrder.getOrdersEntities
);

export const getAllOrders = createSelector(orderState, (state) => {
   const ids = [
      ...state.ids.slice((state.currentPage - 1) * 10, state.currentPage * 10),
   ];
   return ids.map((id) => state.entities[id]);
});
export const getOrder = createSelector(
   getOrdersEntities,
   (entities, props) => entities[props.id]
);
export const getOrderError = createSelector(
   orderState,
   fromOrder.getOrderError
);

export const getRouterState = createFeatureSelector<
   fromRouter.RouterReducerState<RouterStateUrl>
>('routerReducer');
