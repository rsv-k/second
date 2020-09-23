import { first, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Currency } from './../models/currency.model';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import * as fromApp from '../../store/index';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root',
})
export class CurrencyResolver implements Resolve<Currency> {
   constructor(private store: Store<fromApp.AppState>) {}

   resolve(route: ActivatedRouteSnapshot): Observable<Currency> {
      const id = route.paramMap.get('id');

      return this.store.select('admin').pipe(
         first(),
         map((data) => {
            return data.currencies.find((currency) => currency.id === id);
         })
      );
   }
}
