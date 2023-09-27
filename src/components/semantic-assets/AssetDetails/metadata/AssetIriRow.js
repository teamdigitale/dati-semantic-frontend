import sprite from "../../../../assets/images/sprite.svg";
import * as PropTypes from "prop-types";
import React from "react";
import rowStyle from "../metadata/MetadataRow.module.css";

const AssetIriRow = (props) => {
  const type = props.type;
  const url = props.assetIri;
  const handleClick = (event) => {
    if (type == "ONTOLOGY") {
      event.preventDefault();

      fetch(`https://schema.gov.it/lode/extract?url=${url}`)
        .then((response) => {
          if (response.status < 400) {
            window.open(url);
          } else {
            window.open("/error", "_self");
          }
        })
        .catch(() => {
          window.open("/error", "_self");
        });
    } else {
      window.open(url);
    }
  };

  return (
    <div className="row" data-testid="asset-iri-row">
      <div className={"col-3 strong "}>
        <h3 className={"strong " + rowStyle.propertyName}>URI</h3>
      </div>
      <div className="col-8">
        <div className={"font-monospace " + rowStyle.propertyLink}>
          <a
            onClick={handleClick}
            target="_blank"
            rel="noreferrer"
            className={rowStyle.assetLink}
          >
            {url}
          </a>
        </div>
      </div>
      <div className="col-1">
        <a
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
  type: PropTypes.string.isRequired,
};

export default AssetIriRow;