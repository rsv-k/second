import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../../store/index';
import { Observable } from 'rxjs';
import { Exchange } from '@models/exchange.model';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
   selector: 'app-section-tariffs',
   templateUrl: './section-tariffs.component.html',
   styleUrls: ['./section-tariffs.component.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTariffsComponent implements OnInit {
   exchanges$: Observable<Exchange[]>;
   columnsToDisplay = ['givenCurrency', 'takenCurrency', 'reserve'];
   constructor(
      private store: Store<fromRoot.AppState>,
      private router: Router
   ) {}

   ngOnInit(): void {
      this.exchanges$ = this.store
         .select(fromRoot.getAllExchanges)
         .pipe(map((exchanges) => exchanges.slice().sort(this.sort)));
   }

   onNavigate(exchange: Exchange): void {
      if (!exchange.isActive) {
         return;
      }

      this.router.navigate(['/exchanges', exchange.id]);
   }

   private sort(a: Exchange, b: Exchange): number {
      if (a.givenCurrency.name > b.givenCurrency.name) {
         return 1;
      } else if (a.givenCurrency.name < b.givenCurrency.name) {
         return -1;
      }

      return 0;
   }
}
