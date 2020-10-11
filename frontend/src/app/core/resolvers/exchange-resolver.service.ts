import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, pluck, take } from 'rxjs/operators';
import * as fromApp from '../../store/index';
import * as ExchangeActions from '../../store/actions/exchange.actions';

@Injectable({
   providedIn: 'root',
})
export class ExchangeResolver implements Resolve<any> {
   constructor(private store: Store<fromApp.AppState>) {}

   resolve(route: ActivatedRouteSnapshot): Observable<any> {
      const id = route.paramMap.get('id');
      if (id) {
         this.store.dispatch(
            ExchangeActions.loadExchangeStart({ payload: id })
         );

         return this.store.select('exchange').pipe(
            map((data) => data.exchange),
            filter((exchange) => !!exchange),
            take(1)
         );
      } else {
         this.store.dispatch(
            ExchangeActions.loadExchangesStart({ payload: { isSorted: false } })
         );

         return this.store.select('exchange').pipe(
            pluck('exchanges'),
            filter((exchanges) => !!exchanges.length),
            take(1)
         );
      }
   }
}
