import { combineReducers } from 'redux';

import booksReducer from './booksReducer';
import currentBookReducer from './currentBookReducer';





export default combineReducers({
  books: booksReducer,
  currentBook: currentBookReducer
});