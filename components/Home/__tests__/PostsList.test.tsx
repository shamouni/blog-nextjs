import { render, screen } from "@testing-library/react";
import PostsList from "../PostsList";

// Mock next/link
jest.mock("next/link", () => {
  return ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
});

// Mock child components
jest.mock("../PostItem", () => ({ post }: any) => (
  <div data-testid="post-item">{post.title}</div>
));

jest.mock("../PostBox", () => ({ post }: any) => (
  <div data-testid="post-box">{post.title}</div>
));

jest.mock("../Pagination", () => ({ pages, page }: any) => (
  <div data-testid="pagination">
    Page {page} of {pages}
  </div>
));

jest.mock("../Heading", () => ({ title }: any) => <h2>{title}</h2>);

// mock data
const mockPosts = [
  { id: "1", title: "Post 1" },
  { id: "2", title: "Post 2" },
];

const mockTrends = [
  { id: "a", title: "Trend A" },
  { id: "b", title: "Trend B" },
];

describe("PostsList component", () => {
  it("renders headings", () => {
    render(
      <PostsList posts={mockPosts} trends={mockTrends} pages={3} page={1} />
    );
    expect(screen.getByText("Latest Posts")).toBeInTheDocument();
    expect(screen.getByText("Trends")).toBeInTheDocument();
  });

  it("renders the correct number of PostItem and PostBox components", () => {
    render(
      <PostsList posts={mockPosts} trends={mockTrends} pages={3} page={1} />
    );
    const postItems = screen.getAllByTestId("post-item");
    const postBoxes = screen.getAllByTestId("post-box");

    expect(postItems).toHaveLength(mockPosts.length);
    expect(postBoxes).toHaveLength(mockTrends.length);
  });

  it("renders Pagination with correct props", () => {
    render(
      <PostsList posts={mockPosts} trends={mockTrends} pages={5} page={2} />
    );
    expect(screen.getByTestId("pagination")).toHaveTextContent("Page 2 of 5");
  });
});
