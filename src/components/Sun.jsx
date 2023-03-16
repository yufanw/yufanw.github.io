import React from 'react';
import styled, { keyframes } from 'styled-components';
import { palettes, blackish, gray1 } from '../common/colors';
import starsImage from '../assets/stars.gif';
import moonImage from '../assets/moon.gif';
import vectorsImage from '../assets/vectors.jpg';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const changeColorDark = keyframes`
  0% {
    background-color: ${palettes[0].dark};
  }
  30% {
    background-color: ${palettes[1].mid};
  }
  60% {
    background-color: ${palettes[1].dark};
  }
  90% {
    background-color: ${palettes[1].dark};
  }
  100% {
    background-color: ${palettes[0].dark};
  }
`;

const changeOpacity = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
`;

const changeColorMidLight = keyframes`
  0% {
    background-color: ${palettes[1].midLight};
    filter: blur(0.5px) drop-shadow(0 0 20px ${palettes[1].light});
  }
  50% {
    background-color: ${palettes[0].midLight};
    filter: blur(0.5px) drop-shadow(0 0 20px ${palettes[0].light});
  }
  100% {
    background-color: ${palettes[1].midLight};
    filter: blur(0.5px) drop-shadow(0 0 20px ${palettes[1].light});
  }
`;

const CenteredDiv = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const SkyDiv = styled.div`
  height: 60%;
  position: relative;
  overflow: hidden;
  animation: ${changeColorDark} 16s linear infinite;
  @media (max-width: 768px) {
    height: 55%;
  }
`;

const SkyImageDiv = styled.div`
  height: 100%;
  width: 100%;
  animation: ${changeOpacity} 16s linear infinite;
  background-image: url(${starsImage});
  background-attachment: fixed;
`;

const WaterDiv = styled.div`
  height: 40%;
  position: relative;
  background-image: url(${vectorsImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: ${blackish};
  background-blend-mode: darken;
  @media (max-width: 768px) {
    height: 45%;
  }
`;

const SunDiv = styled.div`
  animation: ${changeColorMidLight} 8s linear infinite;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const MoonImg = styled.img`
  width: 140px;
  height: 140px;
  filter: blur(0.5px) drop-shadow(0 0 10px ${gray1});
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const SunPositionDiv = styled.div`
  animation: ${rotate} 16s linear infinite;
  position: absolute;
  display: flex;
  justify-content: space-between;
  left: 30%;
  top: 90%;
  width: 50%;
  @media (max-width: 768px) {
    left: 0;
    width: 100%;
    top: 80%;
  }
`;

function Sun() {
  return (
    <CenteredDiv>
      <SkyDiv>
        <SkyImageDiv />
        <SunPositionDiv>
          <SunDiv />
          <MoonImg src={moonImage} />
        </SunPositionDiv>
      </SkyDiv>
      <WaterDiv />
    </CenteredDiv>
  );
};

export default Sun;
