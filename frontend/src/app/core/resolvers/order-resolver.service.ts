import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, pluck, take } from 'rxjs/operators';
import * as fromApp from '../../store/index';
import * as OrderActions from '../../store/actions/order.actions';

@Injectable({
   providedIn: 'root',
})
export class OrderResolver implements Resolve<any> {
   constructor(private store: Store<fromApp.AppState>) {}

   resolve(route: ActivatedRouteSnapshot): Observable<any> {
      const id = route.paramMap.get('id');
      if (id) {
         this.store.dispatch(OrderActions.getOrderStart({ payload: { id } }));

         return this.store.select('order').pipe(
            pluck('order'),
            filter((order) => !!order),
            take(1)
         );
      } else {
         this.store.dispatch(
            OrderActions.getOrdersStart({
               payload: {
                  page: 1,
                  status: '',
                  id: '',
                  givenCurrency: '',
                  takenCurrency: '',
               },
            })
         );

         return this.store.select('order').pipe(
            pluck('orders'),
            filter((orders) => !orders.length),
            take(1)
         );
      }
   }
}
