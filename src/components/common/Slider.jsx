import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Box } from "@material-ui/core";

const SliderSection = styled.section`
  height: inherit;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

const ImageSlide = styled.div`
  z-index: 1;
  width: 100%;
  position: absolute;
  height: inherit;
`;

const ImageSlider = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const slideIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const SlideImage = styled.img`
  height: inherit;
  width: 100%;
  animation: ${slideIn} 1s;
`;

const InfoContainer = styled.div`
  position: absolute;
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #fff;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const SlideContent = styled.div`
  margin: auto;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: clamp(3rem, 8vw, 6rem);
    font-family: Julius Sans One, sans-serif;
    text-transform: capitalize;
    text-align: center;
    font-weight: 300;
  }
  p {
    margin-top: 8px;
    font-size: clamp(1rem, 8vw, 1.25rem);
    font-family: Julius Sans One, sans-serif;
    text-transform: capitalize;
    text-align: center;
    font-weight: 300;
  }
`;

const ButtonStyle = styled.button`
  color: #000 !important;
  background: #0288d1;
  padding: 0.25em 1em;
  border-radius: 3px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  margin: 1em;
  font-size: 1em;
  width: 100px;
  &:hover {
    background: #448aff;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 0px 90px #0288d1;
    -moz-box-shadow: 0px 0px 90px #0288d1;
    box-shadow: 0px 4px 10px #0288d1;
    transition: all 0.4s ease 0s;
  }
`;

const Slider = ({ sliderData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeOut = useRef(null);
  useEffect(() => {
    const nextSlide = () => {
      setCurrentSlide((current) =>
        current === sliderData.length - 1 ? 0 : current + 1
      );
    };
    timeOut.current = setTimeout(nextSlide, 3000);
    return function () {
      if (timeOut.current) {
        clearTimeout(timeOut.current);
      }
    };
  }, [currentSlide, sliderData.length]);

  return (
    <SliderSection>
      <ImageSlide>
        {sliderData.map((slide, idx) => {
          return (
            idx === currentSlide && (
              <ImageSlider
                key={idx}
                className={idx === currentSlide ? "slide active" : "slide"}
              >
                <SlideImage src={slide.image} alt={slide.alt} />
              </ImageSlider>
            )
          );
        })}
        <InfoContainer>
          <SlideContent>
            <p>Fossil interiors</p>
            <h1>Title</h1>
            <h2
              style={{
                fontVariant: "small-caps",
                fontFamily: "Julius Sans One, sans-serif",
                fontSize: `clamp(0.75rem, 3vw, 1.25rem)`,
              }}
            >
              Adding Value To Your Property & All That You Dream
            </h2>
            <Box display="flex" my={2}>
              {/* <ButtonStyle
                onClick={() => {
                  console.log("wertyu");
                }}
              >
                Queries?
              </ButtonStyle> 
              <Box mx={2} />
              */}
              <ButtonStyle
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://wa.me/message/2LGJ63MFXDGGD1");
                }}
              >
                Contact
              </ButtonStyle>
            </Box>
          </SlideContent>
        </InfoContainer>
      </ImageSlide>
    </SliderSection>
  );
};

export default Slider;
