import { GET_BOOKS } from '../actions/types';

const booksReducer = (state = [], action) => {
  switch(action.type) {
    case GET_BOOKS: {
      return action.books;
    }
    default: {
      return state;
    }
  }
};

export default booksReducer;