import {
   ActionReducerMap,
   createFeatureSelector,
   createSelector,
} from '@ngrx/store';
import * as fromCurrency from './reducers/currency.reducer';
import * as fromMerchant from './reducers/merchant.reducer';
import * as fromValidator from './reducers/validator.reducer';
import * as fromRoot from '../../../store/index';

export const FEATURE_NAME = 'adminModule';

export interface State {
   currency: fromCurrency.State;
   merchant: fromMerchant.State;
   validator: fromValidator.State;
}

export interface AppState extends fromRoot.AppState {
   adminModule: State;
}

export const adminReducers: ActionReducerMap<State> = {
   currency: fromCurrency.reducer,
   merchant: fromMerchant.reducer,
   validator: fromValidator.reducer,
};

export const getAdminState = createFeatureSelector<State>('adminModule');
export const getCurrencyState = createSelector(
   getAdminState,
   (state: State) => state.currency
);
export const getAllCurrencies = createSelector(
   getCurrencyState,
   fromCurrency.getCurrencies
);
export const getCurrency = createSelector(
   getCurrencyState,
   fromCurrency.getCurrency
);
export const getCurrencyError = createSelector(
   getCurrencyState,
   fromCurrency.getCurrencyError
);
