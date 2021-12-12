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
});
