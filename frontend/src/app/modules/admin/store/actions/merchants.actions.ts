import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Merchant } from '../../../../core/models/merchant.model';

export const createMerchantStart = createAction(
   '[MERCHANT] ADD MERCHANT START',
   props<{ payload: Merchant }>()
);
export const createMerchantSuccess = createAction(
   '[MERCHANT] ADD MERCHANT SUCCESS',
   props<{ payload: Merchant }>()
);

export const getMerchantsStart = createAction('[MERCHANT] GET MERCHANTS START');
export const getMerchantsSuccess = createAction(
   '[MERCHANT] GET MERCHANTS SUCCESS',
   props<{ payload: Merchant[] }>()
);

export const deleteMerchantStart = createAction(
   '[MERCHANT] DELETE MERCHANT START',
   props<{ payload: { id: string } }>()
);
export const deleteMerchantSuccess = createAction(
   '[MERCHANT] DELETE MERCHANT SUCCESS',
   props<{ payload: Merchant }>()
);

export const editMerchantStart = createAction(
   '[MERCHANT] EDIT MERCHANT START',
   props<{ payload: { id: string; merchant: Merchant } }>()
);
export const editMerchantSuccess = createAction(
   '[MERCHANT] EDIT MERCHANT SUCCESS',
   props<{ payload: Update<Merchant> }>()
);

export const merchantError = createAction(
   '[MERCHANT] ERROR',
   props<{ payload: string }>()
);
