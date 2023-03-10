import React from 'react';
import styled from 'styled-components';
import {
  blackish,
  blue,
  gray0,
  gray1,
  gray6,
} from '../common/colors';
import Card from '../components/Card';
import Sun from '../components/Sun';
import subjectImage from '../assets/subject.png';
import buildopsImage from '../assets/buildops.png';
import gociousImage from '../assets/gocious.png';

const RelativeDiv = styled.div`
  position: relative;
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
`;

const ArtDiv = styled.div`
  height: 620px;
  position: relative;
  box-shadow: ${blackish} 0px 2px 4px 0px, ${blackish} 0px 2px 16px 0px;
  @media (max-width: 768px) {
    height: 660px;
  }
`;

const H1 = styled.h1`
  font-size: 38px;
  margin: 0;
  padding: 10px 0;
`;

const H4 = styled.h4`
  font-size: 22px;
  font-weight: 400;
  margin: 0;
  padding: 6px 0;
`;

const ContentDiv = styled.div`
  margin: 0;
`;

const DividerLine = styled.div`
  border-bottom: 1px solid ${gray6};
`;

const SignatureDiv = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  letter-spacing: 2px;
  padding: 5px 10px;
  color: ${gray1};
  font-size: 14px;
  opacity: 0.8;
`;

const SocialAnchor = styled.a`
  color: ${gray1};
  text-decoration: none;
  /* Style all font awesome icons */
  &.fa {
    padding: 20px;
    font-size: 20px;
    width: 20px;
    text-align: center;
    text-decoration: none;
    border-radius: 50%;
    transition: 0.3s ease-in;
    &.fa-github {
      background: ${blackish};
      color: ${gray0};
    }
    &.fa-linkedin {
      background: ${blue};
      color: ${gray0};
    }
    &.fa-envelope {
      background: ${gray6};
      color: ${gray0};
    }
    :hover {
      border-radius: 5px;
    }
  }
`;

const DividerDiv = styled.div`
  padding-bottom: 20px;
  height: 1px;
`;

const TallDividerDiv = styled.div`
  padding-bottom: 40px;
  height: 1px;
`;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  grid-gap: 20px;
`;

const InlineDiv = styled.div`
  display: inline-flex;
  gap: 10px;
`;

const PositionedDiv = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 0 20px;
`;

function Landing() {
  const year = new Date().getFullYear();
  return (
    <RelativeDiv>
      <ArtDiv>
        <Sun />
        <PositionedDiv>
          <H1>Yufan Wang</H1>
          <H4>I build web applications, mostly in React and Typescript</H4>
          <DividerDiv />
          <InlineDiv>
            <SocialAnchor
              href="https://www.github.com/yufanw/"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="fa fa-github"
            />
            <SocialAnchor
              href="https://www.linkedin.com/in/yufan-wang-web/"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="fa fa-linkedin"
            />
            <SocialAnchor
              href="mailto:yufansmail@gmail.com"
              rel="noopener noreferrer nofollow"
              target="_blank"
              className="fa fa-envelope"
            />
          </InlineDiv>
          <TallDividerDiv />
        </PositionedDiv>
      </ArtDiv>
      <TallDividerDiv />
      <DividerLine />
      <TallDividerDiv />
      <DividerDiv />
      <GridDiv>
        <ContentDiv>
          <Card
            link="https://buildops.com"
            title="BuildOps"
            image={buildopsImage}
          >
            Cloud-based Operational Platform for commercial contractors
          </Card>
        </ContentDiv>
        <ContentDiv>
          <Card link="https://subject.com" title="Subject" image={subjectImage}>
            Accredited LMS for high schools and districts to accelerate learning
          </Card>
        </ContentDiv>
        <ContentDiv>
          <Card link="https://gocious.com" title="Gocious" image={gociousImage}>
            Product Roadmap Management for manufacturers
          </Card>
        </ContentDiv>
      </GridDiv>
      <TallDividerDiv />
      <TallDividerDiv />
      <SignatureDiv>(c) yufan wang {year}</SignatureDiv>
    </RelativeDiv>
  );
}

export default Landing;
