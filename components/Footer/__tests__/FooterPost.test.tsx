import { render, screen } from "@testing-library/react";
import { TPost } from "@/components//Home/types";
import FooterPost from "../FooterPost";

// mock post data
const mockPost: TPost = {
  id: "123",
  title: "Test Post",
};

describe("FooterPost component", () => {
  it("renders post title", () => {
    render(<FooterPost post={mockPost} />);
    expect(screen.getByText("Test Post")).toBeInTheDocument();
  });

  it("renders link with correct href", () => {
    render(<FooterPost post={mockPost} />);
    const link = screen.getAllByRole("link")[0]; // first link (image link)
    expect(link).toHaveAttribute("href", "/posts/123");
  });

  it("renders image with correct alt text", () => {
    render(<FooterPost post={mockPost} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", "/assets/images/123.jpg");
    expect(image).toHaveAttribute("alt", "Test Post");
  });
});
