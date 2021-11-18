import React from "react";
import Categories from "../Categories/Categories";
import AssetTypes from "../AssetTypes/AssetTypes";

const Home = () => (
  <div data-testid="Home">
    <AssetTypes />
    <Categories />
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
