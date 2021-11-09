import React from "react";
import Categories from "../Categories/Categories";
import { Route, Routes } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

const Main = () => (
  <main>
    <div className="container">
      <Routes>
        <Route index path="/" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </main>
);

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
