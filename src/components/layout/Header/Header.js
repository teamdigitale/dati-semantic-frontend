import React from "react";
import HeaderSlim from "../HeaderSlim/HeaderSlim";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";

const Header = () => {
  return (
    <div className="it-header-wrapper" tabIndex={-1}>
      <HeaderSlim />

      <HeaderNavigation />
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
