import { ADD_COMMENT, DEL_COMMENT, RECEVICE_COMMENT } from './action-types';

export const addComment = comment => ({ type: ADD_COMMENT, data: comment });
export const delComment = index => ({ type: DEL_COMMENT, data: index });
export const receviceComments = comments => ({ type: RECEVICE_COMMENT, data: comments });

export const getComments = () => {
  return dispatch => {
    setTimeout(() => {
      const data = [{ name: 'ddz', content: 'react is very good' }];
      dispatch(receviceComments(data));
    }, 1000);
  };
};
