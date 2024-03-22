import PropTypes, { arrayOf, oneOf, shape, string } from "prop-types";
import { SUPPORTED_ASSET_TYPES } from "../../../services/dataConstants";
import { getCategories } from "../../../assets/data/categories";
import rowStyle from "../../semantic-assets/AssetDetails/metadata/MetadataRow.module.css";
import { ShowOnDesktop, ShowOnMobile } from "../../common/ResponsiveViews";
import sprite from "../../../assets/images/sprite.svg";

export const PAGE_SIZE = 8;
export const DEFAULT_OFFSET = 0;

const SUPPORTED_THEMES = getCategories().map((c) => c.key);

const getPageSlidingWindow = (currentPage, totalPages) => {
  if (totalPages <= 2) {
    if (totalPages === 2) {
      return [1, 2];
    }
    return [1];
  }

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
    window.scrollTo(0, 0);
  };

  // if (totalPages === 1) {
  //   return (
  //     <nav
  //       className="pagination-wrapper justify-content-center"
  //       aria-label="Navigazione allineata a destra"
  //     >
  //       <ul className="pagination">
  //         <li className="page-item disabled">
  //           <a className="page-link" href="#" tabIndex="-1" aria-hidden="true">
  //             <svg className="icon icon-primary">
  //               <use href="/bootstrap-italia/dist/svg/sprites.svg#it-chevron-left"></use>
  //             </svg>
  //             <span className="visually-hidden">Pagina precedente</span>
  //           </a>
  //         </li>
  //         <li className="page-item">
  //           <a className="page-link" href="#" aria-current="page">
  //             <span className="d-inline-block d-sm-none">Pagina </span>1
  //           </a>
  //         </li>
  //         <li className="page-item">
  //           <a className="page-link" href="#">
  //             <span className="visually-hidden">Pagina successiva</span>
  //             <svg className="icon icon-primary">
  //               <use href="/bootstrap-italia/dist/svg/sprites.svg#it-chevron-right"></use>
  //             </svg>
  //           </a>
  //         </li>
  //       </ul>
  //     </nav>
  //   );
  // }

  const disabledIcons = currentPageNumber >= totalPages;
  const pageList = getPageSlidingWindow(currentPageNumber, totalPages);

  return (
    <nav
      className="pagination-wrapper justify-content-center"
      aria-label="Sfoglia pagine dei risultati"
      data-testid="pagination"
    >
      <ul className="pagination justify-content-center">
        <li
          style={{ width: "50px" }}
          className={`page-item ${
            currentPageNumber <= 1 ? "disabled" : ""
          } mx-1 mx-lg-3`}
        >
          <a
            data-testid="skip-first-page"
            className="page-link"
            href="#"
            onClick={(e) => {
              onPageSelection(0);
              e.preventDefault();
            }}
            aria-disabled={currentPageNumber <= 1 ? "true" : "false"}
          >
            <span className="visually-hidden text-black">
              {"Vai alla prima pagina"}
            </span>
            <div className="d-flex flex-row justify-content-center">
              <svg
                className={`icon ${currentPageNumber >= 1 && "icon-primary"}`}
                style={{ position: "relative", left: "23px" }}
                alt="first-page"
              >
                <use href={sprite + "#it-chevron-left"}></use>
              </svg>{" "}
              <svg
                className={`icon ${currentPageNumber >= 1 && "icon-primary"}`}
              >
                <use href={sprite + "#it-chevron-left"}></use>
              </svg>{" "}
            </div>
          </a>
        </li>
        <li className={`page-item ${currentPageNumber <= 1 ? "disabled" : ""}`}>
          <a
            data-testid="previous-page"
            className="page-link"
            href="#"
            onClick={(e) => {
              onPageSelection((currentPageNumber - 2) * PAGE_SIZE);
              e.preventDefault();
            }}
            aria-disabled={currentPageNumber <= 1 ? "true" : "false"}
          >
            <svg
              className={`icon ${currentPageNumber >= 1 && "icon-primary"}`}
              alt="indietro"
            >
              <use href={sprite + "#it-chevron-left"}></use>
            </svg>{" "}
            <span className="visually-hidden text-black">
              Pagina precedente
            </span>
          </a>
        </li>
        <ShowOnDesktop style={{ flexDirection: "row", display: "flex" }}>
          {pageList.map((pageNumber) => (
            <li
              data-testid={`page-${pageNumber}`}
              key={pageNumber}
              className={`page-item ${itemState(
                pageNumber,
                totalPages
              )} flex-row`}
            >
              <a
                aria-current={pageNumber === currentPageNumber ? "page" : null}
                className={"page-link " + rowStyle.assetLink}
                href="#"
                onClick={(e) => {
                  onPageSelection((pageNumber - 1) * PAGE_SIZE);
                  e.preventDefault();
                }}
                aria-disabled={
                  itemState(pageNumber, totalPages) === "disabled"
                    ? "true"
                    : "false"
                }
              >
                {pageNumber}
              </a>
            </li>
          ))}
        </ShowOnDesktop>
        <ShowOnMobile>
          <li
            data-testid={`page-${currentPageNumber}-mobile`}
            key={currentPageNumber}
            className={`page-item ${itemState(
              currentPageNumber,
              totalPages
            )} me-0`}
          >
            <div
              aria-current={"page"}
              className={"page-link " + rowStyle.assetLink}
            >
              {`pagina ${currentPageNumber}`}
            </div>
          </li>
        </ShowOnMobile>
        <li className={`page-item ${disabledIcons ? "disabled" : ""}`}>
          <a
            data-testid="next-page"
            className="page-link"
            href="#"
            onClick={(e) => {
              onPageSelection(currentPageNumber * PAGE_SIZE);
              e.preventDefault();
            }}
            aria-disabled={disabledIcons ? "true" : "false"}
          >
            <span className="visually-hidden text-black">
              Pagina successiva
            </span>
            <svg
              className={`icon ${!disabledIcons && "icon-primary"}`}
              alt="avanti"
            >
              <use href={sprite + "#it-chevron-right"}></use>
            </svg>{" "}
          </a>
        </li>
        <li
          style={{ width: "50px" }}
          className={`page-item ${
            disabledIcons ? "disabled" : ""
          } mx-1 mx-lg-3`}
        >
          <a
            data-testid="skip-last-page"
            className="page-link"
            href="#"
            onClick={(e) => {
              onPageSelection((totalPages - 1) * PAGE_SIZE);
              e.preventDefault();
            }}
            aria-disabled={disabledIcons ? "true" : "false"}
          >
            <span className="visually-hidden text-black">
              {"Vai all'ultima pagina"}
            </span>
            <div className="d-flex flex-row justify-content-center">
              <svg
                className={`icon ${!disabledIcons && "icon-primary"}`}
                alt="last-page"
              >
                <use href={sprite + "#it-chevron-right"}></use>
              </svg>
              <svg
                className={`icon ${!disabledIcons && "icon-primary"}`}
                style={{ position: "relative", right: "23px" }}
              >
                <use href={sprite + "#it-chevron-right"}></use>
              </svg>
            </div>
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
    themes: arrayOf(oneOf(SUPPORTED_THEMES))
  }).isRequired,
  page: shape({
    offset: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired
  }),
  onPageSelect: PropTypes.func.isRequired
};

Pagination.defaultProps = {};

export default Pagination;
