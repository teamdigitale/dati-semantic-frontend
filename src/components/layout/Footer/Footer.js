import React from "react";
import FooterLinks from "../FooterLinks/FooterLinks";
import FooterLogos from "../FooterLogos/FooterLogos";
import CookiePanel from "../CookiePanel/CookiePanel";
import Contribute from "../../common/Contribute/Contribute";

const Footer = () => {
  return (
    <footer id="footer">
      <Contribute />
      <FooterLogos />
      <FooterLinks />
      <CookiePanel />
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
