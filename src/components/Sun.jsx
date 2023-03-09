import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { blue, palettes } from '../common/colors';

const CenteredDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  filter: brightness(60%);
`;

const LandDiv = styled.div`
  height: 60%;
  background: ${({colors}) => colors.midLight};
  transition: background 2s ease-in-out;
`;

const WaterDiv = styled.div`
  height: 40%;
  background: ${blue};
  width: 100%;
  z-index: 100;
  position: relative;
`;


const WaterColorDiv = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${blue};
  transition: background 1s ease-in-out;
`;


const SunDiv = styled.div`
  background: #FA9494;
  width: 160px;
  height: 160px:
  min-width: 160px;
  min-height: 160px;
  border-radius: 50%;
`;

const SunPositionDiv = styled.div`
  height: 160px;
  position: absolute;
  top: 40%;
  left: 28%;
`;

function Sun() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      selectColor();
    }, 2000);
    return () => clearInterval(interval);
  })

  const selectColor = () => {
    let index = currentIndex + 1;
    if (index >= palettes.length) {
      return setCurrentIndex(0);
    }
    setCurrentIndex(index);
  };

  return (
    <CenteredDiv onClick={selectColor}>
      <LandDiv colors={palettes[currentIndex]}>
        <SunPositionDiv>
          <SunDiv ></SunDiv>
        </SunPositionDiv>
      </LandDiv>
      <WaterDiv>
        <WaterColorDiv colors={palettes[currentIndex]}>
        </WaterColorDiv>
      </WaterDiv>
    </CenteredDiv>
  );
};

export default Sun;
