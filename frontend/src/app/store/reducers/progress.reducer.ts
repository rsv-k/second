import { createReducer, on, Action } from '@ngrx/store';
import * as ProgressActions from '../actions/progress.actions';

export interface State {
   currentProgress: number;
}

export const initialState: State = {
   currentProgress: 1,
};

const progressReducer = createReducer(
   initialState,
   on(ProgressActions.setCurrentProcess, (state, { payload }) => ({
      ...state,
      currentProgress: payload,
   }))
);

export function reducer(state: State, action: Action): State {
   return progressReducer(state, action);
}
