import { resolveDelayed } from "./fakeDataUtils";
import { getVocabularyByUri as delegate } from "../assets/data/vocabularyMetadata";
import { ASSETS_VOCABULARIES_FULL_URL } from "./routes";

export function getVocabularyByUri(uri) {
  return resolveDelayed(() => {
    return delegate(uri);
  }, 200);
}

export function getVocabularyUrl(uri) {
  return `${ASSETS_VOCABULARIES_FULL_URL}?uri=${encodeURIComponent(uri)}`;
}
