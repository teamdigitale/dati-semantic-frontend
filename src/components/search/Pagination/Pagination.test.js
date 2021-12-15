import { render, screen } from "@testing-library/react";
import Pagination from "./Pagination";
import userEvent from "@testing-library/user-event";

const onPageSelect = jest.fn();
describe("<Pagination/> should mount", () => {
  test("it should mount", () => {
    render(
      <Pagination
        page={{ offset: 0, totalCount: 5 }}
        filter={{}}
        onPageSelect={onPageSelect}
      />
    );

    const pagination = screen.getByTestId("pagination");

    expect(pagination).toBeInTheDocument();
    expect(screen.getByTestId("previous-page")).toBeInTheDocument();
    expect(screen.getByTestId("next-page").closest("li")).toHaveClass(
      "disabled"
    );
  });

  test("it should disable previous button when on first page", () => {
    render(
      <Pagination
        page={{ offset: 0, totalCount: 10 }}
        filter={{}}
        onPageSelect={onPageSelect}
      />
    );

    expect(screen.getByTestId("previous-page").closest("li")).toHaveClass(
      "disabled"
    );
  });

  test("it should disable next button when on last page", () => {
    render(
      <Pagination
        page={{ offset: 5, totalCount: 10 }}
        filter={{}}
        onPageSelect={onPageSelect}
      />
    );

    expect(screen.getByTestId("next-page").closest("li")).toHaveClass(
      "disabled"
    );
  });

  test("it should highlight current page and disable placeholder pages", () => {
    render(
      <Pagination
        page={{ offset: 5, totalCount: 10 }}
        filter={{}}
        onPageSelect={onPageSelect}
      />
    );
    const pageNumber1 = screen.getByTestId("page-1");
    const pageNumber2 = screen.getByTestId("page-2");
    const pageNumber3 = screen.getByTestId("page-3");

    expect(pageNumber1).toBeInTheDocument();
    expect(pageNumber2).toBeInTheDocument();
    expect(pageNumber3).toBeInTheDocument();
    expect(pageNumber3).toHaveClass("disabled");

    const page2Link = screen.getByText("2");
    expect(page2Link).toHaveAttribute("aria-current", "page");
  });

  test("it should display pagination for last page", () => {
    render(
      <Pagination
        page={{ offset: 15, totalCount: 20 }}
        filter={{}}
        onPageSelect={onPageSelect}
      />
    );
    const pageNumber1 = screen.getByTestId("page-2");
    const pageNumber2 = screen.getByTestId("page-3");
    const pageNumber3 = screen.getByTestId("page-4");

    expect(pageNumber1).toBeInTheDocument();
    expect(pageNumber2).toBeInTheDocument();
    expect(pageNumber3).toBeInTheDocument();
  });

  test("it should display pagination for center page", () => {
    render(
      <Pagination
        page={{ offset: 20, totalCount: 35 }}
        filter={{}}
        onPageSelect={onPageSelect}
      />
    );
    const pageNumberItem1 = screen.getByTestId("page-4");
    const pageNumberItem2 = screen.getByTestId("page-5");
    const pageNumberItem3 = screen.getByTestId("page-6");

    expect(pageNumberItem1).toBeInTheDocument();
    expect(pageNumberItem2).toBeInTheDocument();
    expect(pageNumberItem3).toBeInTheDocument();
  });

  test("it should move to previous page when click on previous button", () => {
    render(
      <Pagination
        page={{ offset: 10, totalCount: 25 }}
        filter={{}}
        onPageSelect={onPageSelect}
      />
    );

    userEvent.click(screen.getByTestId("previous-page"));

    expect(onPageSelect).toHaveBeenCalledWith({ offset: 5 });

    onPageSelect.mockClear();
    userEvent.click(screen.getByTestId("next-page"));
    expect(onPageSelect).toHaveBeenCalledWith({ offset: 15 });

    onPageSelect.mockClear();
    userEvent.click(screen.getByText("4"));
    expect(onPageSelect).toHaveBeenCalledWith({ offset: 15 });
  });
});
