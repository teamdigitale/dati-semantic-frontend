import { bool, number } from "prop-types";

export const ResultCount = ({ isLoading, error, totalCount }) => {
  return (
    <div className="row" data-testid="results-count">
      <div>
        {!error && !isLoading && totalCount ? (
          <div
            className="h6 fw-normal mb-0"
            role="status"
            aria-live="assertive"
          >
            <strong className="fw-bold">{totalCount}</strong> Risultati
          </div>
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
