import { ActionReducerMap } from '@ngrx/store';
import * as fromExchange from './reducers/exchange.reducer';
import * as fromProgress from './reducers/progress.reducer';
import * as fromOrder from './reducers/order.reducer';

export interface AppState {
   exchange: fromExchange.State;
   progress: fromProgress.State;
   order: fromOrder.State;
}
export const appReducers: ActionReducerMap<AppState> = {
   exchange: fromExchange.reducer,
   progress: fromProgress.reducer,
   order: fromOrder.reducer,
};
