import { render, screen } from "@testing-library/react";
import PostBox from "../PostBox";

// Mock next/link
jest.mock("next/link", () => {
  return ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
});

// mock post data
const mockPost = {
  id: "101",
  title: "Test Post",
};

describe("PostBox component", () => {
  it("renders post title", () => {
    render(<PostBox post={mockPost} />);
    expect(screen.getByText("Test Post")).toBeInTheDocument();
  });

  it("renders post image with correct attributes", () => {
    render(<PostBox post={mockPost} />);
    const img = screen.getByAltText("Test Post");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/assets/images/101.jpg");
    expect(img).toHaveAttribute("loading", "lazy");
  });

  it("renders link to post", () => {
    render(<PostBox post={mockPost} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/posts/101");
  });
});
