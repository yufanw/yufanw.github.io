import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { blue, palettes, navy, teal } from '../common/colors';
import starsImage from '../assets/stars.gif';
import moonImage from '../assets/moon.gif';

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
  background-blend-mode: lighten;
`;

const WaterDiv = styled.div`
  height: 40%;
  background: ${blue};
  position: relative;
  @media (max-width: 768px) {
    height: 45%;
  }
`;

const WaterColorDiv = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${blue};
  background: linear-gradient(178deg, ${teal} 0%, ${blue} 41%, ${navy} 92%);
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
      <WaterDiv>
        <WaterColorDiv colors={palettes[currentIndex]} />
      </WaterDiv>
    </CenteredDiv>
  );
};

export default Sun;
