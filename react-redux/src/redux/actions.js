import { ADD_COUNT, MINUS_COUNT } from './action-types';

export const addCount = number => ({ type: ADD_COUNT, number });
export const minusCount = number => ({ type: MINUS_COUNT, number });
