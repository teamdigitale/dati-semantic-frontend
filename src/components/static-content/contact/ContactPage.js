/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import BreadCrumbs from "../../common/BreadCrumbs/BreadCrumbs";
import BREADCRUMBS from "../../../services/BreadCrumbsConst";
import EndSection from "../../common/EndSection/EndSection";

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contatti - SCHEMA";
  });

  return (
    <div data-testid="ContactPage">
      <div className="container-fluid px-xl-4 px-lg-2 px-0">
        <div className="row mx-0 px-0">
          <div className="col-lg-12 pl-5">
            <BreadCrumbs arrayBread={BREADCRUMBS.CONTACTPAGE} />
          </div>
        </div>
      </div>

      <div
        className="container-fluid schemaPadding"
        style={{ marginBottom: "14rem" }}
      >
        <div data-testid="ContactBody" className="policy-body">
          <div className="col-lg-6 pt-5">
            <div className="text-center text-sm-left pb-4">
              <h1>Contatti</h1>
            </div>
            <p
              style={{
                fontSize: "1.5rem",
                fontWeight: "normal",
                marginBottom: "3rem",
              }}
            >
              Ricevi informazioni sulle attività del Catalogo <br></br>{" "}
              Nazionale Dati
            </p>
            <p>
              Stiamo lavorando per aggiornare la sezione contatti.
              <br></br>
              Continua ad esplorare schema.gov.it e torna presto a trovarci!
            </p>
          </div>
        </div>
      </div>

      <EndSection type={2} />
    </div>
  );
};

ContactPage.propTypes = {};
ContactPage.defaultPropTypes = {};

export default ContactPage;
