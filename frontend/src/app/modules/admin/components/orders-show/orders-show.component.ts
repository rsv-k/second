import { Component, OnInit } from '@angular/core';
import { Store, on } from '@ngrx/store';
import * as fromApp from '../../../../store/index';
import * as OrderActions from '../../../../store/actions/order.actions';
import { filter, first, pluck } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order.model';
import { Observable } from 'rxjs';
import { SocketioService } from './../../../../core/services/socketio.service';

@Component({
   selector: 'app-orders-show',
   templateUrl: './orders-show.component.html',
   styleUrls: ['./orders-show.component.scss'],
})
export class OrdersShowComponent implements OnInit {
   orders$: Observable<Order[]>;
   columnsToDisplay = ['date', 'course', 'givenCurrency', 'takenCurrency'];

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
         }
      });

      this.store.dispatch(OrderActions.getOrdersStart());
      this.orders$ = this.store.select('order').pipe(
         pluck('orders'),
         filter((orders: Order[]) => orders.length > 0)
      );
   }
}
