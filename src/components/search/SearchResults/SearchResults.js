import React from "react";
import PropTypes from "prop-types";
import styles from "./SearchResults.module.css";
import { Icon } from "design-react-kit";
import { getAssetLabel } from "../../../services/dataConstants";

const SearchResults = (props) => {
  const items = props.items;

  const emptyResultsMessage = () => {
    if (!items || items.length === 0) {
      return (
        <div
          className="callout callout-highlight note"
          data-testid="EmptySearchResults"
        >
          <div className="callout-title">
            <Icon icon="it-info-circle" />
            Nessun risultato
          </div>
          <p>I criteri immessi non corrispondono a nessun elemento.</p>
        </div>
      );
    }
  };

  const renderItems = () => {
    if (!items || items.length === 0) {
      return;
    }

    return (
      <ul>
        {items.map((item) => (
          <li key={item.uri} data-testid="SearchResultComponent">
            <div>
              <div>Tipo: {getAssetLabel(item.type)}</div>
              <div>Titolo: {item.title}</div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={styles.SearchResults} data-testid="SearchResults">
      {emptyResultsMessage()}

      {renderItems()}
    </div>
  );
};

SearchResults.propTypes = {
  items: PropTypes.array.isRequired,
};

SearchResults.defaultProps = {};

export default SearchResults;
