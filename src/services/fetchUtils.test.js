import { baseUrl, handleError } from "./fetchUtils";

describe("Handle Error", () => {
  it("should throw error", () => {
    expect(() =>
      handleError({
        ok: false,
        status: 404,
        statusText: "Not Found",
      })
    ).toThrow("Not Found");
  });

  it("should throw error when status text is empty", () => {
    expect(() =>
      handleError({
        ok: false,
        status: 404,
      })
    ).toThrow("Error while fetching data!");
  });

  it("should return response", () => {
    expect(() =>
      handleError({
        ok: true,
        status: 200,
        json: () => Promise.resolve({}),
      })
    ).not.toThrow();
  });

  it("must get baseUrl from env", () => {
    global.window._env_ = { API_URL: "http://some:8080" };
    expect(baseUrl()).toBe("http://some:8080");
    global.window._env_.API_URL = undefined;
  });
});
