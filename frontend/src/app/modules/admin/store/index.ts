import { ActionReducerMap } from '@ngrx/store';
import * as fromCurrency from './reducers/currency.reducer';
import * as fromMerchant from './reducers/merchant.reducer';
import * as fromRoot from '../../../store/index';

export const FEATURE_NAME = 'adminModule';

export interface State {
   currency: fromCurrency.State;
   merchant: fromMerchant.State;
}

export interface AppState extends fromRoot.AppState {
   adminModule: State;
}

export const adminReducers: ActionReducerMap<State> = {
   currency: fromCurrency.reducer,
   merchant: fromMerchant.reducer,
};
