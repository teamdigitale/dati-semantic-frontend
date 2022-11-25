import React from "react";

import { arrayOf, string, number, shape } from "prop-types";
export const BreadCrumbs = (props) => {
  return (
    <React.Fragment>
      <nav
        className="breadcrumb-container pt-3"
        aria-label="Percorso di navigazione"
      >
        <ol className="breadcrumb mb-0 pb-2">
          {props?.arrayBread?.map((bread, i) => {
            return bread?.link != "" && bread?.link != "back" ? (
              <li className="breadcrumb-item" key={bread?.id + "key" + i}>
                <a className="link" href={bread?.link} title={bread?.label}>
                  {bread?.label}
                </a>
                <span className="separator">/</span>
              </li>
            ) : bread?.link == "back" ? (
              <li
                className="breadcrumb-item"
                key={bread?.id + "keyBack" + i}
                onClick={() => history?.back()}
              >
                <a className="link" href="#" title={bread?.label}>
                  {bread?.label}
                </a>
                <span className="separator">/</span>
              </li>
            ) : (
              <li
                className="breadcrumb-item active"
                aria-current="page"
                key={bread?.id + "Skey" + i}
                title={bread?.label}
              >
                <strong>{bread?.label}</strong>
              </li>
            );
          })}
        </ol>
      </nav>
    </React.Fragment>
  );
};
BreadCrumbs.propTypes = {
  arrayBread: arrayOf(
    shape({
      label: string.isRequired,
      link: string,
      id: number.isRequired,
    })
  ).isRequired,
};
BreadCrumbs.defaultProps = {};
export default BreadCrumbs;
