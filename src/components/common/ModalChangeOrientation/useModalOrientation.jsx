import { useEffect, useState } from "react";
import { ModalChangeOrientation } from "./ModalChangeOrientation";
import { getDetailsPageUrl } from "../../../services/vocabService";

export const useModalOrientation = ({ isDetailPage = false, redirectUrl }) => {
  const [toggleModal, setToggleModal] = useState(false);

  const splitUrl = redirectUrl.split("/");
  const idUrl = splitUrl[splitUrl.length - 1];

  const idModal = `toggle-${idUrl}`;
  const idDismiss = `dismiss-${idUrl}`;

  const handleOpenModal = () => setToggleModal(true);
  const handleCloseModal = () => setToggleModal(false);

  const handleClickBackdrop = (e) => {
    if (
      !e.target.closest(".modal-content") &&
      e.target.closest("#modalChangeOrientation")
    )
      handleCloseModal();
  };
  useEffect(() => {
    document.getElementById(idModal)?.click();
  }, [toggleModal]);

  useEffect(() => {
    document.addEventListener("click", handleClickBackdrop);

    return () => {
      document.removeEventListener("click", handleClickBackdrop);
    };
  }, []);

  const handleRedirect = () => {
    if (isDetailPage) window.location.href = redirectUrl;
    else window.location.href = getDetailsPageUrl(redirectUrl);
  };

  const ModalOrientation = () => (
    <>
      {toggleModal && (
        <>
          <div
            id={idModal}
            data-bs-toggle="modal"
            data-bs-target="#modalChangeOrientation"
          ></div>
          <div
            id={idDismiss}
            data-bs-dismiss="modal"
            data-bs-target="#modalChangeOrientation"
          ></div>
          <ModalChangeOrientation
            closeModal={handleCloseModal}
            onRedirect={handleRedirect}
          />
        </>
      )}
    </>
  );

  return { handleOpenModal, handleCloseModal, ModalOrientation };
};
