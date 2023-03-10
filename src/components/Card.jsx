import React from 'react';
import styled from 'styled-components';
import {
  blackish,
  gray0,
  gray1,
  blue,
} from '../common/colors';

const CardDiv = styled.div`
  background: linear-gradient(to right bottom, ${blackish}, ${blue});
  max-width: 980px;
  display: flex;
  flex-flow: column;
  box-shadow: ${blackish} 0px 2px 4px 0px, ${blackish} 0px 2px 16px 0px;
`;

const CardAnchor = styled.a`
  --b: 1px;   /* border thickness */
  --s: .3em; /* size of the corner */
  --color: ${gray1}

  padding: calc(.2em + var(--s)) calc(.5em + var(--s));
  color: var(--color);
  --_p: var(--s);
  background:
    conic-gradient(from 90deg at var(--b) var(--b),#0000 90deg,var(--color) 0)
    var(--_p) var(--_p)/calc(100% - var(--b) - 2*var(--_p)) calc(100% - var(--b) - 2*var(--_p));
  transition: .3s linear, color 0s, background-color 0s;
  outline: var(--b) solid #0000;
  outline-offset: .6em;
  font-size: 16px;
  text-decoration: none;
  border: 0;
  user-select: none;
  :hover,
  :focus-visible {
    --_p: 0px;
    outline-color: var(--color);
    outline-offset: .01em;
  }
  :active {
    background: var(--color);
    color: #fff;
  }
`;

const CardImg = styled.img`
  max-width: 100%;
  height: 300px;
  object-fit: cover;
`;

const CardContentDiv = styled.div`
  margin: 10px 20px;
  color: ${gray1};
`;

const RightAlignDiv = styled.div`
  right: 0;
  bottom: 0;
  margin: 10px;
  text-align: right;
`;

const H2 = styled.h2`
  font-size: 26px;
  margin: 0;
  padding: 10px 0;
  color: ${gray0};
`;

const Card = ({ link, title, image, children }) => (
  <CardDiv>
    <CardImg src={image} />
    <CardContentDiv>
      <H2>
        {title}
      </H2>
    </CardContentDiv>
    <CardContentDiv>
      {children}
    </CardContentDiv>
    <RightAlignDiv>
      <CardContentDiv>
        <CardAnchor href={link} rel="noopener noreferrer nofollow" target="_blank">
          view
        </CardAnchor>
      </CardContentDiv>
    </RightAlignDiv>
  </CardDiv>
);

export default Card;