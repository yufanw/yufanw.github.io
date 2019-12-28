import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  gray6, 
  gray0,
} from './common/colors';

const spin = keyframes`
  from {transform:rotate(0deg);}
  to {transform:rotate(360deg);}
`;

const spin2 = keyframes`
  from {transform:rotate(360deg);}
  to {transform:rotate(0deg);}
`;

const AppDiv = styled.div`
  min-height: 100vh;
  height: 100%;
  background: #FFF;
  color: ${gray6};
`;

const UnderConstructionDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentDiv = styled.div`
  text-align: center;
  background: ${gray0};
  padding: 60px;
`;

const GearsDiv = styled.div`
  position: relative;
  height: 30px;
`;

const GearOneDiv = styled.div`
  position: absolute;
  top: 0;
  right: 54%;
  animation: ${spin} 2s linear infinite;
  display: flex;
`;

const GearTwoDiv = styled.div`
  position: absolute;
  top: 5px;
  right: 49%;
  animation: ${spin2} 2s linear infinite;
  display: flex;
`;

const App = () => {
  return (
    <AppDiv>

      <UnderConstructionDiv>
        <ContentDiv>
          <GearsDiv>
            <GearOneDiv>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path 
                  d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
              </svg>
            </GearOneDiv>
            <GearTwoDiv>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path 
                  d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/>
              </svg>
            </GearTwoDiv>
          </GearsDiv>
          <h2>Under Construction</h2>
          <div>
            <span>I am currently updating the site, please check back later!</span>
          </div>
        </ContentDiv>
      </UnderConstructionDiv>
    </AppDiv>
  )
}

export default App;
