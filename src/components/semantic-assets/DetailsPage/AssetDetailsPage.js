import React, { useEffect, useState } from "react";
import { useQuery } from "../../../hooks/useQuery";
import AssetNotFound, {
  MISSING_RESOURCE,
  MISSING_URI,
} from "../AssetNotFound/AssetNotFound";
import { getSemanticAssetByUri } from "../../../services/vocabService";
import AssetDetails from "../AssetDetails/AssetDetails";

const AssetDetailsPage = () => {
  let query = useQuery();
  const [isLoading, setLoading] = useState(true);
  const [vocabData, setVocabData] = useState(null);

  useEffect(() => {
    const doSearch = async () => {
      if (!query.has("uri")) {
        return;
      }
      setLoading(true);
      const loadedData = await getSemanticAssetByUri(query.get("uri"));
      setVocabData(loadedData);
      setLoading(false);
    };
    doSearch();
  }, [query]);

  useEffect(() => {
    document.title = "Asset - Catalogo Nazionale Dati";
  });

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

    return <AssetDetails details={vocabData} />;
  };

  return (
    <div data-testid="AssetDetailsPage">
      {showErrors()}
      {showDetails()}
    </div>
  );
};

AssetDetailsPage.propTypes = {};

AssetDetailsPage.defaultProps = {};

export default AssetDetailsPage;
