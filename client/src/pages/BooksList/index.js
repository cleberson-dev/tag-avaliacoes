import React, { Component } from "react";

import { List } from "../../components/List";
import BookItem from "./BookItem";





class BooksList extends Component {
  render() {
    let { books } = this.props;

    return (
      <List>
        {books.map((book) => (
          <BookItem book={book} key={book.objectId} />
        ))}
      </List>
    );
  }
}





export default BooksList;
