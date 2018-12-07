import React from 'react';
import { connect } from 'react-redux';

import { hideCurrentBook } from '../../actions/currentBookActions';

import Card from '../../components/Card';
import BookDetails from '../../components/BookDetails';
import ExtraInfo from '../../components/ExtraInfo';
import {
  DetailContainer, Heading, SubHeading, GoBack
} from './styles'

import returnImg from '../../assets/img/return.svg';





// Mostra as informações de determinado livro quando clicado no seu botão de 'Ver detalhes'
const DetailsModal = ({ book, hideCurrentBook }) => {
  return (
    <DetailContainer>
      <GoBack>
        <img src={returnImg} alt="Voltar" style={{ height: "25px", marginRight: "5px" }} />
        <span onClick={hideCurrentBook}>Voltar</span>     
      </GoBack>

      <Card width="90%">
        <Heading>Detalhes</Heading>
        <BookDetails height="fit-content" book={book} />

        <SubHeading>Mais informações</SubHeading>
        <ExtraInfo book={book} />
      </Card>
    </DetailContainer>
  );
};





export default connect(state => ({}), { hideCurrentBook })(DetailsModal);