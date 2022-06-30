import React from "react";
import FooterLinks from "../FooterLinks/FooterLinks";
import FooterLogos from "../FooterLogos/FooterLogos";
import PropTypes from "prop-types";

const Footer = ({ childRef }) => {
  return (
    <footer id="footer" ref={childRef} tabIndex={-1}>
      <FooterLogos />
      <FooterLinks />
    </footer>
  );
};

Footer.propTypes = {
  childRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

Footer.defaultProps = {};

export default Footer;
