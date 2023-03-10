import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { blue, palettes, navy, teal } from '../common/colors';

const CenteredDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const LandDiv = styled.div`
  height: 60%;
  background: ${({colors}) => colors.midLight};
  transition: background 1s ease-in-out;
`;

const WaterDiv = styled.div`
  height: 40%;
  background: ${blue};
  width: 100%;
  position: relative;
`;


const WaterColorDiv = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  background: ${blue};
  background: linear-gradient(178deg, ${teal} 0%, ${blue} 41%, ${navy} 92%);`;


const SunDiv = styled.div`
  background: ${({colors}) => colors.light};
  width: 160px;
  height: 160px:
  min-width: 160px;
  min-height: 160px;
  border-radius: 50%;
  transition: background 1s ease-in-out;
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
          <SunDiv colors={palettes[currentIndex]}/>
        </SunPositionDiv>
      </LandDiv>
      <WaterDiv>
        <WaterColorDiv colors={palettes[currentIndex]}/>
      </WaterDiv>
    </CenteredDiv>
  );
};

export default Sun;
