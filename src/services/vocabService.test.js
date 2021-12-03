import { getSemanticAssetByUri } from "./vocabService";

let fetchMock;

beforeEach(() => {
  fetchMock = jest.spyOn(global, "fetch").mockResolvedValue({
    json: jest.fn().mockResolvedValue({ assetIri: "https://w3id.org/id" }),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe("Vocab service", () => {
  test("should vocabulary, by its URI", async () => {
    const assetIri = "https://w3id.org/id";
    const vocab = await getSemanticAssetByUri(assetIri);

    expect(fetchMock).toHaveBeenCalledWith(
      "/semantic-assets/byIri?iri=" + assetIri
    );
    expect(vocab).toBeTruthy();
    expect(vocab.assetIri).toBe(assetIri);
  });
});
