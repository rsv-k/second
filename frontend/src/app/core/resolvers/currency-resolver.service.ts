import { Store } from '@ngrx/store';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import * as CurrencyActions from '../../modules/admin/store/actions/currency.actions';
import { filter, map, take, pluck, tap } from 'rxjs/operators';
import * as fromAdminModule from '../../modules/admin/store/index';

@Injectable({
   providedIn: 'root',
})
export class CurrencyResolver implements Resolve<any> {
   constructor(private store: Store<fromAdminModule.AppState>) {}

   resolve(route: ActivatedRouteSnapshot): Observable<any> {
      const id = route.paramMap.get('id');
      if (id) {
         this.store.dispatch(
            CurrencyActions.currencyLoadStart({ payload: id })
         );
         return this.store.select('adminModule').pipe(
            pluck('currency'),
            map((data) => data.currency),
            filter((currency) => !!currency),
            take(1)
         );
      } else {
         this.store.dispatch(CurrencyActions.currenciesLoadStart());
         return this.store.select('adminModule').pipe(
            pluck('currency'),
            pluck('currencies'),
            filter((currencies) => !!currencies.length),
            take(1)
         );
      }
   }
}
