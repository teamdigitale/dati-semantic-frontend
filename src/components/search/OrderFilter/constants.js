export const ORDER_PARAMS = {
  TITLE: "TITLE",
  MODIFIED_ON: "MODIFIED_ON",
  ISSUED_ON: "ISSUED_ON",
  ASC: "ASC",
  DESC: "DESC"
};

export const ORDER_QUERY = {
  title_asc: {
    sortBy: ORDER_PARAMS.TITLE,
    direction: ORDER_PARAMS.ASC
  },
  modified_on: {
    sortBy: ORDER_PARAMS.MODIFIED_ON,
    direction: ORDER_PARAMS.DESC
  },
  title_desc: {
    sortBy: ORDER_PARAMS.TITLE,
    direction: ORDER_PARAMS.DESC
  },
  issued_on: {
    sortBy: ORDER_PARAMS.ISSUED_ON,
    direction: ORDER_PARAMS.ASC
  }
};

export const ORDER_OPTIONS = {
  title_asc: "title_asc",
  modified_on: "modified_on",
  issued_on: "issued_on",
  title_desc: "title_desc"
};
