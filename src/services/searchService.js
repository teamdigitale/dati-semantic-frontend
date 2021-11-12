/**
 *
 * @returns {Promise<unknown>}
 */
import { getVocabularyMetadata } from "../assets/data/vocabularyMetadata";

export async function search({ pattern = "" } = {}) {
  return new Promise((resolve) => {
    const timeout = Math.random() * 200;
    setTimeout(() => resolve(getVocabularyMetadata({ pattern })), timeout);
  });
}
