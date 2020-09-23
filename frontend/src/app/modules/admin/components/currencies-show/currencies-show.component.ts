import { Currency } from './../../../../core/models/currency.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck, tap } from 'rxjs/operators';
import * as CurrencyActions from '../../store/actions/currency.actions';
import * as fromApp from '../../../../store/index';

@Component({
   selector: 'app-currencies-show',
   templateUrl: './currencies-show.component.html',
   styleUrls: ['./currencies-show.component.scss'],
})
export class CurrenciesShowComponent implements OnInit {
   currencies$: Observable<Currency[]>;
   displayedColumns = ['name', 'reserve', 'card', 'edit', 'delete'];
   errorMessage: string;

   constructor(private store: Store<fromApp.AppState>) {}

   ngOnInit(): void {
      this.store.dispatch(CurrencyActions.currenciesLoadStart());

      this.currencies$ = this.store.select('admin').pipe(
         tap((data) => {
            if (data.currenciesFetchError) {
               this.errorMessage = 'Валюты пока отсутствуют';
            }
         }),
         pluck('currencies')
      );
   }

   onDeleteCurrency(id: string): void {
      this.store.dispatch(CurrencyActions.deleteCurrencyStart({ payload: id }));
   }
}
