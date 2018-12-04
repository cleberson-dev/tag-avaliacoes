import React from "react";
import styled from "styled-components";

import Rating from "./Rating";

import coverUrl from "../assets/img/bookcover.jpg";





export const BookCover = styled.img.attrs({
  src: props => props.src
})`
  width: 110px;
  height: 165px;
  object-fit: cover;
  grid-column: 1;
  grid-row: 1 / 3;
`;

export const BookContainer = styled.div`
  display: flex;
  height: ${props => props.height || '100%'};
`;

export const RatingsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const BookInfo = styled.div`
  height: 165px;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  width: 100%;
`;

export const BookTitle = styled.p`
  margin-bottom: 3px;
  font-size: 0.75rem;
`;

export const BookAuthor = styled.span`
  font-weight: 300;
  font-size: 0.75rem;
`;



export const TextContainer = styled.div`
  flex-grow: 1;
`;





const BookDetails = ({ livro, botao, height }) => (
  <BookContainer height={height}>
    <BookCover src={coverUrl} />
    <BookInfo>
      <TextContainer>
        <BookTitle>O Xará</BookTitle>
        <BookAuthor>Jhumpa Lahiri</BookAuthor>
      </TextContainer>
      <RatingsContainer>
        <Rating brand="tag" rating="4.55" />
        <Rating brand="goodreads" rating="4.95" />
      </RatingsContainer>
      { botao }
    </BookInfo>
  </BookContainer>
);

export default BookDetails;
