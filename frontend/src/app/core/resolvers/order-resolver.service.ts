import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, pluck, take } from 'rxjs/operators';
import * as fromApp from '../../store/index';
import * as OrderActions from '../../store/actions/order.actions';

@Injectable({
   providedIn: 'root',
})
export class OrderResolver implements Resolve<any> {
   constructor(private store: Store<fromApp.AppState>) {}

   resolve(): Observable<any> {
      this.store.dispatch(
         OrderActions.getOrdersStart({ payload: { page: 1, status: '' } })
      );

      return this.store.select('order').pipe(
         pluck('orders'),
         filter((orders) => !!orders.length),
         take(1)
      );
   }
}
