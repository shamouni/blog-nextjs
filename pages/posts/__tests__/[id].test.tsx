import { render, screen } from "@testing-library/react";
import Details from "../[id]";

jest.mock("../../../components/Home/SinglePost", () => ({
  __esModule: true,
  default: ({ post, relatedPosts }: any) => (
    <div>
      <div data-testid="post-title">{post.title}</div>
      {relatedPosts.map((r: any) => (
        <div key={r.id}>{r.title}</div>
      ))}
    </div>
  ),
}));

describe("Details page component", () => {
  const mockData = {
    post: { id: "1", title: "Main Post", summary: "", body: "" },
    related: [
      { id: "2", title: "Related 1" },
      { id: "3", title: "Related 2" },
    ],
  };

  it("renders SinglePost with data", () => {
    render(<Details data={mockData} />);

    expect(screen.getByTestId("post-title")).toHaveTextContent("Main Post");
    expect(screen.getByText("Related 1")).toBeInTheDocument();
    expect(screen.getByText("Related 2")).toBeInTheDocument();
  });
});
