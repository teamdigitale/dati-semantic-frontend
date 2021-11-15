import { searchVocabularies } from "../assets/data/vocabularyMetadata";
import { searchOntologies } from "../assets/data/ontologyMetadata";
import { AT_ONTOLOGY, AT_VOCABULARY } from "./dataConstants";
import { resolveDelayed } from "./fakeDataUtils";

export function search(options = {}) {
  const defaultOptions = {
    pattern: "",
    type: "*",
    theme: "*",
  };

  options = { ...defaultOptions, ...options };
  const type = options.type;

  return resolveDelayed(() => {
    const includeType = (t) =>
      !type ||
      (Array.isArray(type) && (type.length === 0 || type.includes(t))) ||
      type === t ||
      type === "*";

    let vocabs = includeType(AT_VOCABULARY) ? searchVocabularies(options) : [];
    let ontos = includeType(AT_ONTOLOGY) ? searchOntologies(options) : [];

    return vocabs.concat(ontos).slice(0, 20);
  }, 300);
}
