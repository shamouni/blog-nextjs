import { render, screen } from "@testing-library/react";
import Posts from "@/pages/posts/index";
import { TPost } from "@/components/Home/types";

// Mock PostsList to render the posts' titles
jest.mock("../components/Home/PostsList", () => ({
  __esModule: true,
  default: ({ posts, trends }: { posts: TPost[]; trends: TPost[] }) => (
    <div>
      {posts.map((p) => (
        <div key={p.id}>{p.title}</div>
      ))}
      {trends.map((t) => (
        <div key={t.id}>{t.title}</div>
      ))}
    </div>
  ),
}));

describe("Posts page component", () => {
  const mockData = {
    posts: [{ id: "1", title: "Post 1" }],
    trends: [{ id: "2", title: "Trend 1" }],
    pages: 3,
    page: 1,
  };

  it("renders posts and trends", () => {
    render(<Posts data={mockData} />);

    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Trend 1")).toBeInTheDocument();
  });
});
