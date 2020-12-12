import { OrderService } from './../../core/services/order.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as OrderActions from '../actions/order.actions';
import { Order } from '../../core/models/order.model';
import { Router } from '@angular/router';

@Injectable()
export class OrderEffects {
   createOrder$ = createEffect(() =>
      this.actions$.pipe(
         ofType(OrderActions.createOrderStart),
         mergeMap((action) =>
            this.orderService.createOrder(action.payload).pipe(
               tap((order) =>
                  this.router.navigate(['/exchanges/transaction/', order.id])
               ),
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

   getOrder$ = createEffect(() =>
      this.actions$.pipe(
         ofType(OrderActions.getOrderStart),
         mergeMap((action) =>
            this.orderService.getOrder(action.payload.id).pipe(
               map((order) => OrderActions.getOrderSuccess({ payload: order })),
               catchError((error) => {
                  this.router.navigate(['/admin-dashboard/orders-show']);
                  return of(
                     OrderActions.orderError({ payload: error.message })
                  );
               })
            )
         )
      )
   );

   deleteOrder$ = createEffect(() =>
      this.actions$.pipe(
         ofType(OrderActions.deleteOrdersStart),
         mergeMap((action) =>
            this.orderService.deleteOrder(action.payload.ids).pipe(
               map((ids) =>
                  OrderActions.deleteOrdersSuccess({ payload: { ids } })
               ),
               catchError((error) =>
                  of(OrderActions.orderError({ payload: error.message }))
               )
            )
         )
      )
   );

   updateOrder$ = createEffect(() =>
      this.actions$.pipe(
         ofType(OrderActions.updateOrdersStart),
         mergeMap((action) =>
            this.orderService
               .updateOrder(action.payload.ids, action.payload.status)
               .pipe(
                  map((orders) =>
                     OrderActions.updateOrdersSuccess({
                        payload: { orders },
                     })
                  ),
                  catchError((error) =>
                     of(OrderActions.orderError({ payload: error.message }))
                  )
               )
         )
      )
   );

   cancelOrder$ = createEffect(() =>
      this.actions$.pipe(
         ofType(OrderActions.cancelOrderStart),
         mergeMap((action) =>
            this.orderService.cancelOrder(action.payload.id).pipe(
               map((order) =>
                  OrderActions.cancelOrderSuccess({ payload: order })
               ),
               catchError((error) =>
                  of(OrderActions.orderError({ payload: error.message }))
               )
            )
         )
      )
   );

   constructor(
      private orderService: OrderService,
      private actions$: Actions,
      private router: Router
   ) {}
}
