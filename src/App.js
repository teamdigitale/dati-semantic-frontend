import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Main from "./components/layout/Main/Main";
import SkipToContent from "./components/layout/SkipToContent/SkipToContent";
import { BrowserRouter } from "react-router-dom";
import "./global-bootstrap-italia";
import "owl.carousel";

import React, { useRef } from "react";
import WipPage from "./components/layout/WipPage/WipPage";

function App() {
  const mainRef = useRef(null);
  const footerRef = useRef(null);

  const isMaintenance = window?._env_?.SHOW_MAINTENANCE_PAGE === "true";

  return (
    <BrowserRouter>
      <SkipToContent mainRef={mainRef} footerRef={footerRef} />
      <div id="page-front">
        <Header />
        {isMaintenance ? <WipPage /> : <Main childRef={mainRef} />}
        <Footer childRef={footerRef} />
      </div>
    </BrowserRouter>
  );
}

export default App;
