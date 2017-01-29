import * as types from '../actions/actionTypes.js';
import initialState from './initialState';

export default function(state = initialState.cats, action) {
  switch(action.type) {
    case types.LOAD_CATS_SUCCESS:
      console.log(action.cats);
      return action.cats;

    default:
      return state;
  }
}
