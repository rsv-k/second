import { ActionReducerMap } from '@ngrx/store';
import * as fromExchange from './reducers/exchange.reducer';

export interface AppState {
   exchange: fromExchange.State;
}
export const appReducers: ActionReducerMap<AppState> = {
   exchange: fromExchange.reducer,
};
