import React from 'react';
import Main from '../Main/Main';
import { createGlobalStyle } from 'styled-components';

import {
  Container,
} from './styles';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }
`


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Main />
      </Container>
    </>
  );
}

export default App;