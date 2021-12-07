import { handleError } from "./fetchUtils";

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
});
