import { useNavigate } from "react-router";
import SearchResultAlert from "../../SearchResultAlert/SearchResultAlert";
import SearchResults from "../../SearchResults/SearchResults";
import { bool, array } from "prop-types";

export const List = ({
  isLoading,
  error,
  searchResultData,
  areFiltersActive
}) => {
  const routNav = useNavigate();
  function goToError() {
    routNav("/errore");
  }
  if (isLoading) {
    return (
      <h2 role="alert" aria-live="assertive">
        Caricamento...
      </h2>
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
