import { useNavigate } from "react-router";
import SearchResultAlert from "../../SearchResultAlert/SearchResultAlert";
import SearchResults from "../../SearchResults/SearchResults";
import { bool, array } from "prop-types";
import { useEffect } from "react";

export const List = ({
  isLoading,
  error,
  searchResultData,
  areFiltersActive
}) => {
  const routNav = useNavigate();

  useEffect(() => {
    sessionStorage.setItem("source", "app");
  }, []);

  function goToError() {
    routNav("/errore");
  }
  if (isLoading) {
    return (
      <div
        className="my-5 py-5 d-flex justify-content-center"
        style={{ height: "300px" }}
      >
        <h2 role="alert" aria-live="assertive">
          Caricamento...
        </h2>
      </div>
    );
  }
  if (error) {
    goToError();
    return (
      <div className="my-5 pb-3">
        <SearchResultAlert
          title="Errore imprevisto del server"
          message="Ci scusiamo per il disagio, riprovare fra qualche minuto"
        />
      </div>
    );
  }
  if (!(searchResultData && searchResultData.length)) {
    return (
      <div className="my-5 pb-3">
        <SearchResultAlert
          title="Nessun risultato trovato"
          message="La ricerca non ha prodotto nessun risultato, modifica i filtri o prova un'altra chiave di ricerca."
        />
      </div>
    );
  }

  return (
    <div className="mt-5">
      <SearchResults
        items={searchResultData}
        areFiltersActive={areFiltersActive}
      />
    </div>
  );
};

List.propTypes = {
  isLoading: bool.isRequired,
  error: bool,
  searchResultData: array,
  areFiltersActive: bool
};
