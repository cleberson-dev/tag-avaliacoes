import React from 'react';
import styled from 'styled-components';





const InfoLista = styled.ul`
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: repeat(2, auto);
  grid-auto-flow: column;
  grid-gap: 10px;
  margin: 0;
  padding: 0;
`;

const InfoTitle = styled.div`
  color: #B7B7B7;
  font-size: 0.6rem;
  text-transform: uppercase;
`;

const InfoSubtitle = styled.span`
  font-weight: 300;
  font-size: 0.9rem;
`;





const InfoItem = ({ atributo, valor }) => (
  <li>
    <InfoTitle>{atributo}</InfoTitle>
    <InfoSubtitle>{valor}</InfoSubtitle>
  </li>
);


const ExtraInfo = ({ bookInfo }) => {
  const { edition, curator, pages, numRatings, grStats } = bookInfo;
  const avaliacoesGR = grStats === 0 ? 'Sem informações' : `${grStats.numRatings} avaliações`;


  return (
    <InfoLista>
      <InfoItem atributo="Edição" valor={edition} />
      <InfoItem atributo="Curador(a)" valor={curator} />
      <InfoItem atributo="Total de páginas" valor={`${pages} páginas`} />
      <InfoItem atributo="Total de avaliações TAG" valor={`${numRatings} avaliações`} />
      <InfoItem atributo="Total de avaliações GoodReads" valor={avaliacoesGR} />
    </InfoLista>
  );
};


export default ExtraInfo;