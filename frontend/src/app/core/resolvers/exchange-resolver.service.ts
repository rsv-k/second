import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import * as fromRoot from '../../store/index';
import * as ExchangeActions from '../../store/actions/exchange.actions';

@Injectable({
   providedIn: 'root',
})
export class ExchangeResolver implements Resolve<any> {
   constructor(private store: Store<fromRoot.AppState>) {}

   resolve(route: ActivatedRouteSnapshot): Observable<any> {
      const id = route.paramMap.get('id');
      if (id) {
         return this.store.select(fromRoot.getExchange, { id }).pipe(
            tap((exchange) => {
               if (!exchange) {
                  this.store.dispatch(
                     ExchangeActions.loadExchangeStart({ payload: id })
                  );
               }
            }),
            filter((exchange) => !!exchange),
            take(1)
         );
      }

      this.store.dispatch(ExchangeActions.loadExchangesStart());

      return this.store.select(fromRoot.getAllExchanges).pipe(
         filter((exchanges) => !!exchanges.length),
         take(1)
      );
   }
}
