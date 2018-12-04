import React from 'react';
import styled from 'styled-components';

import Card from '../components/Card';
import BookDetails from '../components/BookDetails';
import ExtraInfo from '../components/ExtraInfo';

import returnImg from '../assets/img/return.svg';




const GoBack = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  color: white;
  cursor: pointer;
  font-weight: 300;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;



const DetailContainer = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(53, 78, 83, .8);
`;

const Heading = styled.h3`
  color: ${props => props.theme.primary};
  font-weight: bold;
  text-transform: uppercase;
  margin: auto;
  text-align: center;
  margin-bottom: 15px;
`;

const SubHeading = styled.h5`
  text-transform: uppercase;
  color: #354E53;
  text-align: center;
  font-weight: 500;
`;







const DetailsModal = () => {
  const tagInfo = {
    edition: 'Fevereiro de 2017',
    curator: 'Martha Medeiros',
    pages: 336,
    numRatings: 863
  };


  return (
    <DetailContainer>
      <GoBack>
        <img src={returnImg} alt="Voltar" style={{ height: "25px", marginRight: "5px" }} />
        Voltar     
      </GoBack>

      <Card width="90%">
        <Heading>Detalhes</Heading>
        <BookDetails height="fit-content" />

        <SubHeading>Mais informações</SubHeading>
        <ExtraInfo tagInfo={tagInfo} grRatings={302} />
      </Card>
    </DetailContainer>
  );
};





export default DetailsModal;