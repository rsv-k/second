import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, first, pluck } from 'rxjs/operators';
import { Order } from 'src/app/core/models/order.model';
import * as fromApp from '../../../../store/index';
import * as OrderActions from '../../../../store/actions/order.actions';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OrdersStatusDialogComponent } from '../orders-status-dialog/orders-status-dialog.component';

@Component({
   selector: 'app-order-show',
   templateUrl: './order-show.component.html',
   styleUrls: ['./order-show.component.scss'],
})
export class OrderShowComponent implements OnInit {
   order: Order;

   statuses = {
      freezed: 'Приостановлена',
      done: 'Выполнена',
      pending: 'Ожидается',
      canceled: 'Отменена',
      paid: 'Оплачена',
   };
   constructor(
      private store: Store<fromApp.AppState>,
      private router: Router,
      private dialog: MatDialog
   ) {}

   ngOnInit(): void {
      this.store
         .select('order')
         .pipe(
            pluck('order'),
            filter((order) => !!order),
            first()
         )
         .subscribe((order) => (this.order = order));
   }

   onDelete(): void {
      this.store.dispatch(
         OrderActions.deleteOrdersStart({ payload: { ids: [this.order.id] } })
      );
      this.router.navigate(['/admin-dashboard/orders-show']);
   }

   openDialog(): void {
      const dialogRef = this.dialog.open(OrdersStatusDialogComponent, {
         width: '250px',
         data: '',
      });

      dialogRef.afterClosed().subscribe((result) => {
         if (!result) {
            return;
         }
         const status = result.value;

         this.store.dispatch(
            OrderActions.updateOrdersStart({
               payload: { ids: [this.order.id], status },
            })
         );
         this.router.navigate(['/admin-dashboard/orders-show']);
      });
   }
}
