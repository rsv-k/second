import { OrdersStatusDialogComponent } from './../orders-status-dialog/orders-status-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/index';
import * as OrderActions from '../../../../store/actions/order.actions';
import { filter, takeUntil } from 'rxjs/operators';
import { Order } from '@models/order.model';
import { MatTableDataSource } from '@angular/material/table';
import { BaseComponent } from './../../../base.component';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';
import { OrdersSearchComponent } from '../orders-search/orders-search.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
   selector: 'app-orders-show',
   templateUrl: './orders-show.component.html',
   styleUrls: ['./orders-show.component.scss'],
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

   selection = new SelectionModel<Order>(true, []);

   private ordersOptions = {
      page: 1,
      // status: null,
      // id: null,
      // givenCurrency: null,
      // takenCurrency: null,
      // number: null,
   };

   constructor(
      private store: Store<fromRoot.AppState>,
      private dialog: MatDialog,
      private route: ActivatedRoute,
      private router: Router
   ) {
      super();
   }

   ngOnInit(): void {
      this.attachQueryParams(this.ordersOptions);
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
      this.attachQueryParams(this.ordersOptions);
   }

   prevPage(): void {
      if (this.ordersOptions.page === 1) {
         return;
      }

      this.ordersOptions = {
         ...this.ordersOptions,
         page: this.ordersOptions.page - 1,
      };
      this.attachQueryParams(this.ordersOptions);
   }

   private selectionClear(): void {
      this.selection.clear();
   }

   private getSelectedIds(): string[] {
      return this.selection.selected.map((order) => order.id);
   }

   private getOrders(): void {
      this.store.dispatch(OrderActions.getOrdersStart());
   }

   private attachQueryParams(queryParams): void {
      this.router.navigate([], {
         relativeTo: this.route,
         queryParams,
         queryParamsHandling: 'merge',
      });
   }
}
