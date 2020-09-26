import { Router } from '@angular/router';
import { Currency } from './../../../../core/models/currency.model';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CurrencyActions from '../../store/actions/currency.actions';
import * as fromCurrency from '../../store/reducers/currency.reducer';

@Component({
   selector: 'app-currencies-show',
   templateUrl: './currencies-show.component.html',
   styleUrls: ['./currencies-show.component.scss'],
})
export class CurrenciesShowComponent implements OnInit {
   currencies$: Observable<Currency[]>;
   displayedColumns = ['name', 'reserve', 'card', 'edit', 'delete'];

   constructor(
      private store: Store<fromCurrency.AppState>,
      private router: Router
   ) {}

   ngOnInit(): void {
      this.store.dispatch(CurrencyActions.currenciesLoadStart());

      this.currencies$ = this.store.pipe(
         select(fromCurrency.selectAdminCurrencies)
      );
   }

   onDeleteCurrency(id: string): void {
      this.store.dispatch(CurrencyActions.deleteCurrencyStart({ payload: id }));
   }

   onEditCurrency(id: string): void {
      this.router.navigate(['admin-dashboard/currencies-edit', id]);
   }
}
