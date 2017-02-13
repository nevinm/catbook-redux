import catApi from '../api/catApi';
import * as types from './actionTypes';

export function addCat(cat) {
  return function (dispatch) {
    return catApi.addCat(cat).then(cats => {
      dispatch(addCatsAction(cats));
    });
  };
}

export function loadCats() {
  return function (dispatch) {
    return catApi.getAllCats().then(cats => {
      dispatch(loadCatsSuccess(cats));
    })
    .catch(err => {
      throw(err);
    });
  };
}

export function addCatsAction(cat) {
  return { type: types.ADD_CATS_SUCCESS, cat };
}

export function loadCatsSuccess(cats) {
  return { type: types.LOAD_CATS_SUCCESS, cats };
}
