import React from 'react';
import styled from 'styled-components';
import {
  gray6, 
} from './common/colors';
import Routes from './Routes';

const AppDiv = styled.div`
  background: #FFF;
  color: ${gray6};
  height: 100%;
  width: 100%;
  position: relative;
`;

const App = () => {
  return (
    <AppDiv>
      <Routes />
    </AppDiv>
  );
};

export default App;
