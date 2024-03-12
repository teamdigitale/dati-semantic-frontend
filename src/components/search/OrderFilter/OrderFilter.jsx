import { func, object } from "prop-types";
import React, { useEffect, useState } from "react";
import { ORDER_OPTIONS, ORDER_PARAMS, ORDER_QUERY } from "./constants";
import { equalsObj } from "../../../services/objectUtils";

export const OrderFilter = ({ onOrderChange, orderQuery }) => {
  const [orderValue, setOrderValue] = useState("");

  const paramsFromQuery = {
    sortBy: orderQuery.sortBy ?? ORDER_PARAMS.TITLE,
    direction: orderQuery.direction ?? ORDER_PARAMS.ASC
  };

  const onChangeSelect = (value) => {
    const orderFilter = ORDER_QUERY[value];
    setOrderValue(value);
    onOrderChange(orderFilter);
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
    <div className="select-wrapper col-3">
      <label className="ps-0 pb-2" htmlFor="orderSelect">
        Ordina per
      </label>
      <select
        id="orderSelect"
        value={orderValue}
        className="border border-secondary rounded"
        onChange={(e) => onChangeSelect(e.target.value)}
      >
        <option value={ORDER_OPTIONS.modified_on}>Ultima modifica</option>
        <option value={ORDER_OPTIONS.issued_on}>Data creazione</option>
        <option value={ORDER_OPTIONS.title_asc}>Nome (A-z)</option>
        <option value={ORDER_OPTIONS.title_desc}>Nome (Z-a)</option>
      </select>
    </div>
  );
};

OrderFilter.propTypes = {
  onOrderChange: func,
  orderQuery: object
};
