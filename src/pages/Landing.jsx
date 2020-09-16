import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  gray0,
  coral,
  beige,
  teal,
  blue,
  purple,
} from '../common/colors';


const bounce = keyframes`
  0%   { transform: translateY(0) }
  50%  { transform: translateY(-16px) }
  100% { transform: translateY(0) }
`;

const WrapperDiv = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  position: relative;
`;

const CenteredDiv = styled.div`
  height: 100%
  display: flex;
  flex-direction: column;
`;

const LandDiv = styled.div`
  min-height: 60vh;
  background: ${beige};
  background: linear-gradient(0deg, ${beige} 0%, ${coral} 55%, ${purple} 88%);
`;

const WaterDiv = styled.div`
  height: 40%;
  min-height: 40vh;
  background: ${blue};
  width: 100%;
  z-index: 100;
  position: relative;
`;

const BouncingWaterDiv = styled.div`
  position: absolute;
  z-index: 2;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${coral};
  animation: ${bounce} 8s linear infinite;
`;

const WaterColorDiv = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${teal};
  background: linear-gradient(0, ${purple} 0%, ${blue} 30%, ${beige} 56%, ${coral} 88%);
`;

const SunDiv = styled.div`
  background: #ff7583;
  width: 160px;
  height: 160px:
  min-width: 160px;
  min-height: 160px;
  border-radius: 50%;
`;

const SunPositionDiv = styled.div`
  height: 160px;
  position: absolute;
  top: 45%;
  left: 28%;
  transition: all ease-in-out 1s;
  :hover {
    top: 40%;
    transform: scale(0.9);
  }
`;

const SignatureDiv = styled.div`
  position: fixed;
  z-index: 10000;
  bottom: 5px;
  right: 5px;
  font-size: 12px;
  color: ${gray0};
`;

const SigSpan = styled.span`
  font-style: italic;
  font-size: 8px;
`;

const SocialAnchor = styled.a`
  color: ${gray0};
  :hover {
    color: ${teal};
  }
`;

function Landing() {
  return (
    <WrapperDiv>
      <CenteredDiv>
        <LandDiv>
          <SunPositionDiv>
            <SunDiv></SunDiv>
          </SunPositionDiv>
        </LandDiv>
        <WaterDiv>
          <BouncingWaterDiv>
          </BouncingWaterDiv>
          <WaterColorDiv>
          </WaterColorDiv>
        </WaterDiv>
      </CenteredDiv>
      <SignatureDiv>
        <SigSpan>&hearts;JMB | CSS Only</SigSpan> &#169;2020 <SocialAnchor href="https://www.linkedin.com/in/yufan-wang-web/" rel="noopener noreferrer nofollow">Yufan W</SocialAnchor>
      </SignatureDiv>
    </WrapperDiv>
  );
};

export default Landing;
