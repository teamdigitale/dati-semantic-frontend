import { getHeroSpace } from "./imgHeroSpace";
import faq from "../assets/images/Schema_img_faq.png";
describe("imgHeroSpace", () => {
  describe(".getHeroSpace", () => {
    test("null url", () => {
      expect(getHeroSpace(undefined).alt).toEqual("");
      expect(getHeroSpace(null).alt).toEqual("");
      expect(getHeroSpace("").alt).toEqual("");
      expect(getHeroSpace(undefined).url).toEqual("");
      expect(getHeroSpace(null).url).toEqual("");
      expect(getHeroSpace("").url).toEqual("");
    });
    test("full url", () => {
      expect(getHeroSpace("faq").url).toEqual(faq);
      expect(getHeroSpace("faq").alt).toEqual("logo domande frequenti");
    });
    test("full url2", () => {
      expect(getHeroSpace("iniziativa").url).toEqual("");
      expect(getHeroSpace("iniziativa").alt).toEqual("");
    });
  });
});
