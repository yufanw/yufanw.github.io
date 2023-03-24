import React from 'react';
import styled from 'styled-components';
import { blackish, gray0, gray6, gray7, coral } from '../common/colors';

const CardDiv = styled.div`
  background: linear-gradient(to right bottom, ${blackish}, ${gray6} 92%);
  max-width: 980px;
  display: flex;
  flex-flow: column;
  box-shadow: ${blackish} 0px 2px 4px 0px, ${blackish} 0px 2px 16px 0px;
  padding-bottom: 20px;
`;

const AnchorDiv = styled.div`
  width: 160px;
  position: relative;
  display: flex;
  align-items: center;
  color: ${gray0};
  text-decoration: none;
  font-size: 16px;
  background: ${gray7};
  border-radius: 6px;
  border: 2px solid ${gray7};
  box-sizing: border-box;
  overflow: hidden;
  .fa {
    box-sizing: border-box;
    padding: 8px;
    text-align: center;
  }
  :hover {
    color: #fff;
    .fa {
      background: ${gray0};
      color: ${coral};
    }
  }
`;

const GrowSpan = styled.span`
  flex-grow: 1;
  text-align: center;
`;

const CardAnchor = styled.a`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const CardImg = styled.img`
  max-width: 100%;
  height: 300px;
  object-fit: cover;
`;

const CardContentDiv = styled.div`
  padding: 10px 20px;
`;

const RightAlignDiv = styled.div`
  display: flex;
  justify-content: flex-end;
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
      <H2>{title}</H2>
    </CardContentDiv>
    <CardContentDiv>{children}</CardContentDiv>
    <RightAlignDiv>
      <CardContentDiv>
        <AnchorDiv>
          <CardAnchor
            href={link}
            rel="noopener noreferrer nofollow"
            target="_blank"
          />
          <GrowSpan>Visit</GrowSpan>
          <span className="fa fa-rocket"></span>
        </AnchorDiv>
      </CardContentDiv>
    </RightAlignDiv>
  </CardDiv>
);

export default Card;
