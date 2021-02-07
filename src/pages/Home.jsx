import { Box, Container } from "@material-ui/core";
import React from "react";
import Navbar from "../components/common/Navbar";
import Slider from "../components/common/Slider";
import { sliderData } from "../scripts/slider";
import About from "./About";
import styled from "styled-components";
import { FaExclamation } from "react-icons/fa";

const ImageSection = styled.section`
  border-radius:16px;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
      -9px -9px 16px rgba(255, 255, 255, 0.5),
       inset 3px 3px 7px rgba(136, 165, 191, 0.48), 
      inset -3px -3px 7px #FFFFFF;
  width: 100%;
`;

const HeroSection = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:100vh;

    @media screen and (max-width:768px){
      display:grid;
    }
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size:clamp(2rem, 10vw, 5rem);
  
  @media screen and (max-width:768px){
    width: 100%;
    z-index:-1;
  }
`
const TitleIntro = styled.p`
  margin-top:12px;
  font-size: clamp(1rem, 8vw, 1.25rem);
  font-family:'DM Sans', sans-serif;
  text-align: left;
  font-weight: 400;
  color: #1D1916;
  
  @media screen and (max-width:768px){
    text-align: center;
    margin
  }
`

const Title = styled.div` {
  font-family: 'DM Sans', sans-serif;
  text-align: left;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -.025em;
  
  @media screen and (max-width:768px){
    text-align: center;
  }
}`;

const Home = () => {
  return (
    <div id='home' style={{padding:'15px'}}>
      <Container  style={{height:'100vh'}}>
        <HeroSection>
          <TitleBox>
            <Title>
              <p>Adding </p>
              <p>Value to </p>
              <p>your Property
             <span><FaExclamation color='#ff7961'/></span> </p>
            </Title>
            <TitleIntro>
              A place where Ideas, Inspiration & Art infuse together from imagination to reality.
            </TitleIntro>
          </TitleBox>
          <ImageSection>
            <Slider sliderData={sliderData} />
          </ImageSection>
        </HeroSection>
      </Container>
    </div>
  );
}

export default Home;
