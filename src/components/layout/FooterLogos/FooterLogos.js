import React from "react";
import { ReactComponent as Logo } from "../../../assets/images/dt-logo.svg";
import "./FooterLogos.css";

const FooterLogos = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="footer_logoteam">
            <div className="pull-left footer_logo_img">
              <a href="https://teamdigitale.governo.it">
                <Logo
                  className="img-fluid img-logo-header-normal d-inline-block align-top p-2 rounded"
                  alt="Logo"
                  title="Logo"
                  width="78"
                  height="78"
                />
              </a>
            </div>
            <div className="footer_logo_string">
              <a
                href="https://teamdigitale.governo.it"
                className="footer_logo_blue"
              >
                <span className="footer_logo_string_main">DIPARTIMENTO</span>
                <div>PER LA TRASFORMAZIONE DIGITALE</div>
              </a>
            </div>
          </div>
        </div>

        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="footer_logogov">
            <div className="pull-left footer_logo_img">
              <a href="http://www.governo.it" className="">
                <img
                  className="istat-logo"
                  src="Logo-Istat-SCARICATO.jpeg"
                  alt="Logo"
                  title="Logo"
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
