import { render, screen } from "@testing-library/react";
import SlideItems from "../SlideItems";
import { TSlideItem } from "../types";

// Mock Slide component
jest.mock("../Slide", () => ({ data }: any) => (
  <div data-testid="slide">{data.title}</div>
));

describe("SlideItems component", () => {
  const mockItems: TSlideItem[] = [
    {
      id: "1",
      box: "large",
      title: "Slide 1",
      desc: "Desc 1",
      category: "sport",
      color: "red",
      video: null,
    },
    {
      id: "2",
      box: "small-1",
      title: "Slide 2",
      desc: "Desc 2",
      category: "tech",
      color: "green",
      video: null,
    },
  ];

  it("renders all Slide components", () => {
    render(<SlideItems items={mockItems} order={1} box="small" />);
    const slides = screen.getAllByTestId("slide");
    expect(slides).toHaveLength(mockItems.length);
    expect(screen.getByText("Slide 1")).toBeInTheDocument();
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
  });

  it("renders prev and next controls", () => {
    render(<SlideItems items={mockItems} order={1} />);
    const prev = screen.getByTestId("prev-slide");
    const next = screen.getByTestId("next-slide");
    expect(prev).toBeInTheDocument();
    expect(next).toBeInTheDocument();
  });

  it("renders carousel indicators correctly", () => {
    render(<SlideItems items={mockItems} order={1} />);
    const indicators = screen.getAllByRole("listitem");
    expect(indicators).toHaveLength(mockItems.length);
    expect(indicators[0]).toHaveClass("active");
  });

  it("applies correct id and classes based on box and order", () => {
    const { container } = render(
      <SlideItems items={mockItems} order={2} box="large" />
    );
    const carousel = container.querySelector(".carousel");
    expect(carousel).toHaveAttribute("id", "large-2");
    expect(carousel).not.toHaveClass("vert slider-vertical"); // large box
  });
});
