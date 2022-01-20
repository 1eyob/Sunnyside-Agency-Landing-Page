import React from "react";
import styled from "styled-components";
import ImageTransform from "../images/desktop/image-transform.jpg";
import ImageStandOut from "../images/desktop/image-stand-out.jpg";
import ImageGraphic from "../images/desktop/image-graphic-design.jpg";
import ImagePhoto from "../images/desktop/image-photography.jpg";
const Container = styled.div`
  display: grid;
  grid-template-columns: 650px 700px;
  grid-template-rows: 600px 500px 500px;
  margin-top: -4px;
`;
const Text1 = styled.div`
  grid-row: 1;
  grid-column: 1;

  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;
const TextTitle = styled.h1``;
const Paragraph = styled.p`
  width: 70%;
  align-items: center;
`;
const Learn = styled.h2``;
const Image1 = styled.img.attrs({
  src: `${ImageTransform}`,
})`
  grid-row: 1;
  grid-column: 2;
`;

const Image2 = styled.img.attrs({
  src: `${ImageStandOut}`,
})`
  grid-row: 2;
  grid-column: 1;
  width: 100%;
  object-fit: cover;
  margin-right: 50px;
`;

const Text2 = styled.div`
  grid-row: 2;
  grid-column: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;
const Image3 = styled.img.attrs({
  src: `${ImageGraphic}`,
})`
  grid-row: 3;
  grid-column: 1;
  position: relative;
`;
const Image4 = styled.img.attrs({
  src: `${ImagePhoto}`,
})`
  grid-row: 3;
  grid-column: 2;
  position: Relative;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 350%;
  width: 50%;
`;
const Title = styled.h2``;
const Text = styled.p`
  width: 75%;
`;
const Info1 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 350%;
  left: 60%;
`;

const Gallery = () => {
  return (
    <Container>
      <Text1>
        <TextTitle>Transform Your Brand</TextTitle>
        <Paragraph>
          we are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </Paragraph>
        <Learn>LEARN MORE</Learn>
      </Text1>
      <Image1 />
      <Image2 />
      <Text2>
        <TextTitle>Stand out to the Right audience </TextTitle>
        <Paragraph>
          Using a collaborative formula of designers, researchers,photographers,
          videographers, and copywriters. We'll build and extend your brand in
          digital places.
        </Paragraph>
        <Learn>LEARN MORE</Learn>
      </Text2>
      <Image3 />
      <Info>
        <Title>graphic Design</Title>
        <Text>
          great design makes you memorable. We deliver artwork that underscore
          your brand message and captures potential clients' attention
        </Text>
      </Info>
      <Image4 />
      <Info1>
        <Title>Photography</Title>
        <Text>
          Increase your credibility bt getting the most stunning, high quality
          photos that improve your business images{" "}
        </Text>
      </Info1>
    </Container>
  );
};

export default Gallery;
