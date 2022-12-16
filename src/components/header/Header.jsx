import React from "react";
import "./HeaderStyle.css";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../images/logo.png";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <ReactNavbar
      navColor1="white"
      navColor2="hsl(349, 100%, 50%)"
      navColor3="hsl(250, 70%, 55%)"
      navColor4="hsl(150, 100%, 75%)"
      burgerColor="hsl(250, 100%, 75%)"
      burgerColorHover="hsl(250, 100%, 75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/projects"
      link4Url="/contact"
      logoWidth="250px"
      link1ColorHover="white"
      //   link1Color="hsl(250, 100%, 75%)"
      link1Color="hsl(8, 36%, 36%, 1)"
      link1Size="1.5rem"
      link1Padding="3vmax"
      logo={logo}
      profileIcon={true}
      ProfileIconElement={FaUserAlt}
    />
  );
};

export default Header;
