import { render, screen } from "@testing-library/react";
import PostItem from "../PostItem";

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
  id: "201",
  title: "Sample Post",
  desc: "This is a sample description",
};

describe("PostItem component", () => {
  it("renders post title", () => {
    render(<PostItem post={mockPost} />);
    expect(screen.getByText("Sample Post")).toBeInTheDocument();
  });

  it("renders post description", () => {
    render(<PostItem post={mockPost} />);
    expect(
      screen.getByText("This is a sample description")
    ).toBeInTheDocument();
  });

  it("renders post image with correct attributes", () => {
    render(<PostItem post={mockPost} />);
    const img = screen.getByAltText("Sample Post");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/assets/images/201.jpg");
    expect(img).toHaveAttribute("loading", "lazy");
    expect(img).toHaveAttribute("width", "350");
  });

  it("renders correct link for post", () => {
    render(<PostItem post={mockPost} />);
    const links = screen.getAllByRole("link");
    expect(links[0]).toHaveAttribute("href", "/posts/201"); // image link
    expect(links[1]).toHaveAttribute("href", "/posts/201"); // title link
  });

  it("renders post labels", () => {
    render(<PostItem post={mockPost} />);
    expect(screen.getByText("sport")).toBeInTheDocument();
    expect(screen.getByText("economic")).toBeInTheDocument();
  });
});
