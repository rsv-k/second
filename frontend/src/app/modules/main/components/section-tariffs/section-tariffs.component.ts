import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/index';
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
      private store: Store<fromRoot.AppState>,
      private router: Router
   ) {}

   ngOnInit(): void {
      this.store.dispatch(
         ExchangeActions.loadExchangesStart({ payload: { isSorted: true } })
      );

      this.exchanges$ = this.store.select(fromRoot.getAllExchanges);
   }

   onNavigate(exchange: Exchange): void {
      if (!exchange.isActive) {
         return;
      }

      this.router.navigate(['/exchanges', exchange.id]);
   }
}
