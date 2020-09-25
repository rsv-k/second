import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCurrency from '../modules/admin/store/reducers/currency.reducer';
import * as fromExchange from '../modules/admin/store/reducers/exchange.reducer';
import { createFeatureSelector } from '@ngrx/store';

export interface AppState {
   currency: fromCurrency.State;
   exchange: fromExchange.State;
}

export const selectAdmin = createFeatureSelector<AppState, fromCurrency.State>(
   fromCurrency.FEATURE_NAME
);
export const selectAdminCurrencies = createSelector(
   selectAdmin,
   (state: fromCurrency.State) => state.currencies
);
export const selectAdminDocumentsAmount = createSelector(
   selectAdmin,
   (state: fromCurrency.State) => state.currentDocumentsAmount
);

export const appReducers: ActionReducerMap<AppState> = {
   currency: fromCurrency.reducer,
   exchange: fromExchange.reducer,
};
