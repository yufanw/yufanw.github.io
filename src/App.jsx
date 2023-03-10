import React from 'react';
import styled from 'styled-components';
import {
  gray7, gray0,
} from './common/colors';
import GlobalFonts from './fonts/fonts';
import Routes from './Routes';

const AppDiv = styled.div`
  color: ${gray0};
  font-family: 'Titillium Web', sans-serif;
  font-size: 20px;
  min-height: 100vh;
  height: 100%;
  background: ${gray7};
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
