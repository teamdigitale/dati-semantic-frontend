/**
 *
 * @returns {Promise<unknown>}
 */
import { getVocabularyMetadata } from "../assets/data/vocabularyMetadata";
import { getOntologyMetadata } from "../assets/data/ontologyMetadata";
import { AT_ONTOLOGY, AT_VOCABULARY } from "./dataConstants";

export async function search({ pattern = "", type = "" } = {}) {
  return new Promise((resolve) => {
    let vocabs =
      type === AT_VOCABULARY ? getVocabularyMetadata({ pattern }) : [];
    let ontos = type === AT_ONTOLOGY ? getOntologyMetadata({ pattern }) : [];

    const timeout = Math.random() * 200;
    setTimeout(() => resolve(vocabs.concat(ontos)), timeout);
  });
}
