import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBooks } from '../../actions/booksActions';

import { Lista } from '../../components/Lista';
import BookItem from './BookItem';





class BookList extends Component {
  render() {
    let { livros } = this.props;

    return (
      <Lista>
        {livros.map(livro => <BookItem livro={livro} key={livro.objectId} />)}
      </Lista>
    );
  }
};





export default connect(state => ({}), { getBooks })(BookList);