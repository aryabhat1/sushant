import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey there, I am skilled and experienced software developer with 15 +
          years of Experience in Web Application Development. Currently,
          associated with two start-ups and focussing on technologies like
          blockchain and metaverse.
        </Typography>

        <Link to="/contact" className="footerContactBtn">
          <Typography>Service Contact</Typography>
        </Link>
      </div>

      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="http://github.com/aryabhat1/" target="blank">
          <BsGithub />
        </a>

        <a href="http://twitter.com/sushant_prusty/" target="blank">
          <BsTwitter />
        </a>

        <a href="http://linkedin.com/en/sushant-prusty/" target="blank">
          <BsLinkedin />
        </a>

        {/* <a href="http://lens.protocol/aryabhat1/" target="blank">
          <BsGithub />
        </a> */}
      </div>
    </div>
  );
};

export default Footer;
