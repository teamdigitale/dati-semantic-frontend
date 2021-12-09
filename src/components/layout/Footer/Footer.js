import React from "react";
import "./Footer.css";
import { ReactComponent as Logo } from "../../../assets/images/dt-logo.svg";
import { ReactComponent as GovLogo } from "../../../assets/images/gov-logo.svg";

const Footer = () => {
  return (
    <footer className="it-footer-wrapper" id="footer">
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
            <li>
              <a href="#" title="Dichiarazione di accessibilità">
                Dichiarazione di accessibilità
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
