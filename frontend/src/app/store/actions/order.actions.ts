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
   props<{ payload: { page: number } }>()
);
export const getOrdersSuccess = createAction(
   '[ORDER] GET ORDERS SUCCESS',
   props<{ payload: Order[] }>()
);

export const deleteOrderStart = createAction(
   '[ORDER] DELETE ORDER START',
   props<{ payload: { id: string } }>()
);
export const deleteOrderSuccess = createAction(
   '[ORDER] DELETE ORDER SUCCESS',
   props<{ payload: Order }>()
);

export const addOrder = createAction(
   '[ORDER] ADD ORDER',
   props<{ payload: Order }>()
);

export const orderError = createAction(
   '[ORDER] ERROR',
   props<{ payload: string }>()
);
