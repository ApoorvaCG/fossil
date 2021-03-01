import React from "react";
import Slider from "../components/common/Slider";
import { sliderData } from "../scripts/slider";
import styled from "styled-components";

const HeroSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 3.125rem;
    height: calc(100vh - 0rem);
  }
`;

const Home = () => {
  return (
    <div id="home">
      <HeroSection>
        <Slider sliderData={sliderData} />
      </HeroSection>
    </div>
  );
};

export default Home;
