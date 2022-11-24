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
  const alertMess = getAlertMessage();
  console.log(window.history);
  let bkgAlert = "mantainenceAllert";
  return (
    <BrowserRouter>
      <SkipToContent mainRef={mainRef} footerRef={footerRef} />
      <div id="page-front">
        <Header />
        {alertMess && alertMess != "" ? (
          <div className={bkgAlert}>
            <div className="container-fluid schemaPadding py-3">
              <div className="alert alert-warning m-0" role="alert">
                <strong>Avviso di manutenzione</strong> - {alertMess}
              </div>
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
