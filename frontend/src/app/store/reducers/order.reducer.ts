import { Order } from '../../core/models/order.model';
import { createReducer, on, Action } from '@ngrx/store';
import * as OrderActions from '../actions/order.actions';

export const FEATURE_NAME = 'exchange';

export interface State {
   orders: Order[];
   order: Order;
   error: string;
}

export const initialState: State = {
   orders: [],
   order: null,
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
      order: null,
      error: null,
   })),
   on(OrderActions.getOrdersSuccess, (state, { payload }) => ({
      ...state,
      orders: [...payload],
   })),
   on(OrderActions.getOrderStart, (state) => ({
      ...state,
      error: null,
   })),
   on(OrderActions.getOrderSuccess, (state, { payload }) => ({
      ...state,
      order: payload,
   })),
   on(OrderActions.getActiveOrderStart, (state) => ({
      ...state,
      error: null,
   })),
   on(OrderActions.getActiveOrderSuccess, (state, { payload }) => ({
      ...state,
      order: payload,
   })),
   on(OrderActions.deleteOrdersStart, (state) => ({
      ...state,
      error: null,
   })),
   on(OrderActions.deleteOrdersSuccess, (state) => ({
      ...state,
   })),
   on(OrderActions.addOrder, (state, { payload }) => ({
      ...state,
      orders: [payload, ...state.orders.slice(0, 9)],
   })),
   on(OrderActions.updateOrdersStart, (state) => ({
      ...state,
      error: null,
   })),
   on(OrderActions.updateOrdersSuccess, (state) => ({
      ...state,
   })),
   on(OrderActions.orderError, (state, { payload }) => ({
      ...state,
      error: payload,
   }))
);

export function reducer(state: State, action: Action): State {
   return orderReducer(state, action);
}

export const getAllOrders = (state: State) => state.orders;
export const getOrder = (state: State) => state.order;
export const getOrderError = (state: State) => state.error;
