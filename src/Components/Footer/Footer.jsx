import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="personal-details">
        <span className="address">
          <i className="fa-solid fa-house" />
          85 Chetla Road New Alipore Kolkata - 700053
        </span>
        <span className="mobile-number">
          <i className="fa-solid fa-phone" />
          +91 7439458891, +91 8697462819
        </span>
        <span className="email">
          <i className="fa-solid fa-envelope" />
          sankalanchakraborty.5@gmail.com
        </span>
      </div>
      <div className="social-links">
        <span className="linkedin">
          <a
            href="https://www.linkedin.com/in/sankalan-chakraborty-583297186?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqI6tEYjpTL6Fu5i%2BppJLvQ%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin" />
            LinkedIn Profile
          </a>
        </span>
        <span className="github">
          <a
            href="https://github.com/SankalanChakraborty"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github" />
            Github Profile
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
