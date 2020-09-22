import { ActionReducerMap } from '@ngrx/store';
import * as fromCurrency from '../modules/admin/store/reducers/currency.reducer';

export interface AppState {
   currency: fromCurrency.State;
}

export const appReducers: ActionReducerMap<AppState> = {
   currency: fromCurrency.reducer,
};
