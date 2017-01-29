import catApi from '../api/catApi';
import * as types from './actionTypes';

export function loadCats() {
  return function(dispatch) {
    return catApi.getAllCats().then(cats => {
      dispatch(loadCatsSuccess(cats));
    })
    .catch(err => {
      throw(err);
    });
  };
}

export function loadCatsSuccess(cats) {
  return { type: types.LOAD_CATS_SUCCESS, cats };
}
