import React from "react";
import "./FooterLinks.css";

const FooterLinks = () => {
  return (
    <div className="container">
      <div className="row">
        <ul className="col-xs-12 footer_links clearfix">
          <li>
            <a href="#" title="Note Legali">
              Note Legali
            </a>
          </li>
          <li>
            <a href="#" title="Privacy Policy">
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

FooterLinks.propTypes = {};

FooterLinks.defaultProps = {};

export default FooterLinks;
