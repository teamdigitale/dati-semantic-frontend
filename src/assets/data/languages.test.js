import { getLanguageLabel } from "./languages";

describe("laguages", () => {
  test("should return italian label", () => {
    expect(
      getLanguageLabel(
        "http://publications.europa.eu/resource/authority/language/ITA"
      )
    ).toBe("Italiano");
    expect(
      getLanguageLabel(
        "http://publications.europa.eu/resource/authority/language/ENG"
      )
    ).toBe("Inglese");
  });

  test("should return last segment of iri when language is unknown", () => {
    expect(
      getLanguageLabel(
        "http://publications.europa.eu/resource/authority/language/HIN"
      )
    ).toBe("HIN");
  });
});
