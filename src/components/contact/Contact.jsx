
// verify again
import React from "react";
import { useState } from "react";
import "./ContactStyle.css";
import { Button, Typography } from "@mui/material";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactFormHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form action="" className="contactContainerForm" onSubmit={contactFormHandler}>
          <Typography variant="h4">Contact Us</Typography>

          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name=""
            id=""
            placeholder="Email" value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message" value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
      Contact
    </div>
  );
};

export default Contact;
