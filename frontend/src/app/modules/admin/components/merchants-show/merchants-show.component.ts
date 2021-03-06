import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Merchant } from '@models/merchant.model';
import { Store } from '@ngrx/store';
import * as fromAdminModule from '../../store/index';
import * as MerchantActions from '../../store/actions/merchants.actions';
import { MatDialog } from '@angular/material/dialog';
import { MerchantsCreateComponent } from '../merchants-create/merchants-create.component';

@Component({
   selector: 'app-merchants-show',
   templateUrl: './merchants-show.component.html',
   styleUrls: ['./merchants-show.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MerchantsShowComponent implements OnInit {
   merchants$: Observable<Merchant[]>;
   displayedColumns = ['name', 'link', 'edit', 'delete'];

   constructor(
      private store: Store<fromAdminModule.AppState>,
      public dialog: MatDialog
   ) {}

   ngOnInit(): void {
      this.merchants$ = this.store.select(fromAdminModule.getAllMerchant);
      this.store.dispatch(MerchantActions.getMerchantsStart());
   }

   openDialog(): void {
      this.dialog.open(MerchantsCreateComponent, {
         width: '50rem',
      });
   }

   onEditDialog(merchant: Merchant): void {
      this.dialog.open(MerchantsCreateComponent, {
         width: '50rem',
         data: { merchant },
      });
   }

   onDeleteMerchant(id: string): void {
      this.store.dispatch(
         MerchantActions.deleteMerchantStart({ payload: { id } })
      );
   }
}
