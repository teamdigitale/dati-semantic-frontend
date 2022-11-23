import "./App.css";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import Main from "./components/layout/Main/Main";
import SkipToContent from "./components/layout/SkipToContent/SkipToContent";
import { BrowserRouter } from "react-router-dom";
import "bootstrap-italia/dist/css/bootstrap-italia.min.css";
import "./global-bootstrap-italia";
import "owl.carousel";
import "bootstrap-italia";
import React, { useRef } from "react";
import getAlertMessage from "./services/alertService";

function App() {
  const mainRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <BrowserRouter>
      <SkipToContent mainRef={mainRef} footerRef={footerRef} />
      <div id="page-front">
        <Header />
        {getAlertMessage ? (
          <div className="container-fluid schemaPadding py-1">
            <div className="alert alert-warning m-0" role="alert">
              <strong>Avviso di manutenzione</strong> - {getAlertMessage}
            </div>
          </div>
        ) : null}

        <Main childRef={mainRef} />
        <Footer childRef={footerRef} />
      </div>
    </BrowserRouter>
  );
}

export default App;
