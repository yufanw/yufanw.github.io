import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import {
  blackish,
  gray6,
  gray5,
  gray4,
  gray3,
  gray2,
  gray1,
  gray0,
  coral,
  beige,
  teal,
  blue,
  navy,
} from '../colors';

const colors = [
  blackish,
  gray6,
  gray5,
  gray4,
  gray3,
  gray2,
  gray1,
  gray0,
  coral,
  beige,
  teal,
  blue,
  navy,
];

const pop = keyframes`
  0% {
    transform: translateZ(0) translateY(0);
  }
  100% {
    transform: translateZ(50px) translateY(-12px);
  }
`;


const bounce = keyframes`
  0%   { transform: scale(1,1)      translateY(0); }
  10%  { transform: scale(1.1,.9)   translateY(0); }
  30%  { transform: scale(.9,1.1)   translateY(-15px); }
  50%  { transform: scale(1.05,.95) translateY(0); }
  57%  { transform: scale(1,1)      translateY(-7px); }
  64%  { transform: scale(1,1)      translateY(0); }
  100% { transform: scale(1,1)      translateY(0); }
`;

const LayoutDiv = styled.div`
  min-height: 100vh;
  height: 100%;
  width: 100%;
  position: relative;
  ${(props) => {
    return `
      background: ${props.color};
    `;
  }}
`;

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: calc(100vh - 52px);
  background: inherit;
`;

const TextSpan = styled.span`
  font-size: 32px;
  font-weight: 500;
  opacity: 0.8;
  margin: 25px 0;
  background: ${beige};
  border: 2px solid;
  padding: 3px 6px;
`;

const RandomButton = styled.button`
  border: 1px solid;
  font-size: 20px;
  background: ${navy};
  color: ${beige};
  padding: 8px 12px;
  cursor: pointer;
  &:hover {
    background: ${blackish};
    box-shadow: 
      5px 5px 0px 0px ${navy},
      10px 10px 0px 0px ${blue},
      15px 15px 0px 0px ${teal},
      20px 20px 0px 0px ${beige},
      25px 25px 0px 0px ${coral},
      0px -15px 50px -30px ${gray6};
  }
`;

const ColorDiv = styled.div`
  height: 50px;
  width: 50px;
  cursor: pointer;
  border: 1px solid transparent;
  ${({color}) => {
    return css`
      background: ${color};
    `;
  }}
  ${({selected}) => {
    if (selected) {
      return css`
        cursor: default;
        box-shadow: 0px 0px 10px -2px ${blue},
          0px 0px 12px -3px ${blackish},
          0px 0px 18px -6px ${beige};
        @media only screen and (min-width: 600px) {
          animation: ${bounce} 2s linear infinite;
        }
      `;
    }
    return css`
      &:hover {
        animation: ${pop} 0.3s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
      }
    `;
  }}
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
`;

function Layout({children}) {
  const [color, setColor] = useState('#ffffff');

  const randomize = () => {
    const randomInt = Math.floor(Math.random() * Math.floor(13));
    setColor(colors[randomInt]);
  };

  return (
    <LayoutDiv color={color}>
      <CenteredDiv>
        <TextSpan>
          2020 Yufan Wang
        </TextSpan>
        <RandomButton onClick={randomize}>
          Colorize
        </RandomButton>
      </CenteredDiv>
      <div>
        {children}
      </div>
      <Footer>
        <ColorDiv onClick={() => setColor(blackish)}
          color={blackish} selected={color === blackish} />
        <ColorDiv onClick={() => setColor(gray6)}
          color={gray6} selected={color === gray6} />
        <ColorDiv onClick={() => setColor(gray5)}
          color={gray5} selected={color === gray5} />
        <ColorDiv onClick={() => setColor(gray4)}
          color={gray4} selected={color === gray4} />
        <ColorDiv onClick={() => setColor(gray3)}
          color={gray3} selected={color === gray3} />
        <ColorDiv onClick={() => setColor(gray2)}
          color={gray2} selected={color === gray2} />
        <ColorDiv onClick={() => setColor(gray1)}
          color={gray1} selected={color === gray1} />
        <ColorDiv onClick={() => setColor(gray0)}
          color={gray0} selected={color === gray0} />
        <ColorDiv onClick={() => setColor(coral)}
          color={coral} selected={color === coral} />
        <ColorDiv onClick={() => setColor(beige)}
          color={beige} selected={color === beige} />
        <ColorDiv onClick={() => setColor(teal)}
          color={teal} selected={color === teal} />
        <ColorDiv onClick={() => setColor(blue)}
          color={blue} selected={color === blue} />
        <ColorDiv onClick={() => setColor(navy)}
          color={navy} selected={color === navy} />
      </Footer>
    </LayoutDiv>
  );
}

export default Layout;
