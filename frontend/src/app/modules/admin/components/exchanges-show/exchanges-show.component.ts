import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCurrency from '../../store/reducers/currency.reducer';
import * as ExchangeActions from '../../../../store/actions/exchange.actions';

@Component({
   selector: 'app-exchanges-show',
   templateUrl: './exchanges-show.component.html',
   styleUrls: ['./exchanges-show.component.scss'],
})
export class ExchangesShowComponent implements OnInit {
   constructor(private store: Store<fromCurrency.AppState>) {}

   ngOnInit(): void {
      this.store.dispatch(ExchangeActions.loadExchangesStart());

      this.store.select('exchange').subscribe((data) => console.log(data));
   }
}
