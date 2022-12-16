
// highly configured- verify again

import { Typography } from "@mui/material";
import React from "react";
import "./AboutStyle.css";
import me from "../../images/myself.svg";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>
          “If we did all the things we were capable of, we would astound
          ourselves”
          <Typography>– Thomas Edison, inventor</Typography>
        </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={me} alt="no" srcset="" className="aboutAvatar" />

          <Typography variant="h4" style={{ margin: "1mvax 0", color: "blue" }}>
            Sushant Kumar Prusty
          </Typography>
          <Typography variant="h6" style={{ margin: "1mvax 0", color: "red" }}>
            Full Stack Developer
          </Typography>
          <Typography>Let's solve problems, together!</Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            Seasoned, forward-looking Software Developer with 15+ years'
            experience in creating and executing innovative software solutions
            to enhance business productivity. Highly experienced in all aspects
            of the software development lifecycle and end-to-end project
            management, from concept through to development and delivery.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
