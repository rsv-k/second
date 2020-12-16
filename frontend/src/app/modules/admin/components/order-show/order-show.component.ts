import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, tap } from 'rxjs/operators';
import { Order } from '@models/order.model';
import * as fromRoot from '../../../../store/index';
import * as OrderActions from '../../../../store/actions/order.actions';
import { MatDialog } from '@angular/material/dialog';
import { OrdersStatusDialogComponent } from '../orders-status-dialog/orders-status-dialog.component';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-order-show',
   templateUrl: './order-show.component.html',
   styleUrls: ['./order-show.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderShowComponent implements OnInit {
   order$: Observable<Order>;
   private orderId: string;
   constructor(
      private store: Store<fromRoot.AppState>,
      private dialog: MatDialog
   ) {}

   ngOnInit(): void {
      this.order$ = this.store.select(fromRoot.getOrder).pipe(
         filter((order) => !!order),
         tap((order) => (this.orderId = order.id))
      );
   }

   onDelete(): void {
      this.store.dispatch(
         OrderActions.deleteOrdersStart({ payload: { ids: [this.orderId] } })
      );
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
      });
   }
}
