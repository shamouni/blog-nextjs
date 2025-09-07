import { render, screen } from "@testing-library/react";
import Pagination from "../Pagination";

// Mock next/link
jest.mock("next/link", () => {
  return ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
});

describe("Pagination component", () => {
  it("does not render when pages <= 1", () => {
    const { container } = render(<Pagination pages={1} page={1} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders page numbers", () => {
    render(<Pagination pages={3} page={1} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("marks the active page", () => {
    render(<Pagination pages={3} page={2} />);
    const activePage = screen.getByText("2").closest("li");
    expect(activePage).toHaveClass("active");
    expect(activePage).toHaveAttribute("aria-current", "page");
  });

  it("disables Previous button on first page", () => {
    render(<Pagination pages={3} page={1} />);
    const prev = screen.getByText("Previous").closest("li");
    expect(prev).toHaveClass("disabled");
  });

  it("disables Next button on last page", () => {
    render(<Pagination pages={3} page={3} />);
    const next = screen.getByText("Next").closest("li");
    expect(next).toHaveClass("disabled");
  });

  it("renders correct hrefs", () => {
    render(<Pagination pages={3} page={2} />);
    expect(screen.getByText("Previous").closest("a")).toHaveAttribute(
      "href",
      "?page=1"
    );
    expect(screen.getByText("1").closest("a")).toHaveAttribute(
      "href",
      "?page=1"
    );
    expect(screen.getByText("2").closest("a")).toHaveAttribute(
      "href",
      "?page=2"
    );
    expect(screen.getByText("3").closest("a")).toHaveAttribute(
      "href",
      "?page=3"
    );
    expect(screen.getByText("Next").closest("a")).toHaveAttribute(
      "href",
      "?page=3"
    );
  });
});
