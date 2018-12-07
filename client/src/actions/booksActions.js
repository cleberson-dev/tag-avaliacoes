import axios from 'axios';
import { DateTime } from 'luxon';
import { GET_BOOKS, GET_GR_STATS } from './types';
import data from '../livros.json';





const booksFromJSON = data.results;
const OPTIONS = { locale: "pt" };
const FORMAT = "LLLL 'de' y";

const books = booksFromJSON.sort((livroA, livroB) => {
  const dataA = DateTime.fromFormat(livroA.edition, FORMAT, OPTIONS);
  const dataB = DateTime.fromFormat(livroB.edition, FORMAT, OPTIONS);

  const diff = dataB.diff(dataA).toObject();

  return diff.milliseconds;
});



export const getBooks = () => dispatch => {
  dispatch({
    type: GET_BOOKS,
    books: books
  });
};

export const getGrStats = (book) => (dispatch) => {
  axios.get(`http://localhost:5000/book/review_counts.json?key=KGXBPKnyuYSnSpYDYo7rA&isbns=${book.isbn}`)
    .then((res) => {
      dispatch({
        type: GET_GR_STATS,
        grStats: {
          numRatings: res.data.books[0].ratings_count,
          averageRating: res.data.books[0].average_rating
        },
        bookID: book.objectId
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_GR_STATS,
        grStats: 0,
        bookID: book.objectId
      });
    });
};