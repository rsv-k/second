import { Order } from '../../core/models/order.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as OrderActions from '../actions/order.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface State extends EntityState<Order> {
   error: string;
   pagination: {
      prev: boolean;
      next: boolean;
   };
}

export const adapter: EntityAdapter<Order> = createEntityAdapter<Order>();

export const initialState: State = adapter.getInitialState({
   error: null,
   pagination: {
      prev: null,
      next: null,
   },
});

const orderReducer = createReducer(
   initialState,
   on(OrderActions.createOrderSuccess, (state, { payload }) =>
      adapter.addOne(payload, state)
   ),
   on(OrderActions.getOrdersSuccess, (state, { payload }) => {
      let newState = adapter.removeAll(state);
      newState = {
         ...newState,
         pagination: {
            prev: payload.prev,
            next: payload.next,
         },
      };

      return adapter.addMany(payload.orders, newState);
   }),
   on(OrderActions.getOrderSuccess, (state, { payload }) =>
      adapter.setOne(payload, state)
   ),
   on(OrderActions.deleteOrdersSuccess, (state, { payload }) =>
      adapter.removeMany(payload.ids, state)
   ),
   on(OrderActions.addOrder, (state, { payload }) =>
      adapter.setOne(payload, state)
   ),
   on(OrderActions.updateOrdersSuccess, (state, { payload }) =>
      adapter.upsertMany(payload.orders, state)
   ),
   on(OrderActions.cancelOrderSuccess, (state, { payload }) =>
      adapter.updateOne(
         {
            id: payload.id,
            changes: { ...state.entities[payload.id], status: 'canceled' },
         },
         state
      )
   ),
   on(OrderActions.orderError, (state, { payload }) => ({
      ...state,
      error: payload,
   }))
);

export function reducer(state: State, action: Action): State {
   return orderReducer(state, action);
}

export const getOrdersEntities = (state: State) => state.entities;
export const getOrderError = (state: State) => state.error;
export const getPagination = (state: State) => state.pagination;
