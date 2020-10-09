import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/index';
import * as OrderActions from '../../../../store/actions/order.actions';
import { filter, pluck, tap } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order.model';
import { Observable } from 'rxjs';
import { SocketioService } from './../../../../core/services/socketio.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
   selector: 'app-orders-show',
   templateUrl: './orders-show.component.html',
   styleUrls: ['./orders-show.component.scss'],
   animations: [
      trigger(
         'slideInAnimation',
         [
            transition(
               ':enter',
               [
                  style({transform: 'translateX(-100%)'}),
                  animate('.5s ease-in', style({transform: 'translateX(0)'}))
               ]
            )
         ]
      )
   ]
})
export class OrdersShowComponent implements OnInit {
   orders$: Observable<Order[]>;
   columnsToDisplay = ['date', 'course', 'givenCurrency', 'takenCurrency'];
   canAnimate = false;

   private currentOrdersAmount;
   private currentPage = 1;
   constructor(
      private store: Store<fromApp.AppState>,
      private socketService: SocketioService
   ) {}

   ngOnInit(): void {
      this.socketService.setupSocketConnection();
      this.socketService.socket.on('orders', (data) => {
         if (data.action === 'create') {
            console.log(data.order);
            const order = data.order;
            order.id = order._id;
            delete order._id;

            this.store.dispatch(OrderActions.addOrder({ payload: order }));
            this.canAnimate = true;
         }
      });

      this.getOrders();
      this.orders$ = this.store.select('order').pipe(
         pluck('orders'),
         filter((orders: Order[]) => orders.length > 0),
         tap(orders => {
            this.currentOrdersAmount = orders.length;
         })
      );
   }


   nextPage(): void {
      if (this.currentOrdersAmount < 10) {
         return;
      }

      this.currentPage++;
      this.getOrders();
   }

   prevPage(): void {
      if (this.currentPage === 1) {
         return;
      }

      this.currentPage--;
      this.getOrders();
   }

   private getOrders(): void {
      this.store.dispatch(OrderActions.getOrdersStart({payload: { page: this.currentPage }}));
   }
}
