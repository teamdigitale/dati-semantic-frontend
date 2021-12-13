import React from "react";
import "./FaqHeader.css";
import { routes } from "../../../services/routes";

const FaqHeader = () => {
  return (
    <div data-testid="FaqHeader" className="mt-5 faq-header">
      <div className="subtext">DOMANDE FREQUENTI</div>
      <div className="main-text">
        Esplora le risposte alle domande più frequenti
      </div>

      <a
        className="btn btn-primary w-20 m-4 p-2 project-btn"
        href={routes.explore()}
      >
        Scopri il progetto
      </a>
      <a
        className="btn btn-primary w-20 m-4 p-2 explore-btn"
        href={routes.explore()}
      >
        Esplora il catalogo
      </a>
    </div>
  );
};

FaqHeader.propTypes = {};

FaqHeader.defaultProps = {};

export default FaqHeader;
