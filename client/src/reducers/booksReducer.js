import { GET_BOOKS, GET_GR_STATS } from '../actions/types';

const booksReducer = (state = [], action) => {
  switch(action.type) {
    case GET_BOOKS: {
      return action.books;
    }
    case GET_GR_STATS: {
      return state.map((livro) => { 
        if (livro.objectId === action.livroID) {
          return {
            ...livro,
            grStats: action.grStats
          }
        } else {
          return livro;
        }
      });
    }
    default: {
      return state;
    }
  }
};

export default booksReducer;