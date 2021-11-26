import { chunk } from "./arrayUtils";

describe("chunk", () => {
  test("should leave smaller array as it is", () => {
    const originalArray = ["a", "b", "c", "d"];
    const chunks = chunk(originalArray, 10);

    expect(Array.isArray(chunks)).toBeTruthy();
    expect(chunks.length).toBe(1);
    expect(chunks[0]).toEqual(originalArray);
  });

  test("should split array exactly", () => {
    const originalArray = ["a", "b", "c", "d"];
    const chunks = chunk(originalArray, 2);

    expect(Array.isArray(chunks)).toBeTruthy();
    expect(chunks.length).toBe(2);
    expect(chunks[0]).toEqual(["a", "b"]);
    expect(chunks[1]).toEqual(["c", "d"]);
  });

  test("should split array with rest", () => {
    const originalArray = ["a", "b", "c", "d"];
    const chunks = chunk(originalArray, 3);

    expect(Array.isArray(chunks)).toBeTruthy();
    expect(chunks.length).toBe(2);
    expect(chunks[0]).toEqual(["a", "b", "c"]);
    expect(chunks[1]).toEqual(["d"]);
  });
});
