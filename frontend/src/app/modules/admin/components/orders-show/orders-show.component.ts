import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/index';
import * as OrderActions from '../../../../store/actions/order.actions';
import { filter, first, pluck } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order.model';

@Component({
   selector: 'app-orders-show',
   templateUrl: './orders-show.component.html',
   styleUrls: ['./orders-show.component.scss'],
})
export class OrdersShowComponent implements OnInit {
   constructor(private store: Store<fromApp.AppState>) {}

   ngOnInit(): void {
      this.store.dispatch(OrderActions.getOrdersStart());
      this.store
         .select('order')
         .pipe(
            pluck('orders'),
            filter((orders: Order[]) => orders.length > 0),
            first()
         )
         .subscribe((data) => console.log(data));
   }
}
