import React from "react";
import styles from "./Anchor.module.css";
import { node, string } from "prop-types";

const Anchor = (props) => {
  const { children, ...rest } = props;

  return (
    <a className={styles.Anchor} {...rest}>
      {children}
    </a>
  );
};

Anchor.propTypes = {
  href: string,
  target: string,
  rel: string,
  children: node,
};

Anchor.defaultProps = {};

export default Anchor;
