import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  useEffect(() => {
    document.title = "Pagina di errore - Catalogo Nazionale Dati";
  });
  const goToHome = useNavigate();
  return (
    <div className="container mt-5 mb-5" id="ERRORPAGE">
      <div className="row mx-0 my-1 justify-content-center">
        <div className="col-md-6 d-flex justify-content-center my-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="160"
            height="160"
            viewBox="0 0 120 120"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M110 39.5V81L80.5 110H39.5L10 81V39.5L39.5 10H80.5L110 39.5ZM57.5 28.5V71H63.5V28.5H57.5ZM63 91.5H57V82.5H63V91.5ZM78.5 15L105 41.5V79L78.5 105H41.5L15 79V41.5L41.5 15H78.5Z"
              fill="#0066CC"
            />
          </svg>
        </div>
      </div>
      <div className="row mx-0 my-1 justify-content-center">
        <div className="col-md-8 d-flex justify-content-center">
          <h1 className="my-1 text-center text-primary-title" role="status">
            Il sistema al momento non è disponibile
          </h1>
        </div>
      </div>
      <div className="row mx-0 my-2 justify-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <p className="my-1" role="status">
            Ci scusiamo per l&apos;inconveniente.
            <br />
            Ti invitiamo a riprovare più tardi.
          </p>
        </div>
      </div>
      <div className="row mx-0 my-2 justify-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <button className="btn btn-primary" onClick={() => goToHome("/")}>
            Vai alla pagina iniziale
          </button>
        </div>
      </div>
      {/* <div className={styles.abstract}>{message}</div> */}
    </div>
  );
};
ErrorPage.propTypes = {};

ErrorPage.defaultProps = {};

export default ErrorPage;
