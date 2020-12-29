import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/index';
import { Exchange } from './../../../../core/models/exchange.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as ProgressActions from '../../../../store/actions/progress.actions';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-section-trade-first',
   templateUrl: './section-trade-first.component.html',
   styleUrls: ['./section-trade-first.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTradeFirstComponent implements OnInit {
   givenCurrencies: Exchange[] = [];
   takenCurrencies: Exchange[] = [];
   selectedId: string;
   exchanges$: Observable<Exchange[]>;

   private exchanges: Exchange[];
   constructor(
      private store: Store<fromRoot.AppState>,
      private router: Router
   ) {}

   ngOnInit(): void {
      this.store.dispatch(ProgressActions.setCurrentProcess({ payload: 1 }));

      this.exchanges$ = this.store.select(fromRoot.getAllExchanges).pipe(
         tap((exchanges) => {
            this.exchanges = exchanges;
            this.getUniqueExchanges(exchanges);
            this.selectCurrentExchange(exchanges[0]);
         })
      );
   }

   selectCurrentExchange(exchange: Exchange): void {
      this.selectedId = exchange.id;
      this.getTakenCurrencies(exchange);
   }

   onExchangeSelect(exchange: Exchange): void {
      if (!exchange.isActive) {
         return;
      }

      this.router.navigate(['exchanges', exchange.id]);
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
