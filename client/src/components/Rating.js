import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: right;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

const BrandTitle = styled.span`
  font-size: 0.6rem;
  color: ${props => props.brand === 'goodreads' ? '#382110' : '#21C5E5' };
`;

const RatingNumber = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
`;


const Rating = ({ brand, rating }) => (
  <Container>
    <BrandTitle brand={brand}>{brand === 'goodreads' ? 'GoodReads' : 'TAG' }</BrandTitle>
    <RatingNumber>{rating}</RatingNumber>
  </Container>
);


export default Rating;