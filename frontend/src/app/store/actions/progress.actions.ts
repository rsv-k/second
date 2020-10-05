import { createAction, props } from '@ngrx/store';

export const setCurrentProcess = createAction(
   '[PROGRESS] SET',
   props<{ payload: number }>()
);
