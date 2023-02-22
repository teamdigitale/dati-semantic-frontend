import PropTypes, { arrayOf, oneOf, shape, string } from "prop-types";
import { Icon } from "design-react-kit";
import { SUPPORTED_ASSET_TYPES } from "../../../services/dataConstants";
import { getCategories } from "../../../assets/data/categories";
import rowStyle from "../../semantic-assets/AssetDetails/metadata/MetadataRow.module.css";

export const PAGE_SIZE = 5;
export const DEFAULT_OFFSET = 0;

const SUPPORTED_THEMES = getCategories().map((c) => c.key);

const getPageSlidingWindow = (currentPage, totalPages) => {
  if (currentPage === 1) {
    return [1, 2, 3];
  }

  if (currentPage === totalPages) {
    if (totalPages > 3) {
      return [currentPage - 2, currentPage - 1, currentPage];
    }
    return [1, 2, 3];
  }

  return [currentPage - 1, currentPage, currentPage + 1];
};

const itemState = (pageNumber, totalPages) => {
  return pageNumber > totalPages ? "disabled" : "";
};
const Pagination = ({ page, filter, onPageSelect }) => {
  const totalPages = Math.ceil(page.totalCount / PAGE_SIZE);
  const currentPageNumber = Math.floor(page.offset / PAGE_SIZE) + 1;
  const onPageSelection = (offset) => {
    onPageSelect({ ...filter, ["offset"]: offset });
  };
  return (
    <nav
      className="pagination-wrapper justify-content-center"
      aria-label="Sfoglia pagine dei risultati"
      data-testid="pagination"
    >
      <ul className="pagination">
        <li className={`page-item ${currentPageNumber <= 1 ? "disabled" : ""}`}>
          <a
            data-testid="previous-page"
            className="page-link"
            href="#"
            onClick={(e) => {
              onPageSelection((currentPageNumber - 2) * PAGE_SIZE);
              e.preventDefault();
            }}
          >
            <Icon icon="it-chevron-left" />
            <span className="sr-only" style={{ color: "black" }}>
              Pagina precedente
            </span>
          </a>
        </li>
        {getPageSlidingWindow(currentPageNumber, totalPages).map(
          (pageNumber) => (
            <li
              data-testid={`page-${pageNumber}`}
              key={pageNumber}
              className={`page-item ${itemState(pageNumber, totalPages)}`}
            >
              <a
                aria-current={pageNumber === currentPageNumber ? "page" : null}
                className={"page-link " + rowStyle.assetLink}
                href="#"
                onClick={(e) => {
                  onPageSelection((pageNumber - 1) * PAGE_SIZE);
                  e.preventDefault();
                }}
              >
                {pageNumber}
              </a>
            </li>
          )
        )}
        <li
          className={`page-item ${
            currentPageNumber >= totalPages ? "disabled" : ""
          }`}
        >
          <a
            data-testid="next-page"
            className="page-link"
            href="#"
            onClick={(e) => {
              onPageSelection(currentPageNumber * PAGE_SIZE);
              e.preventDefault();
            }}
          >
            <span className="sr-only" style={{ color: "black" }}>
              Pagina successiva
            </span>
            <Icon icon="it-chevron-right" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  filter: shape({
    pattern: string,
    types: arrayOf(oneOf(SUPPORTED_ASSET_TYPES)),
    themes: arrayOf(oneOf(SUPPORTED_THEMES)),
  }).isRequired,
  page: shape({
    offset: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
  }),
  onPageSelect: PropTypes.func.isRequired,
};

Pagination.defaultProps = {};

export default Pagination;
