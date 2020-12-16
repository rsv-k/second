import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Currency } from '@models/currency.model';
import * as CurrencyActions from '../../store/actions/currency.actions';
import * as fromAdminModule from '../../store/index';

@Component({
   selector: 'app-orders-search',
   templateUrl: './orders-search.component.html',
   styleUrls: ['./orders-search.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersSearchComponent implements OnInit {
   currencies$: Observable<Currency[]>;

   form: FormGroup;
   statuses = ['done', 'paid', 'pending', 'freezed', 'canceled'];
   constructor(
      public dialogRef: MatDialogRef<OrdersSearchComponent>,
      private store: Store<fromAdminModule.AppState>
   ) {}

   ngOnInit(): void {
      this.store.dispatch(CurrencyActions.currenciesLoadStart());
      this.currencies$ = this.store.select(fromAdminModule.getAllCurrencies);

      this.form = new FormGroup({
         status: new FormControl(''),
         id: new FormControl(''),
         givenCurrency: new FormControl(''),
         takenCurrency: new FormControl(''),
         number: new FormControl(''),
      });
   }

   onSelection(currency: Currency, property: string): void {
      if (!currency) {
         return this.form.get(property).setValue('');
      }

      this.form.get(property).setValue(currency.id);
   }

   onNoClick(): void {
      this.dialogRef.close();
   }

   onFormClear(): void {
      this.form.reset();
   }
}
