import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import logo from "../../media/images/logo.png";
import SideBar from "./SideBar";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
// import { Link } from 'react-scroll';

const MediaLinkSection = styled.div`
  display: flex;
  position: fixed;
  justify-content: space-between;
  z-index: 2;
  color: #f4eee1;
  top: 50%;
  left: 0%;
  flex-direction: column;

  &.active {
    background: #f4eee1;
    box-shadow: 0px 5px 10px rgba(163, 177, 198, 0.6);
  }
`;

const MediaLink = styled(Link)`
  padding: 4px;
`;

const SocialMediaLinks = () => {
  return (
    <MediaLinkSection>
      <MediaLink to="https://ui8-collab.herokuapp.com/#" target="_blank">
        <FaFacebook size={30} color="#4267B2" />
      </MediaLink>
      <MediaLink to="https://www.instagram.com/" target="_blank">
        <AiFillInstagram size={30} color="#DD2A7B" />
      </MediaLink>
    </MediaLinkSection>
  );
};

export default SocialMediaLinks;
