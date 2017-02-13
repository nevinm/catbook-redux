import catApi from '../api/catApi';
import * as types from './actionTypes';

export function addCat() {
  return function (dispatch) {
    return catApi.addCat().then(cats => {
      console.log('ADDDED->', cats);

      // dispatch(addCatsSuccess(cats))
      // .then(dispatch(loadCatsSuccess(cats)));
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

export function addCatsSuccess(cats) {
  return { type: types.ADD_CATS_SUCCESS, cats };
}

export function loadCatsSuccess(cats) {
  return { type: types.LOAD_CATS_SUCCESS, cats };
}
