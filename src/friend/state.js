import createReducer from '../common/createReducer';
import { ADD_FRIEND, REMOVE_FRIEND, EDIT_FRIEND } from '../store/ActionTypes';

export const addFriend = friend => ({ type: ADD_FRIEND, friend });
export const removeFriend = friend => ({
  type: REMOVE_FRIEND,
  friend
});
export const editfriend = friend => ({ type: EDIT_FRIEND, friend });

const INITIAL_STATE = { friends: [] };
const reducer = createReducer(INITIAL_STATE, {
  [ADD_FRIEND]: (state, action) => state.friends.push(action.friend),
  [REMOVE_FRIEND]: (state, action) =>
    (state.friends = state.friends.filter(friend => friend.id !== action.friend.id)),
  [EDIT_FRIEND]: (state, action) => {
    const index = state.friends.findIndex(friend => friend.id === action.friend.id);
    if (index >= 0) {
      state.friends[index] = action.friend;
    }
  }
});

export default reducer;
