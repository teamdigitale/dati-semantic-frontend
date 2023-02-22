import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import IntroSection from "./IntroSection";
import { routes } from "../../../services/routes";
const OLD_ENV = window?._env_;

describe("<ExplorePage />", () => {
  beforeEach(() => {
    jest.resetModules(); // Most important - it clears the cache
    window._env_ = { ...OLD_ENV }; // Make a copy
  });

  afterAll(() => {
    window._env_ = OLD_ENV; // Restore old environment
  });
  test("it should mount with an introduction text", () => {
    window._env_.NDC_MAINTENANCE_MESSAGE = "prova sa";
    render(
      <IntroSection
        title="DOMANDE FREQUENTI"
        subtitle="Esplora le risposte alle domande più frequenti"
        primaryButtonText="Scopri il progetto"
        primaryButtonLink={routes.project()}
        secondaryButtonText="Esplora il catalogo"
        secondaryButtonLink={routes.explore()}
        isSearch={false}
      />
    );

    const introduction = screen.getByTestId("Header");
    const messageAlert = screen.getByTestId("messageAlert");
    expect(messageAlert).toBeInTheDocument();
    expect(messageAlert).toContainHTML("prova sa");
    expect(introduction).toBeInTheDocument();
    expect(introduction).toContainHTML(
      "Esplora le risposte alle domande più frequenti"
    );
  });
});
