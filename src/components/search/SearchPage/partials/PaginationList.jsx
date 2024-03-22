import { bool, array, number, shape, object } from "prop-types";
import { routes } from "../../../../services/routes";
import { useNavigate } from "react-router";
import Pagination from "../../Pagination/Pagination";

export const PaginationList = ({
  isLoading,
  error,
  searchResult,
  filter = {}
}) => {
  const navigate = useNavigate();

  const onPageSelect = (navigate) => (filterWithPagination) => {
    navigate(routes.search(filterWithPagination));
  };

  const hasSearchResult = (searchResult) => {
    return searchResult && searchResult?.data && searchResult?.data.length > 0;
  };

  return (
    !error &&
    !isLoading &&
    hasSearchResult(searchResult) && (
      <div className="row mt-5 mb-4">
        <div className="col-12">
          <Pagination
            page={{
              totalCount: searchResult?.totalCount,
              offset: searchResult?.offset
            }}
            filter={filter}
            onPageSelect={onPageSelect(navigate)}
          />
        </div>
      </div>
    )
  );
};

PaginationList.propTypes = {
  isLoading: bool,
  error: bool,
  searchResult: shape({ data: array, totalCount: number, offset: number }),
  filter: object
};
