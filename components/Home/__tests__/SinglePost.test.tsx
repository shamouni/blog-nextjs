import { render, screen } from "@testing-library/react";
import SinglePost from "../SinglePost";

// Mock next/link
jest.mock("next/link", () => {
  return ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
});

// Mock child components
jest.mock("../PostBox", () => ({ post }: any) => (
  <div data-testid="post-box">{post.title}</div>
));

jest.mock("../Heading", () => ({ title }: any) => <h2>{title}</h2>);

// mock data
const mockPost = {
  id: "10",
  title: "Main Post",
  summary: "This is a summary",
  body: "This is the full body of the post",
};

const mockRelated = [
  { id: "1", title: "Related 1" },
  { id: "2", title: "Related 2" },
];

describe("SinglePost component", () => {
  it("renders main post title, summary and body", () => {
    render(<SinglePost post={mockPost} relatedPosts={mockRelated} />);
    expect(screen.getByText("Main Post")).toBeInTheDocument();
    expect(screen.getByText("This is a summary")).toBeInTheDocument();
    expect(
      screen.getByText("This is the full body of the post")
    ).toBeInTheDocument();
  });

  it("renders main post image with correct attributes", () => {
    render(<SinglePost post={mockPost} relatedPosts={mockRelated} />);
    const img = screen.getByAltText("Main Post");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/assets/images/10.jpg");
    expect(img).toHaveClass("img-fluid");
  });

  it("renders Related heading and related posts", () => {
    render(<SinglePost post={mockPost} relatedPosts={mockRelated} />);
    expect(screen.getByText("Related")).toBeInTheDocument();
    const relatedBoxes = screen.getAllByTestId("post-box");
    expect(relatedBoxes).toHaveLength(mockRelated.length);
    expect(screen.getByText("Related 1")).toBeInTheDocument();
    expect(screen.getByText("Related 2")).toBeInTheDocument();
  });
});
