import { ADD, MINUS } from './action-types';

export const add = number => ({ type: ADD, number });
export const minus = number => ({ type: MINUS, number });
export const asyncAdd = number => {
  return dispatch => {
    setTimeout(() => {
      dispatch(add(number));
    }, 1000);
  };
};
