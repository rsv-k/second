import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/index';
import * as OrderActions from '../../../../store/actions/order.actions';
import { filter, first, pluck } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order.model';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-orders-show',
   templateUrl: './orders-show.component.html',
   styleUrls: ['./orders-show.component.scss'],
})
export class OrdersShowComponent implements OnInit {
   orders$: Observable<Order[]>;
   columnsToDisplay = ['date', 'givenCurrency', 'takenCurrency'];

   constructor(private store: Store<fromApp.AppState>) {}

   ngOnInit(): void {
      this.store.dispatch(OrderActions.getOrdersStart());
      this.orders$ = this.store.select('order').pipe(
         pluck('orders'),
         filter((orders: Order[]) => orders.length > 0),
         first()
      );
   }
}
