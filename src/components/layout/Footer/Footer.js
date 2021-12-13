import React from "react";
import FooterLinks from "../FooterLinks/FooterLinks";
import FooterLogos from "../FooterLogos/FooterLogos";

const Footer = () => {
  return (
    <footer id="footer">
      <FooterLogos />
      <FooterLinks />
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
