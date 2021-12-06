import { truncate } from "./stringUtils";

describe("stringUtils", () => {
  describe(".truncate", () => {
    test("should leave collapsed strings as they are", () => {
      expect(truncate(null)).toBeNull();
      expect(truncate(undefined)).toBeUndefined();
      expect(truncate("")).toEqual("");
    });

    test("should leave short strings as they are", () => {
      expect(truncate("123456789", 15)).toEqual("123456789");
    });

    test("should truncate strings with supplied trailing suffix", () => {
      expect(truncate("123456789", 6, "!")).toEqual("12345!");
    });

    test("should truncate strings with default trailing suffix", () => {
      expect(truncate("123456789", 6)).toEqual("123...");
    });
  });
});
