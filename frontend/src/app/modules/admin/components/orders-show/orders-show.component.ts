import { OrdersOptions } from './../../../../core/models/ordersOptions.model';
import { OrdersStatusDialogComponent } from './../orders-status-dialog/orders-status-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/index';
import * as OrderActions from '../../../../store/actions/order.actions';
import { filter, takeUntil } from 'rxjs/operators';
import { Order } from '@models/order.model';
import { SocketioService } from '../../services/socketio.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { BaseComponent } from './../../../base.component';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrdersSearchComponent } from '../orders-search/orders-search.component';

@Component({
   selector: 'app-orders-show',
   templateUrl: './orders-show.component.html',
   styleUrls: ['./orders-show.component.scss'],
   animations: [
      trigger('slideInAnimation', [
         transition(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('.5s ease-in', style({ transform: 'translateX(0)' })),
         ]),
      ]),
   ],
})
export class OrdersShowComponent extends BaseComponent implements OnInit {
   dataSource = new MatTableDataSource<Order>();
   columnsToDisplay = [
      'select',
      'date',
      'course',
      'givenCurrency',
      'takenCurrency',
   ];

   canAnimate = false;
   selection = new SelectionModel<Order>(true, []);

   private ordersOptions: OrdersOptions = {
      page: 1,
      status: '',
      id: '',
      givenCurrency: '',
      takenCurrency: '',
      number: null,
   };

   constructor(
      private store: Store<fromRoot.AppState>,
      private socketService: SocketioService,
      private dialog: MatDialog,
      private router: Router
   ) {
      super();
   }

   ngOnInit(): void {
      this.socketService.setupSocketConnection();
      this.socketService.socket.on('orders', (data) => {
         if (data.action === 'create') {
            if (this.ordersOptions.page !== 1) {
               return;
            }
            const order = data.order;
            order.id = order._id;
            delete order._id;

            this.store.dispatch(OrderActions.addOrder({ payload: order }));
            this.canAnimate = true;
         } else if (data.action === 'update') {
            const order = data.order;
            order.id = order._id;
            delete order._id;

            this.store.dispatch(
               OrderActions.cancelOrderSuccess({ payload: order })
            );
         }
      });

      this.store
         .select(fromRoot.getAllOrders)
         .pipe(
            filter((orders) => !!orders.length),
            takeUntil(this.destroyed)
         )
         .subscribe((orders) => {
            this.dataSource.data = orders;
         });
   }

   openSearchDialog(): void {
      this.canAnimate = false;
      const dialogRef = this.dialog.open(OrdersSearchComponent, {
         width: '65rem',
      });

      dialogRef.afterClosed().subscribe((result) => {
         this.ordersOptions = {
            ...this.ordersOptions,
            ...result,
         };
         this.getOrders();
      });
   }

   openDialog(): void {
      this.canAnimate = false;
      const dialogRef = this.dialog.open(OrdersStatusDialogComponent, {
         width: '250px',
         data: '',
      });

      dialogRef.afterClosed().subscribe((result) => {
         if (!result) {
            return;
         }
         const ids = this.getSelectedIds();
         const status = result.value;

         this.store.dispatch(
            OrderActions.updateOrdersStart({ payload: { ids, status } })
         );
         this.getOrders();
         this.selectionClear();
      });
   }

   onDeleteOrders(): void {
      this.canAnimate = false;
      const ids = this.getSelectedIds();
      this.store.dispatch(OrderActions.deleteOrdersStart({ payload: { ids } }));
      this.getOrders();
      this.selectionClear();
   }

   isAllSelected(): boolean {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
   }

   masterToggle(): void {
      this.isAllSelected()
         ? this.selectionClear()
         : this.dataSource.data.forEach((row) => this.selection.select(row));
   }

   nextPage(): void {
      if (this.dataSource.data.length < 10) {
         return;
      }

      this.ordersOptions = {
         ...this.ordersOptions,
         page: this.ordersOptions.page + 1,
      };
      this.getOrders();
   }

   prevPage(): void {
      if (this.ordersOptions.page === 1) {
         return;
      }

      this.ordersOptions = {
         ...this.ordersOptions,
         page: this.ordersOptions.page - 1,
      };
      this.getOrders();
   }

   onNavigate(id: string): void {
      this.router.navigate(['/admin-dashboard/order', id]);
   }

   private selectionClear(): void {
      this.selection.clear();
   }

   private getSelectedIds(): string[] {
      return this.selection.selected.map((order) => order.id);
   }

   private getOrders(): void {
      this.store.dispatch(
         OrderActions.setPage({ payload: { page: this.ordersOptions.page } })
      );

      this.store.dispatch(
         OrderActions.getOrdersStart({
            payload: this.ordersOptions,
         })
      );
   }
}
