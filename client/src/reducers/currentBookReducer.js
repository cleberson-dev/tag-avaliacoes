import { SHOW_CURRENT_BOOK, HIDE_CURRENT_BOOK } from '../actions/types';

const currentBookReducer = (state = {}, action) => {
  switch(action.type) {
    case SHOW_CURRENT_BOOK: {
      return action.book;
    }
    case HIDE_CURRENT_BOOK: {
      return {};
    }
    default: {
      return state;
    }
  }
};

export default currentBookReducer;