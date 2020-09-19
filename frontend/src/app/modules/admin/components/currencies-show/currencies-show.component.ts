import { Currency } from './../../../../core/models/currency.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
   selector: 'app-currencies-show',
   templateUrl: './currencies-show.component.html',
   styleUrls: ['./currencies-show.component.scss'],
})
export class CurrenciesShowComponent implements OnInit {
   currencies$: Observable<Currency[]>;
   displayedColumns = ['name', 'reserve', 'card', 'edit', 'delete'];

   constructor(
      private store: Store<{ currency: { currencies: Currency[] } }>
   ) {}

   ngOnInit(): void {
      this.currencies$ = this.store
         .select('currency')
         .pipe(pluck('currencies'));
   }
}
