import { getCategories } from "./categories";

describe("Category data", () => {
  test("should have 13 entries", () => {
    let categories = getCategories();

    expect(categories.length).toBe(13);
  });

  test("should contain environment, with its images", () => {
    const environment = getCategories().find(
      (t) => t.key.toLowerCase() === "envi"
    );

    expect(environment).toBeTruthy();
    expect(environment.label).toBe("Ambiente");
    expect(environment.idleImg).not.toContain("hover");
    expect(environment.hoverImg).toContain("hover");
  });
});
