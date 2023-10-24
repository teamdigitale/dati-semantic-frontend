/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import React, { useEffect } from "react";
import "./NewErrorPage.css";
import { useNavigate } from "react-router-dom";
const NewErrorPage = () => {
  useEffect(() => {
    document.title = "Pagina di errore - Catalogo Nazionale Dati";
  });
  const goToHome = useNavigate();
  return (
    <div>
      <div className="contain col-12 py-5" id="NewErrorPage">
        <div className="row mx-0 justify-content-center">
          <div className="col-md-6 d-flex justify-content-center my-5">
            <svg
              width="130"
              height="90"
              viewBox="0 0 130 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="11"
                height="20"
                rx="5.5"
                transform="matrix(-6.79865e-09 -1 -1 6.79865e-09 104 51)"
                stroke="#F7B000"
                strokeWidth="3"
              />
              <path
                d="M130 50L115 50C112.239 50 110 47.7614 110 45V45C110 42.2386 112.239 40 115 40L130 40"
                stroke="#F7B000"
                strokeWidth="3"
              />
              <line
                x1="1.5"
                y1="-1.5"
                x2="15.5"
                y2="-1.5"
                transform="matrix(-1 6.79865e-09 6.79865e-09 1 116 47)"
                stroke="#F7B000"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="45" cy="45" r="45" fill="#0066CC" />
              <path
                d="M30.2655 36.2394C30.2655 38.6587 28.3042 40.6199 25.8849 40.6199C23.4656 40.6199 21.5044 38.6587 21.5044 36.2394C21.5044 33.8201 23.4656 31.8589 25.8849 31.8589C28.3042 31.8589 30.2655 33.8201 30.2655 36.2394Z"
                fill="white"
              />
              <path
                d="M50.7547 33.5304C46.414 33.5304 44.2437 34.9641 44.2437 37.8313C44.2437 39.1057 44.7813 40.0813 45.8565 40.7583C46.9317 41.4353 49.4406 42.411 53.3831 43.6853C57.3654 44.9596 60.153 46.4132 61.7459 48.0459C63.3388 49.6389 64.1353 52.1079 64.1353 55.453C64.1353 59.7141 62.841 62.9397 60.2525 65.13C57.664 67.3203 54.2791 68.4154 50.0977 68.4154C46.9915 68.4154 43.1884 67.9375 38.6884 66.9818L36.5379 66.5636L37.3742 60.172C42.7105 60.8889 46.7924 61.2473 49.6198 61.2473C53.841 61.2473 55.9517 59.495 55.9517 55.9906C55.9517 54.7163 55.4539 53.7207 54.4583 53.0039C53.5025 52.2871 51.5711 51.5105 48.664 50.6742C44.0446 49.3601 40.7791 47.807 38.8676 46.015C36.9959 44.1831 36.0601 41.6543 36.0601 38.4287C36.0601 34.3667 37.2946 31.3402 39.7636 29.349C42.2326 27.3579 45.6176 26.3623 49.9185 26.3623C52.8654 26.3623 56.6087 26.7605 61.1486 27.557L63.299 27.9751L62.6419 34.4862C57.0269 33.849 53.0645 33.5304 50.7547 33.5304Z"
                fill="white"
              />
            </svg>
            <div className="invisible ">Test</div>
            <svg
              width="131"
              height="90"
              viewBox="0 0 131 90"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-7.47852e-08 40L14.5 40C17.5376 40 20 42.4624 20 45.5V45.5C20 48.5376 17.5376 51 14.5 51L0 51"
                stroke="#F7B000"
                strokeWidth="3"
              />
              <rect
                width="10"
                height="20"
                rx="5"
                transform="matrix(-6.79865e-09 -1 -1 6.79865e-09 46 50)"
                stroke="#F7B000"
                strokeWidth="3"
              />
              <line
                x1="1.5"
                y1="-1.5"
                x2="15.5"
                y2="-1.5"
                transform="matrix(-1 6.79865e-09 6.79865e-09 1 32 47)"
                stroke="#F7B000"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M41 44.9484C40.9949 50.8617 42.1551 56.718 44.4141 62.1833C46.6732 67.6473 49.9868 72.6135 54.1657 76.7977C58.3446 80.9818 63.3072 84.3007 68.7695 86.566C74.2317 88.8314 80.0867 89.9981 86 90.0004C97.9347 90.0004 109.381 85.2595 117.82 76.8196C126.259 68.3809 131 56.934 131 44.9998C131 33.065 126.259 21.6192 117.82 13.1801C109.381 4.74093 97.9347 0 86 0C74.0753 0.00335007 62.6392 4.73839 54.2022 13.1656C45.7653 21.5928 41.0171 33.0236 41 44.9484Z"
                fill="#0066CC"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M61 66H113V28H61V66Z"
                fill="#0066CC"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M61 66H113V28H61V66Z"
                stroke="white"
                strokeWidth="1.34"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M61 39.5H113"
                stroke="white"
                strokeWidth="1.34"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M69 33.5C69 34.3291 68.3288 35 67.4994 35C66.6712 35 66 34.3291 66 33.5C66 32.6709 66.6712 32 67.4994 32C68.3288 32 69 32.6709 69 33.5Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M74 33.5C74 34.3291 73.3288 35 72.4994 35C71.6712 35 71 34.3291 71 33.5C71 32.6709 71.6712 32 72.4994 32C73.3288 32 74 32.6709 74 33.5Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M78 33.5C78 34.3291 77.3288 35 76.4994 35C75.6712 35 75 34.3291 75 33.5C75 32.6709 75.6712 32 76.4994 32C77.3288 32 78 32.6709 78 33.5Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M67 61H108V45H67V61Z"
                stroke="white"
                strokeWidth="1.34"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M67 55.5H108"
                stroke="white"
                strokeWidth="1.34"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M67 50.5H108"
                stroke="white"
                strokeWidth="1.34"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M89.5 45V61"
                stroke="white"
                strokeWidth="1.34"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M89.5 45V61"
                stroke="white"
                strokeWidth="1.34"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M73 45V61"
                stroke="white"
                strokeWidth="1.34"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="row mx-0 my-1 justify-content-center">
          <div className="col-md-8 d-flex justify-content-center">
            <h1 className="my-1 text-center text-primary-title" role="status">
              La pagina esterna non è disponibile
            </h1>
          </div>
        </div>
        <div className="row mx-0 my-2 justify-content-center">
          <div className="col-md-6 d-flex justify-content-center">
            <p className="my-1 mb-4 text-center fw-normal fs-4" role="status">
              Potrebbe essere non più raggiungibile o il collegamento
              <br />
              potrebbe essere errato.
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
    </div>
  );
};
NewErrorPage.propTypes = {};

NewErrorPage.defaultProps = {};

export default NewErrorPage;
