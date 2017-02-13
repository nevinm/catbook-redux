import * as types from '../actions/actionTypes.js';
import initialState from './initialState';

export default function(state = initialState.cats, action) {
  switch (action.type) {
    case types.LOAD_CATS_SUCCESS:
      return action.cats;

    case types.ADD_CATS_SUCCESS: {
      const cats = [
        ...state,
        action.cat,
      ];
      return cats;
    }

    default:
      return state;
  }
}
