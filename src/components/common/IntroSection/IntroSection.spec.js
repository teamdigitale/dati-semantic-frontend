import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import IntroSection from "./IntroSection";
import { routes } from "../../../services/routes";

describe("<ExplorePage />", () => {
  test("it should mount with an introduction text", () => {
    render(
      <IntroSection
        title="DOMANDE FREQUENTI"
        subtitle="Esplora le risposte alle domande più frequenti"
        primaryButtonText="Scopri il progetto"
        primaryButtonLink={routes.explore()}
        secondaryButtonText="Esplora il catalogo"
        secondaryButtonLink={routes.explore()}
      />
    );

    const introduction = screen.getByTestId("Header");

    expect(introduction).toBeInTheDocument();
    expect(introduction).toContainHTML(
      "Esplora le risposte alle domande più frequenti"
    );
  });
});
