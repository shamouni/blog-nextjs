import { render, screen } from "@testing-library/react";
import dataMock from "@/pages/api/data-mock.json";
import Footer from "../Footer";

describe("Footer component", () => {
  it("renders all section headings", () => {
    render(<Footer />);

    expect(screen.getByText("Latest")).toBeInTheDocument();
    expect(screen.getByText("Trends")).toBeInTheDocument();
    expect(screen.getByText("Categories")).toBeInTheDocument();
    expect(screen.getByText("Tags")).toBeInTheDocument();
  });

  it("renders latest posts", () => {
    render(<Footer />);
    const posts = screen.getAllByTestId("footer");
    expect(posts.length).toBeGreaterThanOrEqual(1);
  });

  it("renders categories correctly", () => {
    render(<Footer />);
    expect(screen.getByText("Sport")).toBeInTheDocument();
    expect(screen.getByText("Economics")).toBeInTheDocument();
    expect(screen.getByText("Politics")).toBeInTheDocument();
    expect(screen.getByText("Europe")).toBeInTheDocument();
  });

  it("renders tags correctly", () => {
    render(<Footer />);
    expect(screen.getByText("Footbal")).toBeInTheDocument();
  });

  it("renders footer bottom text", () => {
    render(<Footer />);
    expect(screen.getByText(/©2022 All Rights Reserved/i)).toBeInTheDocument();
  });
});
