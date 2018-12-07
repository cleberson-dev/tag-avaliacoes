import React from 'react';

import { InfoList, InfoTitle, InfoSubtitle } from './styles';





const InfoItem = ({ attribute, value }) => (
  <li>
    <InfoTitle>{attribute}</InfoTitle>
    <InfoSubtitle>{value}</InfoSubtitle>
  </li>
);



const ExtraInfo = ({ book }) => {
  const { edition, curator, pages, numRatings, grStats } = book;
  const avaliacoesGR = grStats === 0 ? 'Sem informações' : `${grStats.numRatings} avaliações`;

  return (
    <InfoList>
      <InfoItem attribute="Edição" value={edition} />
      <InfoItem attribute="Curador(a)" value={curator} />
      <InfoItem attribute="Total de páginas" value={`${pages} páginas`} />
      <InfoItem attribute="Total de avaliações TAG" value={`${numRatings} avaliações`} />
      <InfoItem attribute="Total de avaliações GoodReads" value={avaliacoesGR} />
    </InfoList>
  );
};





export default ExtraInfo;