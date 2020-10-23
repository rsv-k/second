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
export class ActiveOrderResolver implements Resolve<any> {
   constructor(private store: Store<fromApp.AppState>) {}

   resolve(route: ActivatedRouteSnapshot): Observable<any> {
      const id = route.paramMap.get('id');
      this.store.dispatch(
         OrderActions.getActiveOrderStart({ payload: { id } })
      );

      return this.store.select('order').pipe(
         pluck('order'),
         filter((order) => !!order),
         take(1)
      );
   }
}
