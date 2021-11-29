import { getVocabularyByUri } from "./vocabService";

let fetchMock;

beforeEach(() => {
  fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue({ iri: "https://w3id.org/id" }),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Vocab service", () => {
  test("should vocabulary, by its URI", async () => {
    const iri = "https://w3id.org/id";
    const vocab = await getVocabularyByUri(iri);

    expect(fetchMock).toHaveBeenCalledWith(
      "/semantic-assets/details?iri=" + iri
    );
    expect(vocab).toBeTruthy();
    expect(vocab.iri).toBe(iri);
  });
});
