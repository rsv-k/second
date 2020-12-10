import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { pluck, tap } from 'rxjs/operators';
import { Order } from '@models/order.model';
import * as fromRoot from '../../../../store/index';
import * as OrderActions from '../../../../store/actions/order.actions';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { OrdersStatusDialogComponent } from '../orders-status-dialog/orders-status-dialog.component';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-order-show',
   templateUrl: './order-show.component.html',
   styleUrls: ['./order-show.component.scss'],
})
export class OrderShowComponent implements OnInit {
   order$: Observable<Order>;
   private orderId: string;
   constructor(
      private store: Store<fromRoot.AppState>,
      private router: Router,
      private dialog: MatDialog,
      private route: ActivatedRoute
   ) {}

   ngOnInit(): void {
      this.order$ = this.route.data
         .pipe(pluck('order'))
         .pipe(tap((order) => (this.orderId = order.id)));
   }

   onDelete(): void {
      this.store.dispatch(
         OrderActions.deleteOrdersStart({ payload: { ids: [this.orderId] } })
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
               payload: { ids: [this.orderId], status },
            })
         );
         this.router.navigate(['/admin-dashboard/orders-show']);
      });
   }
}
