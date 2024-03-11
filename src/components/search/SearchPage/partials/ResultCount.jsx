import { bool, number } from "prop-types";

export const ResultCount = ({ isLoading, error, totalCount }) => {
  return (
    <div className="row" data-testid="results-count">
      <div className="col-12">
        {!error && !isLoading && totalCount ? (
          <p className="h2" role="alert" aria-live="assertive">
            {totalCount} risultati
          </p>
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
