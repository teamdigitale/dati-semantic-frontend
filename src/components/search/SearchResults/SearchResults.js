import React from "react";
import { arrayOf, oneOf, shape, string } from "prop-types";
import SearchResultItem from "../SearchResultItem/SearchResultItem";
import Callout from "../../common/Callout/Callout";
import { SUPPORTED_ASSET_TYPES } from "../../../services/dataConstants";

const SearchResults = (props) => {
  const items = props.items;

  const emptyResultsMessage = () => {
    if (!items || items.length === 0) {
      return (
        <Callout type="callout-highlight" title="Nessun risultato">
          <p>I criteri immessi non corrispondono a nessun elemento.</p>
        </Callout>
      );
    }
  };

  const renderItems = () => {
    if (!items || items.length === 0) {
      return;
    }

    return items.map((item) => (
      <SearchResultItem key={item.assetIri} item={item} />
    ));
  };

  return (
    <div data-testid="SearchResults">
      {emptyResultsMessage()}

      {renderItems()}
    </div>
  );
};

SearchResults.propTypes = {
  items: arrayOf(
    shape({
      assetIri: string,
      type: oneOf(SUPPORTED_ASSET_TYPES),
      title: string,
      description: string,
      themes: arrayOf(string),
      rightsHolder: shape({
        iri: string,
        summary: string,
      }),
      modified: string,
    })
  ).isRequired,
};

SearchResults.defaultProps = {};

export default SearchResults;
