import React from "react";
import Categories from "../Categories/Categories";
import AssetTypes from "../AssetTypes/AssetTypes";
import MainSearchBar from "../MainSearchBar/MainSearchBar";

const Home = () => (
  <div data-testid="Home">
    <MainSearchBar />
    <AssetTypes />
    <Categories />
  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
