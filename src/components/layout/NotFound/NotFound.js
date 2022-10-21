import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const NotFound = () => {
  useEffect(() => {
    document.title = "Pagina non trovata - Catalogo Nazionale Dati";
  });

  const goToHome = useNavigate();
  return (
    <div className="container mt-5 mb-5" role={"alert"}>
      <div className="row mx-0 my-2 justify-content-center">
        <div className="col-md-6 d-flex justify-content-center my-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="204"
            height="89"
            viewBox="0 0 204 89"
            fill="none"
          >
            <path
              d="M36.5225 87V73.048H0.6825V59.608L21.5465 2.52H41.0025L18.3465 57.688H36.5225V34.008H54.1865V57.688H62.2505V73.048H54.1865V87H36.5225ZM77.4515 11.48C82.9982 4.48266 91.1902 0.983994 102.028 0.983994C112.865 0.983994 121.014 4.48266 126.476 11.48C132.022 18.4773 134.796 29.7413 134.796 45.272C134.796 60.7173 132.065 71.8107 126.604 78.552C121.142 85.208 112.95 88.536 102.028 88.536C91.1048 88.536 82.9128 85.208 77.4515 78.552C71.9902 71.8107 69.2595 60.7173 69.2595 45.272C69.2595 29.7413 71.9902 18.4773 77.4515 11.48ZM116.62 44.888C116.62 34.3067 115.51 26.9253 113.292 22.744C111.073 18.4773 107.318 16.344 102.028 16.344C96.8222 16.344 93.0675 18.4773 90.7635 22.744C88.5448 27.0107 87.4355 34.392 87.4355 44.888C87.4355 55.384 88.5875 62.7227 90.8915 66.904C93.1955 71.0853 96.9502 73.176 102.156 73.176C107.361 73.176 111.073 71.0853 113.292 66.904C115.51 62.7227 116.62 55.384 116.62 44.888ZM177.773 87V73.048H141.933V59.608L162.797 2.52H182.253L159.597 57.688H177.773V34.008H195.437V57.688H203.501V73.048H195.437V87H177.773Z"
              fill="#0066CC"
            />
          </svg>
        </div>
      </div>
      <div className="row mx-0 my-2 justify-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <h1 className="my-1 text-primary-title" role="status">
            Pagina non trovata
          </h1>
        </div>
      </div>
      <div className="row mx-0 my-2 justify-content-center">
        <div className="col-md-6 d-flex justify-content-center">
          <p className="my-1" role="status">
            Utilizza il menu per riprendere la navigazione
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

NotFound.propTypes = {};

NotFound.defaultProps = {};

export default NotFound;
