import { baseUrl, handleError } from "./fetchUtils";

describe("Handle Error", () => {
  it("should throw error", () => {
    expect(() =>
      handleError({
        ok: false,
        status: 404,
        statusText: "Not Found",
      })
    ).toThrowError("Not Found");
  });

  it("should return response", () => {
    expect(() =>
      handleError({
        ok: true,
        status: 200,
        json: () => Promise.resolve({}),
      })
    ).not.toThrowError();
  });

  it("must get baseUrl from env", () => {
    global.window._env_ = { API_URL: "http://some:8080" };
    expect(baseUrl()).toBe("http://some:8080");
    global.window._env_.API_URL = undefined;
  });
});
