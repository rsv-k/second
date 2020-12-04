import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';
import { Currency } from 'src/app/core/models/currency.model';
import * as CurrencyActions from '../../store/actions/currency.actions';
import * as fromAdminModule from '../../store/index';

@Component({
   selector: 'app-orders-search',
   templateUrl: './orders-search.component.html',
   styleUrls: ['./orders-search.component.scss'],
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
      this.currencies$ = this.store.select('adminModule').pipe(
         pluck('currency'),
         pluck('currencies'),
         filter((currencies) => !!currencies.length)
      );

      this.form = new FormGroup({
         status: new FormControl(''),
         id: new FormControl(''),
         givenCurrency: new FormControl(''),
         takenCurrency: new FormControl(''),
         number: new FormControl(''),
      });
   }

   onGivenSelection(currency: Currency): void {
      if (!currency) {
         return this.form.get('givenCurrency').setValue('');
      }
      this.form.get('givenCurrency').setValue(currency.id);
   }
   onTakenSelection(currency: Currency): void {
      if (!currency) {
         return this.form.get('takenCurrency').setValue('');
      }
      this.form.get('takenCurrency').setValue(currency.id);
   }

   onNoClick(): void {
      this.dialogRef.close();
   }

   onFormClear(): void {
      this.form.reset();
   }
}
