import { routes } from "./routes";
import { AT_ONTOLOGY, AT_SCHEMA, AT_VOCABULARY } from "./dataConstants";

describe("Routes object", () => {
  beforeEach(() => {
    // whatever
  });

  test("should return a simple search URL", () => {
    const searchRoute = routes.search();

    expect(searchRoute).toBe("/search");
  });

  test("should return a search URL with a single type", () => {
    const searchRoute = routes.search({ type: AT_ONTOLOGY });

    expect(searchRoute).toMatch(/\/search\?.*/);
    expect(searchRoute).toContain(`type=${AT_ONTOLOGY}`);
  });

  test("should return a search URL with multiple types", () => {
    const searchRoute = routes.search({ type: [AT_ONTOLOGY, AT_VOCABULARY] });

    expect(searchRoute).toMatch(/\/search\?.*/);
    expect(searchRoute).toContain(`type=${AT_ONTOLOGY}&type=${AT_VOCABULARY}`);
  });

  test("should return a search URL with a single theme", () => {
    const searchRoute = routes.search({ theme: "ECON" });

    expect(searchRoute).toMatch(/\/search\?.*/);
    expect(searchRoute).toContain("theme=ECON");
  });

  test("should return a search URL with multiple themes", () => {
    const searchRoute = routes.search({ theme: ["ECON", "AGRI"] });

    expect(searchRoute).toMatch(/\/search\?.*/);
    expect(searchRoute).toContain("theme=ECON&theme=AGRI");
  });

  test("should return a search URL with themes and a type", () => {
    const searchRoute = routes.search({
      theme: ["ECON", "AGRI"],
      type: AT_SCHEMA,
    });

    expect(searchRoute).toMatch(/\/search\?.*/);
    expect(searchRoute).toContain("theme=ECON&theme=AGRI");
    expect(searchRoute).toContain(`type=${AT_SCHEMA}`);
  });

  test("should return a search URL with pattern", () => {
    const searchRoute = routes.search({ pattern: "something with a space" });

    expect(searchRoute).toMatch(/\/search\?.*/);
    expect(searchRoute).toContain("pattern=something");
    expect(searchRoute).toContain("a+space");
  });
});
