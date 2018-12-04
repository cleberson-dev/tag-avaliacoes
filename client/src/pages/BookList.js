import React from 'react';
import styled from 'styled-components';

import { Lista, ListaItem } from '../components/Lista';
import { FlatButton } from '../components/Buttons';
import Card from '../components/Card';
import BookDetails from '../components/BookDetails';


export const DetalhesButton = styled(FlatButton)`
  align-self: flex-end;
  margin-top: 10px;
`;




const BookItem = () => (
  <ListaItem>
    <Card>
      <BookDetails botao={<DetalhesButton children="Ver Detalhes" />} />
    </Card>
  </ListaItem>
);


const BookList = ({ livros }) => {
  return (
    <Lista>
      <BookItem  />
    </Lista>
  );
};


export default BookList;