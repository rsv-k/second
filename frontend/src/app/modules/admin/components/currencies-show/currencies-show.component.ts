import { Currency } from './../../../../core/models/currency.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
   selector: 'app-currencies-show',
   templateUrl: './currencies-show.component.html',
   styleUrls: ['./currencies-show.component.scss'],
})
export class CurrenciesShowComponent implements OnInit {
   constructor(
      private store: Store<{ currency: { currencies: Currency[] } }>
   ) {}

   ngOnInit(): void {
      this.store.select('currency').subscribe((data) => console.log(data));
   }
}
