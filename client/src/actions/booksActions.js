import { GET_BOOKS } from './types';

import axios from 'axios';

import data from '../livros.json';
const livros = data.results;

export const getBooks = () => dispatch => {
  const meusLivros = [];

  const minhasPromessas = livros.map((livro) => { 
    return axios.get(`http://localhost:5000/book/review_counts.json?key=KGXBPKnyuYSnSpYDYo7rA&isbns=${livro.isbn}`)
      .then(resolve => ({
        ...livro,
        grRating: resolve.data.books[0].average_rating
      }))
      .catch(err => ({
        ...livro,
        grRating: 0
      }));
  });

  console.log(minhasPromessas);

  Promise.all(minhasPromessas)
    .then(res => dispatch({
      type: GET_BOOKS,
      books: res
    }));
};