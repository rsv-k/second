import { Order } from '../../core/models/order.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as OrderActions from '../actions/order.actions';

export const FEATURE_NAME = 'exchange';

export interface State {
   orders: Order[];
   error: string;
}

export const initialState: State = {
   orders: [],
   error: null,
};

const orderReducer = createReducer(
   initialState,
   on(OrderActions.createOrderStart, (state) => ({
      ...state,
      error: null,
   })),
   on(OrderActions.createOrderSuccess, (state, { payload }) => ({
      ...state,
      orders: [...state.orders, payload],
   })),
   on(OrderActions.getOrdersStart, (state) => ({
      ...state,
      error: null,
   })),
   on(OrderActions.getOrdersSuccess, (state, { payload }) => ({
      ...state,
      orders: [...payload],
   })),
   on(OrderActions.deleteOrderStart, (state) => ({
      ...state,
      error: null,
   })),
   on(OrderActions.deleteOrderSuccess, (state, { payload }) => ({
      ...state,
      orders: state.orders.filter((order) => order.id !== payload.id),
   })),
   on(OrderActions.addOrder, (state, { payload }) => ({
      ...state,
      orders: [payload, ...state.orders.slice(0, 9)],
   })),
   on(OrderActions.orderError, (state, { payload }) => ({
      ...state,
      error: payload,
   }))
);

export function reducer(state: State, action: Action): State {
   return orderReducer(state, action);
}
