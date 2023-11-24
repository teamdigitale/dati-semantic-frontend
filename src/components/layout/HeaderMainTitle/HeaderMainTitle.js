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
                  <div className="col-2" aria-hidden="true">
                    <Logo
                      className="img-fluid img-logo-header-normal d-inline-block align-top p-1 rounded"
                      alt=""
                      title="Home"
                      width="130"
                      height="130"
                    />
                  </div>
                  <div className="col-9 pagetitle">
                    <div className="it-brand-text">
                      <span role="heading" className="h2">
                        {siteTitle}
                      </span>
                      <span
                        role="heading"
                        className="d-block small"
                        style={{ marginTop: "-3px" }}
                      >
                        {siteTagLine}
                      </span>
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
