import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, take, tap } from 'rxjs/operators';
import * as fromRoot from '../../store/index';
import * as OrderActions from '../../store/actions/order.actions';

@Injectable({
   providedIn: 'root',
})
export class OrderResolver implements Resolve<any> {
   constructor(private store: Store<fromRoot.AppState>) {}

   resolve(route: ActivatedRouteSnapshot): Observable<any> {
      const id = route.paramMap.get('id');
      if (id) {
         return this.store.select(fromRoot.getOrder, { id }).pipe(
            tap((order) => {
               if (!order) {
                  this.store.dispatch(
                     OrderActions.getOrderStart({ payload: { id } })
                  );
               }
            }),
            filter((order) => !!order),
            take(1)
         );
      } else {
         this.store.dispatch(OrderActions.getOrdersStart());

         return this.store.select(fromRoot.getAllOrders).pipe(
            filter((orders) => !!orders.length),
            take(1)
         );
      }
   }
}
