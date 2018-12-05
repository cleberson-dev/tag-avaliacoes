import React, { Component } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './components/Header';
import BookList from './pages/BookList';
import DetailsModal from './pages/DetailsModal';

const AppStyle = createGlobalStyle`
  body {
    color: #354E53;
  }

  body, p, ul {
    margin: 0;
  }

  li { list-style: none; }

  body, button { font-family: 'Montserrat', sans-serif; }
`;


const theme = {
  primary: "#21C5E5"
}


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppStyle />
        
        <ThemeProvider theme={theme}>
          <div className="App">
            <Header />
            <BookList />
            {/* <DetailsModal /> */}
          </div>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}





export default App;
