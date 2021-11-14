import { render } from "@testing-library/react";
import App from "./App";
import Header from "./components/layout/Header/Header";
import Main from "./components/layout/Main/Main";

jest.mock("./components/layout/Header/Header", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("./components/layout/Main/Main", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("The NDC App", () => {
  beforeEach(() => {
    Header.mockReturnValue(<div>Header</div>);
    Main.mockReturnValue(<div>Main body</div>);
  });

  test("renders a header", () => {
    render(<App />);

    expect(Header).toHaveBeenCalled();
  });

  test("renders the body", () => {
    render(<App />);

    expect(Main).toHaveBeenCalled();
  });
});
