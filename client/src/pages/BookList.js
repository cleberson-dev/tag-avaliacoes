import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { connect } from 'react-redux';
import { HalfCircleSpinner } from 'react-epic-spinners';

import { getBooks } from '../actions/booksActions';

import { Lista, ListaItem } from '../components/Lista';
import { FlatButton } from '../components/Buttons';
import Card from '../components/Card';
import BookDetails from '../components/BookDetails';



export const DetalhesButton = styled(FlatButton)`
  align-self: flex-end;
  margin-top: 10px;
`;

const anime = keyframes`
  from { 
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const LoadingContainer = styled.div`
  position: absolute;
  top: 0;
  height: 0;
  background-color: rgba(255, 255, 255,.8);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${anime} 0.5s;
`;




const BookItem = ({ livro }) => (
  <ListaItem>
    <Card>
      <BookDetails
        livro={livro} 
        botao={<DetalhesButton children="Ver Detalhes" />} 
      />
    </Card>
  </ListaItem>
);

class BookList extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { books } = this.props;

    return (
      books.length > 0 ? (
        <Lista>
          {books.map(livro => <BookItem livro={livro} />)}
        </Lista>
      ) : <LoadingContainer><HalfCircleSpinner color="#21C5E5" /></LoadingContainer>
    )
  }


};




const mapStateToProps = (state) => ({
  books: state.books
});


export default connect(mapStateToProps, { getBooks })(BookList);