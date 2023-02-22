import { getHeroSpace } from "./imgHeroSpace";
import faq from "../assets/images/faq.svg";
describe("imgHeroSpace", () => {
  describe(".getHeroSpace", () => {
    test("null url", () => {
      expect(getHeroSpace(undefined)).toEqual(undefined);
      expect(getHeroSpace(null)).toEqual(undefined);
      expect(getHeroSpace("")).toEqual(undefined);
    });
    test("full url", () => {
      expect(getHeroSpace("faq")).toEqual(faq);
    });
    test("full url2", () => {
      expect(getHeroSpace("iniziativa")).toEqual(undefined);
    });
    test("full url3", () => {
      expect(getHeroSpace("/")).toEqual("home.svg");
    });
  });
});
