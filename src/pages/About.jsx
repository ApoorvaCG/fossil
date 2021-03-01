import { Container, Box } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import coffeeBreak from "../media/svg/think.gif";
import { deviceSizes } from "../scripts/constants";

const AboutDiv = styled.div`
  height: 120vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media ${deviceSizes.mobileS} {
    height: calc(100vh - 120%);
  }
`;
/* 
  background-color: #fdfdfd;

  @media ${deviceSizes.tablet} {
    min-height: 70vh;
    max-height: 100vh;
  }
  @media ${deviceSizes.laptop} {
    min-height: 70vh;
    max-height: 100vh;
  }
*/
const AboutSection = styled.section`
  margin: 2rem 1rem 2rem 1rem;
  padding: 24px;
  @media ${deviceSizes.mobileS} {
    padding: 0px;
  }
`;

const AboutTitle = styled.h1`
  padding: 1rem;
  font-family: "DM Sans", sans-serif;
  text-align: center;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.025em;
  font-size: clamp(2rem, 8vw, 4rem);
  text-transform: capitalize;
`;

const AboutText = styled.p`
  margin: 8px 20px;
  padding-top: 8px;
  font-size: 20px;
  font-family: "DM Sans", sans-serif;
  text-align: left;
  font-weight: 400;
  line-height: 1.6em;
  letter-spacing: 0.01em;
  display: flex;
  text-align: left;
`;
const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-gap: 20px;

  @media ${deviceSizes.mobileS} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 40px;
  }
  @media ${deviceSizes.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    grid-gap: 20px;
  }
  @media ${deviceSizes.laptop} {
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
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
      width: 30%;
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
              <img
                src={coffeeBreak}
                alt="about-us"
                width="200px"
                height="200px"
              />
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
