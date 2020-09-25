import { ActionReducerMap, createSelector } from '@ngrx/store';
import * as fromCurrency from '../modules/admin/store/reducers/currency.reducer';
import { createFeatureSelector } from '@ngrx/store';

export interface AppState {
   admin: fromCurrency.State;
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
   admin: fromCurrency.reducer,
};
