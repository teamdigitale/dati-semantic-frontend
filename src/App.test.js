import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Team Digitale title", () => {
  render(<App />);
  const linkElement = screen.getByText("Team Digitale");
  expect(linkElement).toBeInTheDocument();
});
