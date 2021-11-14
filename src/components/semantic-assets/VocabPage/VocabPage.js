import React, { useEffect, useState } from "react";
import { useQuery } from "../../../hooks/useQuery";
import AssetNotFound, {
  MISSING_RESOURCE,
  MISSING_URI,
} from "../AssetNotFound/AssetNotFound";
import { getVocabularyByUri } from "../../../services/vocabService";
import VocabDetails from "../VocabDetails/VocabDetails";

const VocabPage = () => {
  let query = useQuery();
  const [isLoading, setLoading] = useState(true);
  const [vocabData, setVocabData] = useState(null);

  useEffect(() => {
    const doSearch = async () => {
      if (!query.has("uri")) {
        return;
      }
      setLoading(true);
      const loadedData = await getVocabularyByUri(query.get("uri"));
      setVocabData(loadedData);
      setLoading(false);
    };
    doSearch();
  }, [query]);

  const showErrors = () => {
    if (!query.has("uri")) {
      return <AssetNotFound reason={MISSING_URI} />;
    }

    if (isLoading) {
      return <h2>Caricamento...</h2>;
    }

    if (!vocabData) {
      return <AssetNotFound reason={MISSING_RESOURCE} />;
    }

    return null;
  };

  const showDetails = () => {
    if (!vocabData) {
      return null;
    }

    return <VocabDetails details={vocabData} />;
  };

  return (
    <div data-testid="VocabPage">
      {showErrors()}
      {showDetails()}
    </div>
  );
};

VocabPage.propTypes = {};

VocabPage.defaultProps = {};

export default VocabPage;
