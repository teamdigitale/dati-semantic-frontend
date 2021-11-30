import React from "react";
import { Icon } from "design-react-kit";
import PropTypes, { oneOf, string } from "prop-types";

const TYPES_TO_ICON = {
  danger: "it-close-circle",
  "callout-highlight": "it-info-circle",
  info: "it-info-circle",
};

const Callout = ({ type, title, children }) => {
  const icon = TYPES_TO_ICON[type];
  return (
    <div className={"callout m-5 " + type} role="alert">
      <div className="callout-title">
        <Icon icon={icon} />
        {title}
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
