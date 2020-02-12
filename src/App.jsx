import React from 'react';
import styled from 'styled-components';
import {
  gray6, 
} from './common/colors';
import Routes from './Routes';
import Layout from './common/Layout';

const AppDiv = styled.div`
  background: #FFF;
  color: ${gray6};
`;

const App = () => {
  return (
    <AppDiv>
      <Layout>
        <Routes />
      </Layout>
    </AppDiv>
  );
};

export default App;
