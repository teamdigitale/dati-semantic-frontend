import sprite from "../../../../assets/images/sprite.svg";
import * as PropTypes from "prop-types";
import React from "react";
import { baseUrl } from "../../../../services/fetchUtils";
import rowStyle from "../metadata/MetadataRow.module.css";

const AssetIriRow = (props) => {
  const url = props.assetIri;
  const handleClick = (event) => {
    event.preventDefault();

    fetch(`${baseUrl()}/check-url?url=${url}`)
      .then((response) => {
        if (response.status < 400) {
          window.open(url);
        } else {
          window.open("/error-page", "_self");
        }
      })
      .catch(() => {
        window.open("/error-page", "_self");
      });
  };

  const copyUrlToClipboard = () => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className={"row " + rowStyle.column} data-testid="asset-iri-row">
      <div className={"col-12 col-lg-3 strong "}>
        <h3 className={"strong " + rowStyle.propertyName}>URI</h3>
      </div>
      <div className="col-12 col-lg-9">
        <div className="row">
          <div
            className={
              "col-xl-10 col-8 font-monospace " + rowStyle.propertyLink
            }
          >
            <a
              onClick={handleClick}
              target="_blank"
              rel="noreferrer"
              className={rowStyle.assetLink}
              style={{
                textDecoration: "none",
                color: "inherit",
                pointerEvents: "none"
              }}
            >
              {url}
            </a>
          </div>
          <div className="col-xl-2 col-4 text-end">
            <a className="btn btn-sm pt-0 px-1" onClick={copyUrlToClipboard}>
              <svg className={" icon icon-sm icon-primary"} alt="copia URI">
                <use href={sprite + "#it-copy"}></use>
              </svg>{" "}
            </a>
            <a
              aria-label="Vai all'URI dell'asset (si apre in un'altra scheda)"
              className="btn btn-sm pt-0 px-1"
              href={sprite + "#it-external-link"}
              onClick={handleClick}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="icon icon-primary icon-sm"
                data-testid="external-link-icon"
              >
                <use href={sprite + "#it-external-link"} />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

AssetIriRow.propTypes = {
  assetIri: PropTypes.string.isRequired
};

export default AssetIriRow;
