import { func } from "prop-types";
import sprite from "../../../assets/images/sprite.svg";

export const ModalChangeOrientation = ({ onRedirect }) => {
  return (
    <>
      <div
        className="modal fade d-lg-none"
        tabIndex="-1"
        role="dialog"
        id="modalChangeOrientation"
        aria-labelledby="modalChangeOrientationTitle"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h2
                className="modal-title h5 fw-bold"
                id="modalChangeOrientationTitle"
              >
                Migliora l’esperienza
              </h2>
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Chiudi finestra modale"
              >
                <svg className="icon">
                  <use href={`${sprite}#it-close`}></use>
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <p>
                Il contenuto della pagina è ottimizzato per risoluzioni
                maggiori.
              </p>
              <p className="fw-bold py-3">
                Ruota lo schermo in orizzontale o naviga da desktop.
              </p>
            </div>
            <div className="modal-footer justify-content-center">
              <button
                className="btn btn-primary w-100 btn-sm"
                data-bs-dismiss="modal"
                type="button"
                onClick={onRedirect}
              >
                Ho capito
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ModalChangeOrientation.propTypes = {
  onRedirect: func
};

ModalChangeOrientation.defaultProps = {};
