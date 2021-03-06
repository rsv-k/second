import { Order } from './../../core/models/order.model';
import { createAction, props } from '@ngrx/store';

export const createOrderStart = createAction(
   '[ORDER] CREATE START',
   props<{ payload: Order }>()
);
export const createOrderSuccess = createAction(
   '[ORDER] CREATE SUCCESS',
   props<{ payload: Order }>()
);

export const getOrdersStart = createAction('[ORDER] GET ORDERS START');
export const getOrdersSuccess = createAction(
   '[ORDER] GET ORDERS SUCCESS',
   props<{ payload: { orders: Order[]; next: boolean; prev: boolean } }>()
);

export const getOrderStart = createAction(
   '[ORDER] GET ORDER START',
   props<{ payload: { id: string } }>()
);
export const getOrderSuccess = createAction(
   '[ORDER] GET ORDER SUCCESS',
   props<{ payload: Order }>()
);

export const deleteOrdersStart = createAction(
   '[ORDER] DELETE ORDERS START',
   props<{ payload: { ids: string[] } }>()
);
export const deleteOrdersSuccess = createAction(
   '[ORDER] DELETE ORDERS SUCCESS',
   props<{ payload: { ids: string[] } }>()
);

export const updateOrdersStart = createAction(
   '[ORDER] UPDATE ORDERS START',
   props<{
      payload: {
         ids: string[];
         status: 'canceled' | 'pending' | 'paid' | 'done' | 'freezed';
      };
   }>()
);
export const updateOrdersSuccess = createAction(
   '[ORDER] UPDATE ORDERS SUCCESS',
   props<{ payload: { orders: Order[] } }>()
);

export const cancelOrderStart = createAction('[ORDER] CANCEL ORDER START');
export const cancelOrderSuccess = createAction(
   '[ORDER] CANCEL ORDER SUCCESS',
   props<{ payload: { id: string } }>()
);

export const addOrder = createAction(
   '[ORDER] ADD ORDER',
   props<{ payload: Order }>()
);

export const orderError = createAction(
   '[ORDER] ERROR',
   props<{ payload: string }>()
);
