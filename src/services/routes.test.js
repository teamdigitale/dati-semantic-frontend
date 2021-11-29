import { routes } from "./routes";
import { AT_ONTOLOGY, AT_SCHEMA, AT_VOCABULARY } from "./dataConstants";

describe("Routes object", () => {
  beforeEach(() => {
    // whatever
  });

  describe("for search", () => {
    describe("create URL", () => {
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
        const searchRoute = routes.search({
          type: [AT_ONTOLOGY, AT_VOCABULARY],
        });

        expect(searchRoute).toMatch(/\/search\?.*/);
        expect(searchRoute).toContain(
          `type=${AT_ONTOLOGY}&type=${AT_VOCABULARY}`
        );
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
        const searchRoute = routes.search({
          pattern: "something with a space",
        });

        expect(searchRoute).toMatch(/\/search\?.*/);
        expect(searchRoute).toContain("pattern=something");
        expect(searchRoute).toContain("a+space");
      });
    });

    describe("parse URL", () => {
      test("should return a blank object for plain search URL", () => {
        const filter = routes.searchUrlToFilter("");

        expect(filter).toEqual({});
      });

      test("should return an object with string for search URL with single filter", () => {
        const filter = routes.searchUrlToFilter(`type=${AT_VOCABULARY}`);

        expect(filter).toEqual({
          type: AT_VOCABULARY,
        });
      });

      test("should return an object with array for search URL with filter with multiple values", () => {
        const filter = routes.searchUrlToFilter(
          `type=${AT_VOCABULARY}&type=${AT_ONTOLOGY}`
        );

        expect(filter).toEqual({
          type: [AT_VOCABULARY, AT_ONTOLOGY],
        });
      });

      test("should return a full object for search URL with three types of filters", () => {
        const filter = routes.searchUrlToFilter(
          `type=${AT_VOCABULARY}&theme=AGRI&pattern=abc`
        );

        expect(filter).toEqual({
          type: AT_VOCABULARY,
          theme: "AGRI",
          pattern: "abc",
        });
      });
    });
  });
});
