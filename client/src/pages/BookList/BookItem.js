import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { showCurrentBook } from '../../actions/currentBookActions';
import { getGrStats } from '../../actions/booksActions';

import Card from '../../components/Card';
import BookDetails from '../../components/BookDetails';
import Loading from '../../components/Loading';
import { ListaItem } from '../../components/Lista';
import { FlatButton } from '../../components/Buttons';





const DetalhesButton = styled(FlatButton)`
  align-self: flex-end;
  margin-top: 10px;
`;


class BookItem extends Component {
  componentDidMount() {
    const { livro, getGrStats } = this.props;
    getGrStats(livro);
  }
  
  render() {
    const { livro, showCurrentBook } = this.props;

    return (
      <ListaItem>
        <Card>
          { livro.hasOwnProperty('grStats') ? 
            <BookDetails
              livro={livro} 
              botao={<DetalhesButton label="Ver Detalhes" onClickHandler={() => showCurrentBook(livro)} />} 
            /> :
            <Loading size={40} />
          }
        </Card>
      </ListaItem>
    );
  }
}





export default connect(state => ({}), { showCurrentBook, getGrStats })(BookItem);