import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";

// Mock next/link to behave like a normal <a>
jest.mock("next/link", () => {
  return ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
});

describe("Header component", () => {
  it("renders logo image", () => {
    render(<Header />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/assets/images/logo.png");
  });

  it("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Sport")).toHaveAttribute("href", "/posts");
    expect(screen.getByText("Economics")).toHaveAttribute("href", "/posts");
    expect(screen.getByText("Politics")).toHaveAttribute("href", "/posts");
  });

  it("renders dropdown with categories", () => {
    render(<Header />);
    expect(screen.getByText("Categories")).toBeInTheDocument();

    // Dropdown items
    expect(screen.getByText("Europe")).toHaveAttribute("href", "/posts");
    expect(screen.getByText("America")).toHaveAttribute("href", "/posts");
    expect(screen.getByText("Asian")).toHaveAttribute("href", "/posts");
  });
});
