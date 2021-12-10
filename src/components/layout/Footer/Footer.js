import React from "react";
import "./Footer.css";
import FooterLinks from "../FooterLinks/FooterLinks";
import FooterLogos from "../FooterLogos/FooterLogos";

const Footer = () => {
  return (
    <footer className="it-footer-wrapper" id="footer">
      <FooterLogos />
      <FooterLinks />
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
