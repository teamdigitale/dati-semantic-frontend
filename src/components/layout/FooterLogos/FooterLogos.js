import React from "react";
import { ReactComponent as Logo } from "../../../assets/images/dt-logo.svg";
import { ReactComponent as GovLogo } from "../../../assets/images/gov-logo.svg";
import "./FooterLogos.css";

const FooterLogos = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-xs-12">progetto di</div>
          <div className="col-md-3 col-sm-6 col-xs-12">
            con la collaborazione di
          </div>
        </div>
      </div>
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
                <a href="https://teamdigitale.governo.it" className="">
                  Team per la Trasformazione Digitale
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="footer_logogov">
              <div className="pull-left footer_logo_img">
                <a href="http://www.governo.it" className="">
                  <GovLogo
                    className="img-fluid img-logo-header-normal d-inline-block align-top p-2 rounded"
                    alt="Logo"
                    title="Logo"
                    width="78"
                    height="78"
                  />
                </a>
              </div>
              <div className="footer_logo_string">
                <a href="http://www.governo.it" className="">
                  Presidenza del Consiglio dei Ministri
                </a>
              </div>
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
