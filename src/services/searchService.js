import { searchVocabularies } from "../assets/data/vocabularyMetadata";
import { searchOntologies } from "../assets/data/ontologyMetadata";
import { AT_ONTOLOGY, AT_VOCABULARY } from "./dataConstants";
import { resolveDelayed } from "./fakeDataUtils";

export function search({ pattern = "", type = "" } = {}) {
  return resolveDelayed(() => {
    let vocabs = type === AT_VOCABULARY ? searchVocabularies({ pattern }) : [];
    let ontos = type === AT_ONTOLOGY ? searchOntologies({ pattern }) : [];

    return vocabs.concat(ontos);
  }, 300);
}
