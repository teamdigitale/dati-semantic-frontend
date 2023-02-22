import React from "react";
import { ReactComponent as Logo } from "../../../assets/images/dt-logo.svg";
import { Link } from "react-router-dom";
import "./HeaderMainTitle.css";

const siteTitle = "Schema";
const siteTagLine = "Il catalogo nazionale della semantica dei dati";

const HeaderMainTitle = () => (
  <div className="it-header-center-wrapper py-3 header-h">
    <div className="container-fluid px-lg-2">
      <div className="row">
        <div className="col-12">
          <div className="it-header-center-content-wrapper">
            <div className="it-brand-wrapper">
              <Link
                to="/"
                className="focus-element"
                aria-label="(s schema il catalogo nazionale della semantica dei dati) - Vai alla home"
              >
                <div className="row mx-0">
                  <div className="col-md-2">
                    <Logo
                      className="img-fluid img-logo-header-normal d-inline-block align-top p-1 rounded"
                      alt=""
                      title="Home"
                      width="78"
                      height="78"
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="it-brand-text">
                      <h2 className="h3">{siteTitle}</h2>
                      <h3 className="small">{siteTagLine}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

HeaderMainTitle.propTypes = {};

HeaderMainTitle.defaultProps = {};

export default HeaderMainTitle;
