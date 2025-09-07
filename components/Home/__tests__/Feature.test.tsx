import { render, screen } from "@testing-library/react";
import Feature from "../Feature";

// Mock next/link
jest.mock("next/link", () => {
  return ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
});

describe("Feature component", () => {
  const mockData = [
    { id: "1", title: "First Post" },
    { id: "2", title: "Second Post" },
  ];

  it("renders section heading", () => {
    render(<Feature data={mockData} />);
    expect(screen.getByText("Feature Posts")).toBeInTheDocument();
  });

  it("renders posts based on provided data", () => {
    render(<Feature data={mockData} />);
    expect(screen.getByText("First Post")).toBeInTheDocument();
    expect(screen.getByText("Second Post")).toBeInTheDocument();
  });

  it("renders post images with correct attributes", () => {
    render(<Feature data={mockData} />);
    const image = screen.getByAltText("First Post");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/assets/images/1.jpg");
    expect(image).toHaveAttribute("loading", "lazy");
  });

  it("renders links with correct href", () => {
    render(<Feature data={mockData} />);
    const link = screen.getByText("First Post").closest("a");
    expect(link).toHaveAttribute("href", "/posts/1");
  });

  it("renders correct number of posts", () => {
    render(<Feature data={mockData} />);
    const posts = screen.getAllByRole("img"); // each post has one image
    expect(posts).toHaveLength(mockData.length);
  });
});
