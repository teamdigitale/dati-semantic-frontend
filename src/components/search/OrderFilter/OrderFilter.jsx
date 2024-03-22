import { func, object } from "prop-types";
import React, { useEffect, useState } from "react";
import { ORDER_OPTIONS, ORDER_PARAMS, ORDER_QUERY } from "./constants";
import { equalsObj } from "../../../services/objectUtils";
import { ShowOnDesktop, ShowOnMobile } from "../../common/ResponsiveViews";
import sprite from "../../../assets/images/sprite.svg";

const orderOptionsArray = [
  { label: "Ultima modifica", value: ORDER_OPTIONS.modified_on },
  { label: "Data creazione", value: ORDER_OPTIONS.issued_on },
  { label: "Nome (A-z)", value: ORDER_OPTIONS.title_asc },
  { label: "Nome (Z-a)", value: ORDER_OPTIONS.title_desc }
];

export const OrderFilter = ({ onOrderChange, orderQuery }) => {
  const [orderValue, setOrderValue] = useState("");

  const paramsFromQuery = {
    sortBy: orderQuery.sortBy ?? ORDER_PARAMS.TITLE,
    direction: orderQuery.direction ?? ORDER_PARAMS.ASC
  };

  const onChangeSelect = (value) => {
    const orderFilter = ORDER_QUERY[value];
    setOrderValue(value);
    onOrderChange({ ...orderQuery, ...orderFilter });
  };

  const isSelectedOption = (value) => equalsObj(paramsFromQuery, value);

  useEffect(() => {
    if (isSelectedOption(ORDER_QUERY.title_asc))
      setOrderValue(ORDER_OPTIONS.title_asc);

    if (isSelectedOption(ORDER_QUERY.modified_on))
      setOrderValue(ORDER_OPTIONS.modified_on);

    if (isSelectedOption(ORDER_QUERY.issued_on))
      setOrderValue(ORDER_OPTIONS.issued_on);

    if (isSelectedOption(ORDER_QUERY.title_desc))
      setOrderValue(ORDER_OPTIONS.title_desc);
  }, [paramsFromQuery]);

  return (
    <>
      <ShowOnDesktop>
        <div className="select-wrapper col-12">
          <label className="ps-0 pb-2" htmlFor="orderSelect">
            Ordina per
          </label>
          <select
            id="orderSelect"
            value={orderValue}
            className="border border-secondary rounded"
            onChange={(e) => onChangeSelect(e.target.value)}
          >
            {orderOptionsArray.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </ShowOnDesktop>
      <ShowOnMobile>
        <div className="dropdown text-center h-100 ms-3">
          <button
            className="btn dropdown-toggle btn-outline-primary h-100 px-3"
            type="button"
            style={{ fontSize: "14px" }}
            id="dropdownOrderButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Ordina per
            <svg className="icon-expand icon icon-sm icon-primary">
              <use href={`${sprite}#it-expand`}></use>
            </svg>
          </button>
          <div
            className="dropdown-menu mt-3"
            aria-labelledby="dropdownOrderButton"
          >
            <div className="link-list-wrapper">
              <ul className="link-list">
                {orderOptionsArray.map((option) => (
                  <li key={option.value}>
                    <button
                      onClick={() => onChangeSelect(option.value)}
                      className="btn fw-semibold dropdown-item list-item"
                    >
                      {option.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ShowOnMobile>
    </>
  );
};

OrderFilter.propTypes = {
  onOrderChange: func,
  orderQuery: object
};
