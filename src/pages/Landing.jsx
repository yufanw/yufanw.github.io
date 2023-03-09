import React from 'react';
import styled from 'styled-components';
import { blackish, coral, gray1 } from '../common/colors';
import Sun from '../components/Sun';

const RelativeDiv = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background: ${blackish};
`;

const ArtDiv = styled.div`
  height: 500px;
  max-width: 700px;
  position: relative;
  padding: 20px;
`;

const H1 = styled.h1`
  font-size: 32px;
  letter-spacing: 8px;
  padding: 20px;
  margin: 0;
`;

const ContentDiv = styled.div`
  padding: 0 20px;
  margin: 0;
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
  margin-bottom: 20px;
  height: 1px;
`;

const BottomDiv = styled.div`
  padding-bottom: 100px;
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
      <BottomDiv>
        <ContentDiv>
          I build web applications, 
          mostly in React and Typescript 
        </ContentDiv>
        <DividerDiv />
        <DividerDiv />
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
      </BottomDiv>
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
