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
         tap(() => console.log('sent')),
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

   constructor(private orderService: OrderService, private actions$: Actions) {}
}
