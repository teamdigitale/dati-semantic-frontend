import { resolveDelayed } from "./fakeDataUtils";
import { getVocabularyByUri as delegate } from "../assets/data/vocabularyMetadata";

export function getVocabularyByUri(uri) {
  return resolveDelayed(() => {
    return delegate(uri);
  }, 200);
}
