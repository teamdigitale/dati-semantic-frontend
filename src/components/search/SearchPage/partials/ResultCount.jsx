import { bool, number } from "prop-types";

export const ResultCount = ({ isLoading, error, totalCount }) => {
  return (
    <div className="row" data-testid="results-count">
      <div>
        {!error && !isLoading && totalCount ? (
          <h6 className="fw-normal mb-0" role="alert" aria-live="assertive">
            <strong className="fw-bold">{totalCount}</strong> Risultati
          </h6>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

ResultCount.propTypes = {
  isLoading: bool.isRequired,
  error: bool,
  totalCount: number
};
