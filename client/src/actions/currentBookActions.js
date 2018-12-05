import { SHOW_CURRENT_BOOK, HIDE_CURRENT_BOOK } from './types';

export const showCurrentBook = book => dispatch => {
  dispatch({
    type: SHOW_CURRENT_BOOK,
    book
  });
};

export const hideCurrentBook = () => dispatch => {
  dispatch({
    type: HIDE_CURRENT_BOOK
  });
};