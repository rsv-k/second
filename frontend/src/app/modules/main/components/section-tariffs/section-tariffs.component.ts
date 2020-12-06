import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, first, pluck } from 'rxjs/operators';
import * as fromApp from '../../../../store/index';
import * as ExchangeActions from '../../../../store/actions/exchange.actions';
import { Observable } from 'rxjs';
import { Exchange } from '@models/exchange.model';
import { Router } from '@angular/router';

@Component({
   selector: 'app-section-tariffs',
   templateUrl: './section-tariffs.component.html',
   styleUrls: ['./section-tariffs.component.scss'],
})
export class SectionTariffsComponent implements OnInit {
   exchanges$: Observable<Exchange[]>;
   columnsToDisplay = ['givenCurrency', 'takenCurrency', 'reserve'];
   constructor(
      private store: Store<fromApp.AppState>,
      private router: Router
   ) {}

   ngOnInit(): void {
      this.store.dispatch(
         ExchangeActions.loadExchangesStart({ payload: { isSorted: true } })
      );

      this.exchanges$ = this.store.select('exchange').pipe(
         pluck('exchanges'),
         filter((exchanges) => exchanges.length > 0),
         first()
      );
   }

   onNavigate(exchange: Exchange): void {
      if (!exchange.isActive) {
         return;
      }

      this.router.navigate(['/exchanges', exchange.id]);
   }
}
