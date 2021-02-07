import { Container, Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import coffeeBreak from "../media/svg/coffeeBreak.svg";
import { deviceSizes } from "../scripts/constants";

const AboutDiv = styled.div`
  height: 110vh;
  background-color: #fdfdfd;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${deviceSizes.mobileS} {
    min-height: 150vh;
    max-height: 190vh;
  }
  @media ${deviceSizes.tablet} {
    min-height: 70vh;
    max-height: 100vh;
  }
  @media ${deviceSizes.laptop} {
    min-height: 70vh;
    max-height: 100vh;
  }
`;
const AboutSection = styled.section`
  margin: 0px 5px 20px 5px;
  padding: 24px;
  @media ${deviceSizes.mobileS} {
    padding: 0px;
  }
`;

const AboutTitle = styled.h1`
  padding: 16px;
  font-family: "DM Sans", sans-serif;
  text-align: center;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.025em;
  font-size: clamp(2rem, 8vw, 4rem);
`;

const AboutText = styled.p`
  margin: 8px 20px;
  padding-top: 8px;
  font-size: 16px;
  font-family: "DM Sans", sans-serif;
  text-align: left;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  display: flex;
  @media ${deviceSizes.mobileS} {
    text-align: center;
  }
  @media ${deviceSizes.laptop} {
    text-align: center;
  }
`;
const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
  }
  @media ${deviceSizes.mobileS} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 40px;
  }
  @media ${deviceSizes.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    grid-gap: 20px;
  }
  @media ${deviceSizes.laptop} {
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    grid-gap: 20px;
  }
`;

const AboutImage = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
  }
  @media ${deviceSizes.tablet} {
    img {
      width: 70%;
    }
  }
  @media ${deviceSizes.laptop} {
    img {
      width: 70%;
    }
  }
`;
const About = () => {
  return (
    <AboutDiv>
      <Container id="about">
        <AboutSection>
          <AboutTitle>who we are</AboutTitle>
          <Box mb={5} />
          <AboutWrapper>
            <AboutImage>
              <img src={coffeeBreak} alt="about-us" />
            </AboutImage>
            <AboutText>
              We believe that interior designing is all about imaginative &
              efficient use of light, space, color, pattern, texture and more to
              create a beautiful living which brings everyone a pleasant
              atmosphere. We are all set to provide a smart and easy day to day
              living for our clients. Share with us what you dream for and we
              will make a dream vision of yours come true in a reasonable price.
              We make sure that your space tells a story of who you are and, is
              a collection of what you love.
            </AboutText>
          </AboutWrapper>
        </AboutSection>
      </Container>
    </AboutDiv>
  );
};

export default About;
