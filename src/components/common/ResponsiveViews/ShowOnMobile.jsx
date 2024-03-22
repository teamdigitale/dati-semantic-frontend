import React, { memo } from "react";
import { node } from "prop-types";

export const ShowOnMobile = memo(({ children }) => {
  return <div className="d-block d-lg-none">{children}</div>;
});

ShowOnMobile.propTypes = {
  children: node.isRequired
};

ShowOnMobile.displayName = "ShowOnMobile";
