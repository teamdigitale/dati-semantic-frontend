import { getFrequencies, getFrequencyLabel } from "./accrualPeriodicity";

describe("Category data", () => {
  test("should return all accrualPeriodicity", function () {
    let frequencies = getFrequencies();
    expect(frequencies.length).toBe(31);
  });

  test("should return accrual periodicity with labels", function () {
    let frequencies = getFrequencies();
    let daily = frequencies.find(
      (f) =>
        f.iri ===
        "http://publications.europa.eu/resource/authority/frequency/DAILY"
    );
    expect(daily).toBeTruthy();
    expect(daily.label_en).toBe("Daily");
    expect(daily.label_it).toBe("Quotidiano");
  });

  test("should return accrual periodicity by iri", function () {
    let label = getFrequencyLabel(
      "http://publications.europa.eu/resource/authority/frequency/DAILY"
    );
    expect(label).toBe("Quotidiano");
  });
});
