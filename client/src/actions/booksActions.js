import axios from 'axios';
import { DateTime } from 'luxon';
import { GET_BOOKS, GET_GR_STATS } from './types';
import data from '../livros.json';





const livrosJSON = data.results;
const OPTIONS = { locale: "pt" };
const FORMAT = "LLLL 'de' y";

const livros = livrosJSON.sort((livroA, livroB) => {
  const dataA = DateTime.fromFormat(livroA.edition, FORMAT, OPTIONS);
  const dataB = DateTime.fromFormat(livroB.edition, FORMAT, OPTIONS);

  const diff = dataB.diff(dataA).toObject();

  return diff.milliseconds;
});





export const getBooks = () => dispatch => {
  dispatch({
    type: GET_BOOKS,
    books: livros
  });
};

export const getGrStats = (livro) => (dispatch) => {
  axios.get(`http://localhost:5000/book/review_counts.json?key=KGXBPKnyuYSnSpYDYo7rA&isbns=${livro.isbn}`)
    .then((res) => {
      dispatch({
        type: GET_GR_STATS,
        grStats: {
          numRatings: res.data.books[0].ratings_count,
          averageRating: res.data.books[0].average_rating
        },
        livroID: livro.objectId
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_GR_STATS,
        grStats: 0,
        livroID: livro.objectId
      });
    });
};