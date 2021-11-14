import { getVocabularyByUri } from "./vocabService";

describe("Vocab service", () => {
  test("should vocabulary, by its URI", async () => {
    const uri =
      "https://w3id.org/italia/controlled-vocabulary/classifications-for-culture/cultural-interest-places";
    const vocab = await getVocabularyByUri(uri);

    expect(vocab).toBeTruthy();
    expect(vocab.uri).toBe(uri);
  });
});
