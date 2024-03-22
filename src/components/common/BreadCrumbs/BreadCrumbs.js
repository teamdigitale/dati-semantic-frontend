import React, { useEffect, useState } from "react";

import { arrayOf, string, number, shape } from "prop-types";
import { useNavigate } from "react-router-dom";

export const BreadCrumbs = (props) => {
  const [isOpenedFromApp, setIsOpenedFromApp] = useState(false);
  const navigate = useNavigate();

  const handleBack = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isOpenedFromApp || document.referrer == "") {
      navigate("/search", { replace: true });
    } else {
      window.history.back();
    }
  };

  useEffect(() => {
    const sourceValue = sessionStorage.getItem("source");
    if (sourceValue) {
      setIsOpenedFromApp(sourceValue == "app");
    }
  }, []);

  return (
    <React.Fragment>
      <nav
        className="breadcrumb-container pt-3"
        aria-label="Percorso di navigazione"
      >
        <ol className="breadcrumb mb-0 pb-2">
          {props?.arrayBread?.map((bread, i) => {
            return bread?.link != "" && bread?.link != "back" ? (
              <li className="breadcrumb-item" key={bread?.id + "key" + i}>
                <a
                  className="link text-decoration-none"
                  href={bread?.link}
                  title={bread?.label}
                >
                  {bread?.label}
                </a>
                <span className="separator">/</span>
              </li>
            ) : bread?.link == "back" ? (
              <li className="breadcrumb-item" key={bread?.id + "keyBack" + i}>
                <a
                  href="#"
                  className="link text-decoration-none"
                  title={bread?.label}
                  onClick={(e) => handleBack(e)}
                >
                  {bread?.label}
                </a>
                <span className="separator">/</span>
              </li>
            ) : (
              <li
                className="breadcrumb-item active"
                aria-current="page"
                key={bread?.id + "Skey" + i}
                title={bread?.label}
              >
                <a className="link text-decoration-none" href="">
                  <strong>{bread?.label}</strong>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </React.Fragment>
  );
};
BreadCrumbs.propTypes = {
  arrayBread: arrayOf(
    shape({
      label: string.isRequired,
      link: string,
      id: number.isRequired
    })
  ).isRequired
};
BreadCrumbs.defaultProps = {};
export default BreadCrumbs;
