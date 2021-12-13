import React from "react";
import { ReactComponent as Logo } from "../../../assets/images/dipartimento.svg";
import IstatLogo from "../../../assets/images/istat-logo.gif";
import "./FooterLogos.css";

const FooterLogos = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="footer_logoteam">
            <div className="footer_logo_img">
              <a href="https://teamdigitale.governo.it">
                <Logo
                  className="img-fluid img-logo-header-normal d-inline-block align-top p-2 rounded"
                  alt="Logo"
                  title="Logo"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="footer_logogov">
            <div className="footer_logo_img">
              <a href="https://teamdigitale.governo.it/" className="">
                <img
                  className="istat-logo"
                  src={IstatLogo}
                  alt="ISTAT Logo"
                  title="ISTAT Logo"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FooterLogos.propTypes = {};

FooterLogos.defaultProps = {};

export default FooterLogos;
