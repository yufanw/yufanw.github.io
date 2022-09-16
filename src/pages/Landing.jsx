import React from 'react';
import styled from 'styled-components';
import { coral, gray1 } from '../common/colors';
import Sun from '../components/Sun';

const RelativeDiv = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const ArtDiv = styled.div`
  height: 500px;
  max-width: 700px;
  position: relative;
  padding: 20px;
`;

const NameH1 = styled.h1`
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
  z-index: 10000;
  bottom: 0px;
  right: 0px;
  letter-spacing: 2px;
  color: ${gray1};
  padding: 5px 5px 2px 5px;
  font-size: 14px;
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

function Landing() {
  const year = new Date().getFullYear();
  return (
    <RelativeDiv>
      <ArtDiv>
        <Sun />
      </ArtDiv>
      <NameH1>
        yufan wang
      </NameH1>
      <ContentDiv>
        senior engineer 
      </ContentDiv>
      <SignatureDiv>
        (c) yw {year} -
        <SocialAnchor href="https://www.linkedin.com/in/yufan-wang-web/" rel="noopener noreferrer nofollow">linkedin</SocialAnchor> -
        <SocialAnchor href="https://www.github.com/yufanw/" rel="noopener noreferrer nofollow">github</SocialAnchor>
      </SignatureDiv>
    </RelativeDiv>
  );
};

export default Landing;
