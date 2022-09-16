import React from 'react';
import styled from 'styled-components';
import {
  blackish, gray1,
} from './common/colors';
import GlobalFonts from './fonts/fonts';
import Routes from './Routes';

const AppDiv = styled.div`
  background: #FFF;
  color: ${gray1};
  height: 100vh;
  width: 100%;
  position: relative;
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
  background: ${blackish};
`;

const App = () => {
  return (
    <AppDiv>
      <GlobalFonts />
      <Routes />
    </AppDiv>
  );
};

export default App;
