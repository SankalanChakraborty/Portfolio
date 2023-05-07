import React from "react";
import "./Contact.css";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <div className="contact-page__wrapper">
      <Navbar />
      <div className="hero-section">
        <h1>Contact Me</h1>
      </div>
      <form className="contact-form" action="">
        <div className="name">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" />
        </div>
        <div className="email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="subject">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" />
        </div>
        <div className="message">
          <label htmlFor="message">Message</label>
          <textarea
            type="text"
            id="message"
            placeholder="Your message here"
            rows="10"
            cols="50"
          />
        </div>
        <div className="submit-button">
          <button className="btn btn-submit">Submit</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
