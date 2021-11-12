import { search } from "./searchService";

describe("Search service", () => {
  test("should return all vocabularies", async () => {
    const items = await search();

    expect(items.length).toBe(38);
  });

  test("should find a vocabulary for 'Ripartizioni', looking for keyword", async () => {
    const items = await search({ pattern: "Ripartizioni" });

    expect(items.length).toBe(1);
    expect(items[0].dataset).toBe(
      "https://w3id.org/italia/controlled-vocabulary/territorial-classifications/geographical-distribution"
    );
  });

  test("should find a vocabulary for 'ripartizioni', making keyword lowercase", async () => {
    const items = await search({ pattern: "ripartizioni" });

    expect(items.length).toBe(1);
    expect(items[0].dataset).toBe(
      "https://w3id.org/italia/controlled-vocabulary/territorial-classifications/geographical-distribution"
    );
  });
  test("should find a vocabulary for 'generazione', searching in description", async () => {
    const items = await search({ pattern: "generazione" });

    expect(items.length).toBe(1);
    expect(items[0].dataset).toBe(
      "https://w3id.org/italia/controlled-vocabulary/territorial-classifications/cities"
    );
  });
});
