import React, { memo } from "react";
import { node, object } from "prop-types";

export const ShowOnDesktop = memo(({ children, style }) => {
  return (
    <div
      style={style}
      className={`d-none ${
        style && style.display == "flex" ? "d-lg-flex" : "d-lg-block"
      }`}
    >
      {children}
    </div>
  );
});

ShowOnDesktop.propTypes = {
  children: node.isRequired,
  style: object
};

ShowOnDesktop.displayName = "ShowOnDesktop";
