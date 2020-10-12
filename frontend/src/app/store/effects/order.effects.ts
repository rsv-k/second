import { OrderService } from './../../core/services/order.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as OrderActions from '../actions/order.actions';
import { Order } from '../../core/models/order.model';

@Injectable()
export class OrderEffects {
   createOrder$ = createEffect(() =>
      this.actions$.pipe(
         ofType(OrderActions.createOrderStart),
         mergeMap((action) =>
            this.orderService.createOrder(action.payload).pipe(
               map((order: Order) =>
                  OrderActions.createOrderSuccess({ payload: order })
               ),
               catchError((error) =>
                  of(OrderActions.orderError({ payload: error.message }))
               )
            )
         )
      )
   );

   getOrders$ = createEffect(() =>
      this.actions$.pipe(
         ofType(OrderActions.getOrdersStart),
         mergeMap((action) =>
            this.orderService.getOrders(action.payload).pipe(
               map((orders: Order[]) =>
                  OrderActions.getOrdersSuccess({ payload: orders })
               ),
               catchError((error) =>
                  of(OrderActions.orderError({ payload: error.message }))
               )
            )
         )
      )
   );

   deleteOrder$ = createEffect(() =>
      this.actions$.pipe(
         ofType(OrderActions.deleteOrderStart),
         mergeMap((action) =>
            this.orderService.deleteOrder(action.payload.id).pipe(
               map((order: Order) =>
                  OrderActions.deleteOrderSuccess({ payload: order })
               ),
               catchError((error) =>
                  of(OrderActions.orderError({ payload: error.message }))
               )
            )
         )
      )
   );

   constructor(private orderService: OrderService, private actions$: Actions) {}
}
