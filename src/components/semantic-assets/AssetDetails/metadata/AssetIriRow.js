/* eslint-disable prettier/prettier */
import sprite from "../../../../assets/images/sprite.svg";
import * as PropTypes from "prop-types";
import React from "react";
import rowStyle from "../metadata/MetadataRow.module.css";

const AssetIriRow = (props) => {
  const url = props.assetIri;
  const handleClick = (event) => {
    event.preventDefault();
    fetch(url, {
      headers: {
        Accept: "text/html",
        Origin: "*",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          window.open(url);
        } else {
          window.location.href = "/error";
        }
      })
      .catch(() => {
        console.log("error");
        window.location.href = "/error";
      });
  };

  return (
    <div className="row" data-testid="asset-iri-row">
      <div className={"col-3 strong "}>
        <h3 className={"strong " + rowStyle.propertyName}>URI</h3>
      </div>
      <div className="col-8">
        <div className={"text-monospace " + rowStyle.propertyLink}>
          <a
            // href={props.assetIri}
            onClick={handleClick}
            target="_blank"
            rel="noreferrer"
            className={rowStyle.assetLink}
            style={{ cursor: "pointer" }}
          >
            {props.assetIri}
          </a>
        </div>
      </div>
      <div className="col-1">
        <a
          // href={props.assetIri}
          aria-label="Vai all'URI dell'asset (si apre in un'altra scheda)"
          className="btn btn-sm pt-0"
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
  );
};

AssetIriRow.propTypes = {
  assetIri: PropTypes.string.isRequired,
};

export default AssetIriRow;
