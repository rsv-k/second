import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/index';
import * as ExchangeActions from '../../../../store/actions/exchange.actions';
import { Observable } from 'rxjs';
import { Exchange } from './../../../../core/models/exchange.model';
import { pluck } from 'rxjs/operators';

@Component({
   selector: 'app-section-trade-first',
   templateUrl: './section-trade-first.component.html',
   styleUrls: ['./section-trade-first.component.scss'],
})
export class SectionTradeFirstComponent implements OnInit {
   exchanges$: Observable<Exchange[]>;
   constructor(private store: Store<fromApp.AppState>) {}

   ngOnInit(): void {
      this.store.dispatch(ExchangeActions.loadExchangesStart());
      this.exchanges$ = this.store.select('exchange').pipe(pluck('exchanges'));
   }
}
