import React from "react";
import "./FooterLinks.css";

const FooterLinks = () => {
  return (
    <div className="footer_links">
      <div className="container">
        <div className="row">
          <a
            className="nav-link bottom_label justify-content-center"
            href="#"
            title="Note Legali"
          >
            Note Legali
          </a>
          <a
            className="nav-link bottom_label justify-content-center"
            href="#"
            title="Privacy Policy"
          >
            Privacy Policy
          </a>
          <a
            className="nav-link bottom_label justify-content-center"
            href="#"
            title="Dichiarazione di Accessibilità"
          >
            Dichiarazione di Accessibilità
          </a>
        </div>
      </div>
    </div>
  );
};

FooterLinks.propTypes = {};

FooterLinks.defaultProps = {};

export default FooterLinks;
