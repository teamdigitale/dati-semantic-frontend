import { baseUrl } from "./env";

describe("env", () => {
  it("should get default baseUrl", () => {
    expect(baseUrl()).toBe("");
  });

  it("should get dev baseUrl", () => {
    window.env = "dev";
    expect(baseUrl()).toBe("/api");
    window.env = null;
  });
});
