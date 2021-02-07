import React, { useState} from 'react'
import styled from 'styled-components';
// import { NavLink,Link } from 'react-router-dom'
import { CgMenuRightAlt } from "react-icons/cg";
import logo from '../../media/images/logo.png'
import SideBar from './SideBar';
import { MdClose } from "react-icons/md";
import { Link } from 'react-scroll';

const NavBarSection = styled.nav`
display:flex;
position:fixed;
justify-content:space-between;
width:100%;
z-index:2;

&.active{
    background:#f4eee1;
    box-shadow:0px 5px 10px rgba(163, 177, 198, 0.6)
}
`
const NavLeft = styled.div`
height:80px;
`

const NavRight = styled.div`
padding:16px 16px;
display:inline-flex;
height:80px;
`

const BrandLogo = styled(Link)`
    text-decoration:none;
    padding-left:22px;
`
const BrandImage = styled.img`
width:64px;
height:64px;
object-fit:cover;
margin-top:10px;
margin-left:25px;
`

const NavList = styled.div`
display:flex;
padding:16px;
align-items:center;

@media screen and (max-width:768px){
    display:none;
}`

const NavLinks = styled(Link)`
display: flex;
color: #1D1916;
text-decoration: none;
align-items: center;
padding: 8px 16px;
font-size: 15px;
font-weight: 600;
height: max-content;
cursor: pointer;

&.active{
    border-bottom: 2px solid #C9AA6A;
}
`//#343561 - blue
const MobileMenu = styled(CgMenuRightAlt)`
display:none;

@media screen and (max-width:768px){
    display:block;
    cursor:pointer;
    color:#1D1916;
    padding-right:8px;
    height:38px;
    width:38px
}
`
const SideBarClose = styled(MdClose)`
color:#000;
width:38px;
height:38px
`
const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
cursor:pointer;
display:none;

@media screen and (max-width:768px){
     display:block;
}
`


const NavbarStyled = styled.div`
  font-size: 24px;
  position: fixed;
  width: 100%;
  .header {
    background: black;
    padding: 40px;
    display: flex;
    justify-content: space-around;
    margin: 0;
    color: white;
    * {
      cursor: pointer;
    }
    .active {
      border-bottom: 1px solid white;
    }
  }

`;

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [navBarColor,setNavBarColor] = useState(false) 
    const handleSideBa = () => {
    setShowMenu(!showMenu);
    }
    const changeNavBackground = () => {
        console.log("YY->",window.scrollY)
        if (window.scrollY >= 80) {
            setNavBarColor(true);
        } else {
            setNavBarColor(false);
        }
    }
    window.addEventListener('scroll', changeNavBackground)

    return (
        <NavBarSection className={navBarColor ? 'active':''}>
            <NavLeft>
            <BrandLogo to='/'>
                <BrandImage src={logo} alt="brand Logo"/>
                </BrandLogo>
            </NavLeft>
            <NavRight>
                <NavList> 
                    <NavLinks activeClass='active' to="home" spy={true} smooth={true} duration={1000}>
                        Home</NavLinks>
                    <NavLinks to="about" spy={true} smooth={true} duration={1000}>About</NavLinks>
                    <NavLinks to="services" spy={true} smooth={true} duration={1000}>Services</NavLinks>
                    <NavLinks to="contact-us" spy={true} smooth={true} duration={1000}>Contact us</NavLinks>
                </NavList>
                {!showMenu ? <MobileMenu onClick={() => handleSideBa()} /> : ( 
                    <Icon>
                        <SideBarClose onClick={() => handleSideBa()} />
                        <SideBar/>
                    </Icon>
                    )}
                </NavRight>
        </NavBarSection>
    )
}

export default Navbar
