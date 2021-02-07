import React from "react";
import styled from "styled-components";
import { FiInstagram, FiFacebook, FiYoutube, FiTwitter } from "react-icons/fi";
import { Typography, Box } from "@material-ui/core";
import logo from "../../media/images/FILogo.png";
import { Link } from "react-scroll";

const FooterSection = styled.div`
  padding: 80px 60px 20px 60px;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  @media (max-width: 1000px) {
    padding: 70px 30px 20px 30px;
  }
`;

const NavList = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const NavLinks = styled(Link)`
  display: flex;
  color: #fff;
  text-decoration: none;
  align-items: center;
  padding: 8px 2px;
  font-size: 15px;
  font-weight: 600;
  height: max-content;
  cursor: pointer;
`;

const BrandLogo = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BrandImage = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
`;

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const FooterRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  margin-bottom: 12px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  text-decoration: none;

  font-size: 15px;
  font-weight: 600;
  height: max-content;
`;
const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Footer = () => {
  return (
    <FooterSection id="footer">
      <FooterWrapper>
        <FooterRow>
          <FooterColumn>
            <BrandLogo to="/">
              <BrandImage src={logo} alt="brand Logo" />
            </BrandLogo>
          </FooterColumn>
          <FooterColumn>
            <Typography
              variant="body1"
              style={{
                fontWeight: 900,
                borderBottom: "1px",
                borderBottomStyle: "solid",
              }}
            >
              COMPANY
            </Typography>
            <NavList>
              <NavLinks to="home" spy={true} smooth={true} duration={1000}>
                <Typography variant="body2">Home</Typography>
              </NavLinks>
              <NavLinks to="about" spy={true} smooth={true} duration={1000}>
                <Typography variant="body2">About</Typography>
              </NavLinks>
              <NavLinks to="services" spy={true} smooth={true} duration={1000}>
                <Typography variant="body2">Services</Typography>
              </NavLinks>
              <NavLinks
                to="how-it-works"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <Typography variant="body2">How it works</Typography>
              </NavLinks>
              <NavLinks
                to="contact-us"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <Typography variant="body2">Contact us</Typography>
              </NavLinks>
            </NavList>
          </FooterColumn>
          <FooterColumn>
            <Typography
              variant="body1"
              style={{
                fontWeight: 900,
                borderBottom: "1px",
                borderBottomStyle: "solid",
              }}
            >
              CONNECT
            </Typography>
            <Box mb={2} />
            <FooterLink href="#">
              <Box display="flex">
                <FiFacebook color="#4267B2" />
                <Box mr={1} />
                <Typography variant="body2">on Facebook</Typography>
              </Box>
            </FooterLink>
            <FooterLink href="#">
              <Box display="flex">
                <FiInstagram color="#DD2A7B" />
                <Box mr={1} />
                <Typography variant="body2">on Instagram</Typography>
              </Box>
            </FooterLink>
            <FooterLink href="#">
              <Box display="flex">
                <FiYoutube color="#FF0000" />
                <Box mr={1} />
                <Typography variant="body2">on YouTube</Typography>
              </Box>
            </FooterLink>
            <FooterLink href="#">
              <Box display="flex">
                <FiTwitter color="#00acee" />
                <Box mr={1} />
                <Typography variant="body2">on Twitter</Typography>
              </Box>
            </FooterLink>
          </FooterColumn>
        </FooterRow>
        <Box
          mt={2}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography variant="subtitle2">
            Copyright 2021 Fossil Interiors, All Rights Reserved
          </Typography>
          <FooterLink href="#">
            <Typography variant="subtitle2">Privacy Policy</Typography>
          </FooterLink>
        </Box>
      </FooterWrapper>
    </FooterSection>
  );
};

export default Footer;
