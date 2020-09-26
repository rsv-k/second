import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCurrency from '../../store/reducers/currency.reducer';
import * as ExchangeActions from '../../../../store/actions/exchange.actions';
import { Exchange } from 'src/app/core/models/exchange.model';
import { pluck } from 'rxjs/operators';

@Component({
   selector: 'app-exchanges-show',
   templateUrl: './exchanges-show.component.html',
   styleUrls: ['./exchanges-show.component.scss'],
})
export class ExchangesShowComponent implements OnInit {
   exchanges$: Observable<Exchange[]>;
   displayedColumns: ['givenCurrency'];

   constructor(private store: Store<fromCurrency.AppState>) {}

   ngOnInit(): void {
      this.store.dispatch(ExchangeActions.loadExchangesStart());

      this.exchanges$ = this.store.select('exchange').pipe(pluck('exchanges'));
   }
}
