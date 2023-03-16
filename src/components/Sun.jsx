import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { palettes, blackish } from '../common/colors';
import starsImage from '../assets/stars.gif';
import moonImage from '../assets/moon.gif';
import vectorsImage from '../assets/vectors.jpg';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    scale: 0.8;
  }
  25% {
    transform: rotate(90deg);
    scale: 1.4;
  }
  50% {
    transform: rotate(180deg);
    scale: 0.8;
  }
  75% {
    transform: rotate(270deg);
    scale: 1.4;
  }
  100% {
    transform: rotate(360deg);
    scale: 0.8;
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
  @media (max-width: 768px) {
    height: 55%;
  }
`;

const SkyImageDiv = styled.div`
  height: 100%;
  width: 100%;
  transition: background 2s ease-in-out;
  background-image: url(${starsImage});
  background-color: ${({colors}) => colors.dark};
  background-attachment: fixed;
  background-blend-mode: lighten;
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
  background: ${({colors}) => colors.midLight};
  width: 140px;
  height: 140px;
  border-radius: 50%;
  transition: all 2s ease-in-out;
  filter: blur(1px) drop-shadow(0 0 20px ${({colors}) => colors.light});
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const MoonImg = styled.img`
  width: 140px;
  height: 140px;
  transition: all 2s ease-in-out;
  filter: blur(0.5px) drop-shadow(0 0 42px ${({colors}) => colors.mid});
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
  min-width: 460px;
  @media (max-width: 768px) {
    left: 10%;
  }
`;

function Sun() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      selectColor();
    }, 8000);
    return () => clearInterval(interval);
  });

  const selectColor = () => {
    let index = currentIndex + 1;
    setCurrentIndex(index < palettes.length ? index : 0);
  };

  return (
    <CenteredDiv onClick={selectColor}>
      <SkyDiv>
        <SkyImageDiv colors={palettes[currentIndex]}/>
        <SunPositionDiv>
          <SunDiv colors={palettes[currentIndex]} />
          <MoonImg src={moonImage} colors={palettes[currentIndex]} />
        </SunPositionDiv>
      </SkyDiv>
      <WaterDiv />
    </CenteredDiv>
  );
};

export default Sun;
