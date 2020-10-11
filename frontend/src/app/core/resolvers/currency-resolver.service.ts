import { Store } from '@ngrx/store';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import * as fromCurrency from '../../modules/admin/store/reducers/currency.reducer';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as CurrencyActions from '../../modules/admin/store/actions/currency.actions';
import { filter, map, take, pluck } from 'rxjs/operators';

@Injectable({
   providedIn: 'root',
})
export class CurrencyResolver implements Resolve<any> {
   constructor(private store: Store<fromCurrency.AppState>) {}

   resolve(route: ActivatedRouteSnapshot): Observable<any> {
      const id = route.paramMap.get('id');
      if (id) {
         this.store.dispatch(
            CurrencyActions.currencyLoadStart({ payload: id })
         );
         return this.store.select('currency').pipe(
            map((data) => data.currency),
            filter((currency) => !!currency),
            take(1)
         );
      } else {
         this.store.dispatch(CurrencyActions.currenciesLoadStart());
         return this.store.select('currency').pipe(
            pluck('currencies'),
            filter((currencies) => !!currencies.length),
            take(1)
         );
      }
   }
}
