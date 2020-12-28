import createReducer from '../common/createReducer';

import {
  ADD_TIMELINE,
  REMOVE_TIMELINE,
  EDIT_TIMELINE,
  INCREASE_NEXT_PAGE_TIMELINE
} from '../store/ActionTypes';

export const addTimeLine = timeline => ({ type: ADD_TIMELINE, timeline });
export const removeTimeLine = timeline => ({ type: REMOVE_TIMELINE, timeline });
export const editTimeLine = timeline => ({ type: EDIT_TIMELINE, timeline });
export const increaseNextPage = timeline => ({ type: INCREASE_NEXT_PAGE_TIMELINE, timeline });

const INITIAL_STATE = { timelines: [], nextPage: 0 };
const reducer = createReducer(INITIAL_STATE, {
  [ADD_TIMELINE]: (state, action) => state.timelines.push(action.timeline),
  [REMOVE_TIMELINE]: (state, action) =>
    (state.timelines = state.timelines.filter(timeline => timeline.id !== action.timeline.id)),
  [EDIT_TIMELINE]: (state, action) => {
    const index = state.timelines.findIndex(timeline => timeline.id === action.timeline.id);
    if (index >= 0) {
      state.timelines[index] = action.timeline;
    }
  },
  [INCREASE_NEXT_PAGE_TIMELINE]: (state, action) => (state.nextPage += 1)
});

export default reducer;
