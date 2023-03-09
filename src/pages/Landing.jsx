import React from 'react';
import styled from 'styled-components';
import { blackish, coral, gray1, gray6 } from '../common/colors';
import Sun from '../components/Sun';

const RelativeDiv = styled.div`
  position: relative;
  padding: 20px;
`;

const ArtDiv = styled.div`
  height: 500px;
  max-width: 700px;
  position: relative;
  border: 10px groove ${gray6};
`;

const H1 = styled.h1`
  font-size: 36px;
  letter-spacing: 2px;
  margin: 0;
`;

const H4 = styled.h4`
  font-size: 24px;
  font-weight: 400;
  margin: 0;
`;

const ContentDiv = styled.div`
  margin: 0;
`;

const DividerLine = styled.div`
  border-bottom: 5px groove ${gray6};
`;

const SignatureDiv = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  letter-spacing: 2px;
  color: ${gray1};
  font-size: 14px;
  background: ${blackish};
  opacity: 0.8;
`;

const SocialAnchor = styled.a`
  color: ${gray1};
  text-decoration: none;
  font-size: 12px;
  :hover {
    color: ${coral};
    text-decoration: underline;
  }
`;

const LinkAnchor = styled.a`
  color: ${coral};
  text-decoration: none;
`;

const DividerDiv = styled.div`
  padding-bottom: 20px;
  height: 1px;
`;

const TallDividerDiv = styled.div`
  padding-bottom: 60px;
  height: 1px;
`;


function Landing() {
  const year = new Date().getFullYear();
  return (
    <RelativeDiv>
      <ArtDiv>
        <Sun />
      </ArtDiv>
      <H1>
        Yufan Wang
      </H1>
      <H4>
        I build web applications, 
        mostly in React and Typescript 
        <DividerLine />
      </H4>
      <TallDividerDiv />
      <ContentDiv>
        Software I've worked on:
      </ContentDiv>
      <DividerDiv />
      <ContentDiv>
        <LinkAnchor href="https://subject.com" rel="noopener noreferrer nofollow" target="_blank">
          * Subject
        </LinkAnchor>
        {' - '}
        📚 Accredited LMS for high schools and districts to accelerate learning
      </ContentDiv>
      <ContentDiv>
        <LinkAnchor href="https://buildops.com" rel="noopener noreferrer nofollow" target="_blank">
          * BuildOps
        </LinkAnchor>
        {' - '}
        📊 Cloud-based Operational Platform for commercial contractors
      </ContentDiv>
      <ContentDiv>
        <LinkAnchor href="https://gocious.com" rel="noopener noreferrer nofollow" target="_blank">
          * Gocious
        </LinkAnchor>
        {' - '}
          🛠 Product Roadmap Management for manufacturers
      </ContentDiv>
      <TallDividerDiv />
      <SignatureDiv>
        (c) yw {year}
        {' -'}
        <SocialAnchor href="https://www.linkedin.com/in/yufan-wang-web/" rel="noopener noreferrer nofollow">linkedin</SocialAnchor>
        {' -'}
        <SocialAnchor href="https://www.github.com/yufanw/" rel="noopener noreferrer nofollow">github</SocialAnchor>
      </SignatureDiv>
    </RelativeDiv>
  );
};

export default Landing;
