import React, { Component } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { connect } from "react-redux";

import { getBooks } from "./actions/booksActions";

import Header from "./components/Header";

import BookList from "./pages/BooksList";
import DetailsModal from "./pages/DetailsModal";




// Estilização global da aplicação
const AppStyle = createGlobalStyle`
  body { color: #354E53; }

  body, p, ul { margin: 0; }

  li { list-style: none; }

  body, button { font-family: 'Montserrat', sans-serif; }
`;

const theme = {
  primary: "#21C5E5"
};



class App extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    const { currentBook, books } = this.props;

    return (
      <React.Fragment>
        <AppStyle />

        <ThemeProvider theme={theme}>
          <div className="App">
            <Header />
            <BookList books={books} />
            {
              /* Exibe a tela de detalhes quando existir um objeto representando o livro no state: currentBook */
              currentBook.hasOwnProperty("author") ? (
                <DetailsModal book={currentBook} />
              ) : ""
            }
          </div>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}





const mapStateToProps = (state) => ({
  currentBook: state.currentBook,
  books: state.books
});

export default connect(
  mapStateToProps,
  { getBooks }
)(App);
