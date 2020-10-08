import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, first, pluck } from 'rxjs/operators';
import * as fromApp from '../../../../store/index';
import * as ExchangeActions from '../../../../store/actions/exchange.actions';

@Component({
   selector: 'app-section-tariffs',
   templateUrl: './section-tariffs.component.html',
   styleUrls: ['./section-tariffs.component.scss'],
})
export class SectionTariffsComponent implements OnInit {
   constructor(private store: Store<fromApp.AppState>) {}

   ngOnInit(): void {
      this.store.dispatch(
         ExchangeActions.loadExchangesStart({ payload: { isSorted: true } })
      );

      this.store
         .select('exchange')
         .pipe(
            pluck('exchanges'),
            filter((exchanges) => exchanges.length > 0),
            first()
         )
         .subscribe((exchanges) => console.log(exchanges));
   }
}
