import React from "react";
import HeaderMainTitle from "../HeaderMainTitle/HeaderMainTitle";
import HeaderMainMenu from "../HeaderMainMenu/HeaderMainMenu";

const HeaderNavigation = () => (
  <div className="it-nav-wrapper">
    <HeaderMainTitle />
    <HeaderMainMenu />
  </div>
);

HeaderNavigation.propTypes = {};

HeaderNavigation.defaultProps = {};

export default HeaderNavigation;
