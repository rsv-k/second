import {
   ActivatedRouteSnapshot,
   Params,
   RouterStateSnapshot,
} from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';

export interface RouterStateUrl {
   url: string;
   params: Params;
   queryParams: Params;
}

export class CustomSerializer implements RouterStateSerializer<RouterStateUrl> {
   serialize(routerState: RouterStateSnapshot): RouterStateUrl {
      const { url } = routerState;
      const { queryParams } = routerState.root;

      let state: ActivatedRouteSnapshot = routerState.root;
      while (state.firstChild) {
         state = state.firstChild;
      }
      const { params } = state;
      // Only return an object including the URL, params and query params
      // instead of the entire snapshot
      return { url, params, queryParams };
   }
}
