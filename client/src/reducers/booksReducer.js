import { GET_BOOKS, GET_GR_STATS } from '../actions/types';





const booksReducer = (state = [], action) => {
  switch(action.type) {
    case GET_BOOKS: {
      return action.books;
    }

    case GET_GR_STATS: {
      // Procura o livro pelo seu ID no state e adiciona as avaliações da GoodReads
      return state.map((book) => { 
        if (book.objectId === action.bookID) {
          return {
            ...book,
            grStats: action.grStats
          }
        } else {
          return book;
        }
      });
    }

    default: {
      return state;
    }
  }
};





export default booksReducer;