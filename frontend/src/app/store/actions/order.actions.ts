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

export const getOrdersStart = createAction(
   '[ORDER] GET ORDERS START',
   props<{ payload: { page: number; status: string } }>()
);
export const getOrdersSuccess = createAction(
   '[ORDER] GET ORDERS SUCCESS',
   props<{ payload: Order[] }>()
);

export const deleteOrdersStart = createAction(
   '[ORDER] DELETE ORDERS START',
   props<{ payload: { ids: string[] } }>()
);
export const deleteOrdersSuccess = createAction(
   '[ORDER] DELETE ORDERS SUCCESS'
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
   '[ORDER] UPDATE ORDERS SUCCESS'
);

export const addOrder = createAction(
   '[ORDER] ADD ORDER',
   props<{ payload: Order }>()
);

export const orderError = createAction(
   '[ORDER] ERROR',
   props<{ payload: string }>()
);
