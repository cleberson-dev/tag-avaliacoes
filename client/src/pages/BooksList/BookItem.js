import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { showCurrentBook } from '../../actions/currentBookActions';
import { getGrStats } from '../../actions/booksActions';

import Card from '../../components/Card';
import BookDetails from '../../components/BookDetails';
import Loading from '../../components/Loading';
import { ListItem } from '../../components/List';
import { FlatButton } from '../../components/Buttons';





const DetailsButton = styled(FlatButton)`
  align-self: flex-end;
  margin-top: 10px;
`;



class BookItem extends Component {
  componentDidMount() {
    const { book, getGrStats } = this.props;

    // Busca a avaliação da API da GoodReads
    getGrStats(book);
  }
  
  render() {
    const { book, showCurrentBook } = this.props;

    return (
      <ListItem>
        <Card>
          { /* Somente irá mostrar o card com o livro se tiver buscado as avaliações */
            book.hasOwnProperty('grStats') ? 
            <BookDetails
              book={book} 
              button={<DetailsButton label="Ver Detalhes" onClickHandler={() => showCurrentBook(book)} />} 
            /> :
            <Loading size={40} />
          }
        </Card>
      </ListItem>
    );
  }
}





export default connect(state => ({}), { showCurrentBook, getGrStats })(BookItem);