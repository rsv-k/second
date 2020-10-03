import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../../../store/index';
import * as ExchangeActions from '../../../../store/actions/exchange.actions';
import { Exchange } from './../../../../core/models/exchange.model';
import { filter, first, pluck, tap } from 'rxjs/operators';

@Component({
   selector: 'app-section-trade-first',
   templateUrl: './section-trade-first.component.html',
   styleUrls: ['./section-trade-first.component.scss'],
})
export class SectionTradeFirstComponent implements OnInit {
   givenCurrencies: Exchange[] = [];
   takenCurrencies: Exchange[] = [];
   currentExchange: Exchange;

   private exchanges: Exchange[];
   constructor(private store: Store<fromApp.AppState>) {}

   ngOnInit(): void {
      this.store.dispatch(ExchangeActions.loadExchangesStart());
      this.store
         .select('exchange')
         .pipe(
            pluck('exchanges'),
            filter((exchanges) => exchanges.length !== 0),
            first()
         )
         .subscribe((data) => {
            this.exchanges = data;
            this.getUniqueExchanges(data);
            this.selectCurrentExchange(data[0]);
         });
   }

   selectCurrentExchange(exchange: Exchange): void {
      this.currentExchange = exchange;
      this.getTakenCurrencies(exchange);
   }

   private getUniqueExchanges(exchanges: Exchange[]): void {
      const checkedExchanges = {};

      for (const e of exchanges) {
         if (!checkedExchanges[e.givenCurrency.name]) {
            this.givenCurrencies.push(e);
            checkedExchanges[e.givenCurrency.name] = true;
         }
      }
   }

   private getTakenCurrencies(exchange: Exchange): void {
      this.takenCurrencies = [];
      const exchanges = this.exchanges;

      for (const key of exchanges) {
         if (key.givenCurrency.name === exchange.givenCurrency.name) {
            this.takenCurrencies.push(key);
         }
      }
   }
}
