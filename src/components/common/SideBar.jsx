import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const SideBarContainer = styled.div`
  position: fixed;
  z-index: 999;
  margin-top: 80px;
  width: 100%;
  height: 100%;
  background: #000;
  padding: 16px 28px;
  display: flex;
  align-items: center;
  color: #fff;
  opacity: 1;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10.5px);
  -webkit-backdrop-filter: blur(10.5px);
`;
const SideBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
const SideBarMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
const SideBarItem = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  &.active {
    background: rgba(232, 213, 213, 0.1);
    padding: 9px 18px;
    border-radius: 4px;
  }

  &:hover {
    color: #c9aa6a;
  }
`;

const SideBar = ({ clsoeMenu }) => {
  return (
    <SideBarContainer>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarItem to="home" exact onClick={() => clsoeMenu()}>
            Home
          </SideBarItem>
          <SideBarItem to="about" exact onClick={() => clsoeMenu()}>
            About
          </SideBarItem>
          <SideBarItem to="services" exact onClick={() => clsoeMenu()}>
            services
          </SideBarItem>
          <SideBarItem to="how-it-works" exact onClick={() => clsoeMenu()}>
            How it works
          </SideBarItem>
          <SideBarItem to="contact-us" exact onClick={() => clsoeMenu()}>
            contact us
          </SideBarItem>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
