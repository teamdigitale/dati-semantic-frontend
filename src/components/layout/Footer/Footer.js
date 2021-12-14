import React from "react";
import FooterLinks from "../FooterLinks/FooterLinks";
import FooterLogos from "../FooterLogos/FooterLogos";
import CookiePanel from "../CookiePanel/CookiePanel";

const Footer = () => {
  return (
    <footer id="footer">
      <FooterLogos />
      <FooterLinks />
      <CookiePanel />
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
