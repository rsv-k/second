import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MerchantsShowComponent } from '../merchants-show/merchants-show.component';
import * as fromAdminModule from '../../store/index';
import { Store } from '@ngrx/store';
import { Merchant } from 'src/app/core/models/merchant.model';
import * as MerchantActions from '../../store/actions/merchants.actions';

@Component({
   selector: 'app-merchants-create',
   templateUrl: './merchants-create.component.html',
   styleUrls: ['./merchants-create.component.scss'],
})
export class MerchantsCreateComponent implements OnInit {
   mode = 'Сохранить';
   form: FormGroup;

   constructor(
      public dialogRef: MatDialogRef<MerchantsShowComponent>,
      @Inject(MAT_DIALOG_DATA) public data: { merchant: Merchant },
      private store: Store<fromAdminModule.AppState>
   ) {}

   ngOnInit(): void {
      if (this.data) {
         this.mode = 'Редактировать';
      }

      this.form = new FormGroup({
         name: new FormControl((this.data && this.data.merchant.name) || '', [
            Validators.required,
            Validators.minLength(3),
         ]),
         link: new FormControl((this.data && this.data.merchant.link) || '', [
            Validators.required,
            Validators.minLength(3),
         ]),
      });

      this.store.dispatch(MerchantActions.getMerchantsStart());
   }

   onSubmit(): void {
      const merchant: Merchant = this.form.value;
      if (!this.form.valid) {
         return;
      }

      if (this.mode === 'Сохранить') {
         this.store.dispatch(
            MerchantActions.createMerchantStart({ payload: merchant })
         );
      } else {
         this.store.dispatch(
            MerchantActions.editMerchantStart({
               payload: {
                  id: this.data.merchant.id,
                  merchant: {
                     name: merchant.name,
                     link: merchant.link,
                     id: this.data.merchant.id,
                  },
               },
            })
         );
      }
   }

   onNoClick(): void {
      this.dialogRef.close();
   }
}
