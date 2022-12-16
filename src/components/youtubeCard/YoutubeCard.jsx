import React from "react";
import "./YoutubeCardStyle.css";
import { Typography } from "@mui/material";
import image from '../../images/youtube1.jpg';

const YoutubeCard = ({
  url = "https://www.youtube.com/@aryabhat_online",
  title = "Galaxy of Metaverse",
  image,
}) => {

  return (
  <div className="youtubeCard">
    <a href={url} target="blank">
        <img src={image} alt="video" srcset="" />
        <Typography>{title}</Typography>
    </a>
    
    </div>
  )
    ;
};

export default YoutubeCard;
