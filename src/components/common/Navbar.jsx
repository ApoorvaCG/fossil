import React, { useState } from "react";
import styled from "styled-components";
import { CgMenuRightAlt } from "react-icons/cg";
import logo from "../../media/images/logo.png";
import SideBar from "./SideBar";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";
import { deviceSizes } from "../../scripts/constants";

const NavBarSection = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-between;
  width: 100%;
  z-index: 2;
  color: #fff;
  &.active {
    background: #f4eee1;
    color: #1d1916;
    box-shadow: 0px 5px 10px rgba(163, 177, 198, 0.6);
  }
`;
const NavLeft = styled.div`
  height: 80px;
`;

const NavRight = styled.div`
  padding: 16px 16px;
  display: inline-flex;
  height: 80px;
`;

const BrandLogo = styled(Link)`
  text-decoration: none;
  padding-left: 22px;
`;
const BrandImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  margin-top: 10px;
  margin-left: 25px;

  @media ${deviceSizes.laptop} {
    width: 78px;
    height: 78px;
  }
`;

const NavList = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  padding: 8px 16px;
  font-size: 15px;
  font-weight: 600;
  height: max-content;
  cursor: pointer;

  &.active {
    border-bottom: 2px solid #c9aa6a;
  }
`;

const MobileMenu = styled(CgMenuRightAlt)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    color: #1d1916;
    padding-right: 8px;
    height: 38px;
    width: 38px;
    font-weight: 900;
  }
`;
const SideBarClose = styled(MdClose)`
  color: #000;
  width: 38px;
  height: 38px;
`;
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [navBarColor, setNavBarColor] = useState(false);
  const handleSideBar = () => {
    setShowMenu(!showMenu);
  };
  const closeMenu = () => {
    setShowMenu(!showMenu);
  };
  const changeNavBackground = () => {
    if (window.scrollY >= 80) {
      setNavBarColor(true);
    } else {
      setNavBarColor(false);
    }
  };
  window.addEventListener("scroll", changeNavBackground);

  return (
    <NavBarSection className={navBarColor ? "active" : ""}>
      <NavLeft>
        <BrandLogo to="/">
          <BrandImage src={logo} alt="brand Logo" />
        </BrandLogo>
      </NavLeft>
      <NavRight>
        <NavList>
          <NavLinks activeClass="active" to="home" spy={true} duration={1000}>
            Home
          </NavLinks>
          <NavLinks to="services" spy={true}>
            Services
          </NavLinks>
          <NavLinks to="how-it-works" spy={true}>
            How it works
          </NavLinks>
          <NavLinks to="about" spy={true}>
            About
          </NavLinks>
          <NavLinks to="contact-us" spy={true}>
            Contact us
          </NavLinks>
        </NavList>
        {!showMenu ? (
          <MobileMenu onClick={() => handleSideBar()} />
        ) : (
          <Icon>
            <SideBarClose onClick={() => handleSideBar()} />
            <SideBar clsoeMenu={closeMenu} />
          </Icon>
        )}
      </NavRight>
    </NavBarSection>
  );
};

export default Navbar;
