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

  it("should point to mountbank server in docker compose", () => {
    window.env = "dockerCompose";
    expect(baseUrl()).toBe("http://localhost:7002");
    window.env = null;
  });
});
