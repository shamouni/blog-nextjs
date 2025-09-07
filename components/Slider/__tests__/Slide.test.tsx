import { render, screen } from "@testing-library/react";
import Slide from "../Slide";
import { TSlideItem } from "../types";

// Mock next/link
jest.mock("next/link", () => {
  return ({ href, children, ...rest }: any) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
});

// mock data
const mockImageSlide: TSlideItem = {
  id: "101",
  title: "Image Slide",
  desc: "This is an image slide",
  category: "sport",
  color: "red",
  box: "large",
};

describe("Slide component", () => {
  it("renders image when video is not provided", () => {
    render(
      <Slide data={mockImageSlide} box="large" width={600} height={400} k={0} />
    );
    const img = screen.getByAltText("Image Slide");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/assets/images/101.jpg");
  });

  it("renders title, description, and label", () => {
    render(
      <Slide data={mockImageSlide} box="large" width={600} height={400} k={0} />
    );
    expect(screen.getByText("Image Slide")).toBeInTheDocument();
    expect(screen.getByText("This is an image slide")).toBeInTheDocument();
    expect(screen.getByText("sport")).toBeInTheDocument();
  });

  it("applies active class for first slide", () => {
    render(
      <Slide data={mockImageSlide} box="large" width={600} height={400} k={0} />
    );
    const slideDiv = screen.getByText("Image Slide").closest(".carousel-item");
    expect(slideDiv).toHaveClass("active");
  });

  it("does not apply active class for non-first slides", () => {
    render(
      <Slide data={mockImageSlide} box="large" width={600} height={400} k={1} />
    );
    const slideDiv = screen.getByText("Image Slide").closest(".carousel-item");
    expect(slideDiv).not.toHaveClass("active");
  });

  it("renders link to post", () => {
    render(
      <Slide data={mockImageSlide} box="large" width={600} height={400} k={0} />
    );
    const link = screen.getAllByRole("link")[0]; // first <Link> tag
    expect(link).toHaveAttribute("href", "/posts/101");
  });
});
