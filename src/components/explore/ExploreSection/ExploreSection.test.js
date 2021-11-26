import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ExploreSection from "./ExploreSection";

describe("<ExploreSection />", () => {
  test("it should show the title", () => {
    render(
      <ExploreSection title="Section Title">
        <div>Some content</div>
      </ExploreSection>
    );

    const title = screen.getByText("Section Title");

    expect(title).toBeInTheDocument();
  });

  test("it should display the child component", () => {
    const ChildComponent = () => <div>Some child component</div>;

    render(
      <ExploreSection title="Section Title">
        <ChildComponent />
      </ExploreSection>
    );

    const innerDiv = screen.getByText("Some child component");
    expect(innerDiv).toBeInTheDocument();
  });
});
