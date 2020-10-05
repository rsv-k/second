import { ActionReducerMap } from '@ngrx/store';
import * as fromExchange from './reducers/exchange.reducer';
import * as fromProgress from './reducers/progress.reducer';

export interface AppState {
   exchange: fromExchange.State;
   progress: fromProgress.State;
}
export const appReducers: ActionReducerMap<AppState> = {
   exchange: fromExchange.reducer,
   progress: fromProgress.reducer,
};
