import { Currency } from './../../../../core/models/currency.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CurrencyActions from '../../store/actions/currency.actions';
import * as fromAdminModule from '../../store/index';

@Component({
   selector: 'app-currencies-show',
   templateUrl: './currencies-show.component.html',
   styleUrls: ['./currencies-show.component.scss'],
})
export class CurrenciesShowComponent implements OnInit {
   currencies$: Observable<Currency[]>;
   displayedColumns = ['name', 'reserve', 'card', 'edit', 'delete'];

   constructor(private store: Store<fromAdminModule.AppState>) {}

   ngOnInit(): void {
      this.currencies$ = this.store.select(fromAdminModule.getAllCurrencies);
   }

   onDeleteCurrency(id: string): void {
      this.store.dispatch(CurrencyActions.deleteCurrencyStart({ payload: id }));
   }
}
