import React from "react";

import {
  BookContainer, BookCover, BookInfo, BookTitle, BookAuthor,
  TextContainer, 
  RatingsContainer
} from './styles';
import Rating from "../Rating";





// Calcula o rating de avaliações da TAG pela razão entre o total de ratings pelo numéro de ratings
const getTAGRating = (totalRatings, numRatings) => (totalRatings / numRatings).toFixed(2);



const BookDetails = ({ book, button, height }) => {
  const { cover, name, author, numRatings, totalRatings, grStats } = book;

  const tagRating = getTAGRating(totalRatings, numRatings);

  return (
    <BookContainer height={height}>
      <BookCover src={cover.url} />
      <BookInfo>
        <TextContainer>
          <BookTitle>{name}</BookTitle>
          <BookAuthor>{author}</BookAuthor>
        </TextContainer>
        <RatingsContainer>
          <Rating brand="tag" rating={tagRating} />
          <Rating brand="goodreads" rating={grStats ? grStats.averageRating : "-.--"} />
        </RatingsContainer>
        { button }
      </BookInfo>
    </BookContainer>
  );
};





export default BookDetails;
