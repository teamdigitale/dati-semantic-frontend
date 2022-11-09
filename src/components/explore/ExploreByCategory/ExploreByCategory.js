import React, { useCallback } from "react";
import { getCategories } from "../../../assets/data/categories";
import CategoryIcon from "../../common/CategoryIcon/CategoryIcon";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../services/routes";
import ExploreSection from "../ExploreSection/ExploreSection";
import { chunk } from "../../../services/arrayUtils";
/* import styles from "./ExploreByCategory.module.css"; */

const categoryData = getCategories();

const ExploreByCategory = () => {
  const navigate = useNavigate();

  const searchFor = (key) => {
    navigate(routes.search({ themes: [key] }));
  };

  const categoryCells = categoryData.map((c) => {
    const onCategoryClick = useCallback(() => searchFor(c.key), [c.key]);
    return {
      key: c.key,
      icon: <CategoryIcon category={c} className="mt-5" />,
      label: c.label,
      onClick: onCategoryClick,
    };
  });

  return (
    <ExploreSection title="Esplora gli strumenti semantici per categoria">
      <div className="mt-4" role="list">
        <div className="row">
          <div className="col-12 d-flex justify-content-start">
            {chunk(categoryCells, categoryCells.length).map((row, rowIndex) => {
              return (
                <div role="listitem" className="row" key={"row" + rowIndex}>
                  {row.map((item) => {
                    return (
                      <div
                        className="col-lg-4 px-2 my-4 pointer"
                        key={item.key}
                        onClick={item.onClick}
                        data-testid={item.key}
                      >
                        <a href="#" className="link notUnderline">
                          <div className="card-wrapper card-space">
                            <div className="card card-bg">
                              <div className="card-body">
                                {/* <h3 className="card-title h5 ">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor…
                              </h3> */}
                                <div className="row mx-0 px-1">
                                  <div className="col-lg-4 d-flex align-items-end">
                                    <CategoryIcon category={item} />
                                  </div>
                                  <div className="col-lg-8 text-center d-flex align-items-center">
                                    <p className="h5">
                                      <strong>{item.label}</strong>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ExploreSection>
  );
};

ExploreByCategory.propTypes = {};

ExploreByCategory.defaultProps = {};

export default ExploreByCategory;
