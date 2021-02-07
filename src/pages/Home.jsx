import { Box, Container } from "@material-ui/core";
import React from "react";
import Navbar from "../components/common/Navbar";
import Slider from "../components/common/Slider";
import { sliderData } from "../scripts/slider";
import About from "./About";
import styled from "styled-components";
import { FaExclamation } from "react-icons/fa";

const ImageSection = styled.section`
  border-radius: 16px;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5),
    inset 3px 3px 7px rgba(136, 165, 191, 0.48), inset -3px -3px 7px #ffffff;
  width: 100%;
`;

const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 3.125rem;
    height: calc(100vh - 15.625rem);
  }
`;

const TitleBox = styled.div`
  width: min(100%, 70.5rem);
  display: flex;
  flex-direction: column;
  font-size: clamp(2rem, 10vw, 5rem);

  @media screen and (max-width: 768px) {
    width: 100%;
    z-index: -1;
  }
`;
const TitleIntro = styled.p`
  margin-top: 2rem;
  font-size: clamp(1rem, 8vw, 1rem);
  font-family: "DM Sans", sans-serif;
  text-align: left;
  font-weight: 400;
  color: #1d1916;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin-top: 1rem;
  }
`;

const Title = styled.div`
   {
    font-family: "DM Sans", sans-serif;
    text-align: left;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.025em;

    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
`;

const Home = () => {
  return (
    <div id="home" style={{ padding: "15px" }}>
      <Container style={{ height: `calc(100vh - 70px)` }}>
        <HeroSection>
          <TitleBox>
            <Title>
              <p>Adding </p>
              <p>Value to </p>
              <p>
                your Property
                <span>
                  <FaExclamation color="#ff7961" />
                </span>{" "}
              </p>
            </Title>
            <TitleIntro>
              A place where Ideas, Inspiration & Art infuse together from
              imagination to reality.
            </TitleIntro>
          </TitleBox>
          <ImageSection>
            <Slider sliderData={sliderData} />
          </ImageSection>
        </HeroSection>
      </Container>
    </div>
  );
};

export default Home;
