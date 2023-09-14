import React from "react";
import PropTypes, { oneOf, string } from "prop-types";
import sprite from "../../../assets/images/sprite.svg";

const TYPES_TO_ICON = {
  danger: "it-close-circle",
  "callout-highlight": "it-info-circle",
  info: "it-info-circle",
};

const Callout = ({ type, title, children }) => {
  const icon = TYPES_TO_ICON[type];
  console.log(icon);
  return (
    <div className={"callout m-5 " + type} role="alert">
      <div className="d-flex">
        <div className="col-12 col-md-6 col-lg-1">
          <svg className="icon">
            <use href={sprite + "#it-info-circle"}></use>
          </svg>{" "}
        </div>
        <div className="callout-title">{title}</div>
      </div>
      {children}
    </div>
  );
};
Callout.propTypes = {
  type: oneOf(["danger", "callout-highlight", "info"]).isRequired,
  title: string.isRequired,
  children: PropTypes.node,
};

Callout.defaultProps = {};

export default Callout;
