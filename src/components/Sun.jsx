import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { blue, palettes, navy, teal } from '../common/colors';
import starsImage from '../assets/stars.gif';
import moonImage from '../assets/moon.gif';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
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
  width: 100%;
  position: relative;
  overflow: hidden;
  transition: background 2s ease-in-out;
  background-attachment: fixed;
  background-image: url(${starsImage});
  background-color: ${({colors}) => colors.dark};
  background-blend-mode: screen;
`;

const WaterDiv = styled.div`
  height: 40%;
  background: ${blue};
  position: relative;
  @media (max-width: 768px) {
    height: 50%;
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
  width: 160px;
  height: 160px;
  border-radius: 50%;
  transition: all 2s ease-in-out;
  filter: blur(1px) drop-shadow(0 0 20px ${({colors}) => colors.light});
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

const MoonImg = styled.img`
  width: 160px;
  height: 160px;
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
      <SkyDiv colors={palettes[currentIndex]}>
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
