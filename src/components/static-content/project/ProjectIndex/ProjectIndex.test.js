import { screen, fireEvent } from "@testing-library/react";
import { renderWithRoute } from "../../../../services/testUtils";
import ProjectIndex from "./ProjectIndex";

describe("<ProjectIndex />", () => {
  test("it should mount", async () => {
    renderWithRoute(<ProjectIndex />);
    const component = await screen.findByTestId("ProjectIndex");
    expect(component).toBeInTheDocument();
  });
  test("try if works correct function in IndexPage", async () => {
    let help = 0;
    const hh = () => {
      help = 2;
    };
    renderWithRoute(<ProjectIndex changeSection={() => hh()} />);
    const btn = await screen.findByTestId("ProjectIndexBtn");
    fireEvent.click(btn);
    expect(help).toBe(2);
    const btn2 = await screen.findByTestId("ProjectIndexBtn2");
    fireEvent.click(btn2);
    expect(help).toBe(2);
    const btn3 = await screen.findByTestId("ProjectIndexBtn3");
    fireEvent.click(btn3);
    expect(help).toBe(2);
    const btn4 = await screen.findByTestId("ProjectIndexBtn4");
    fireEvent.click(btn4);
    expect(help).toBe(2);
  });
});
