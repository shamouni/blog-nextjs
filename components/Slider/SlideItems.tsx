import Slide from "./Slide";
import { TSlideItem } from "./types";

type Props = {
  items: TSlideItem[];
  order: number | string;
  box?: "small" | "large";
};

const SlideItems = (props: Props) => {
  const { items = [], order, box = "small" } = props;
  const id = `${box}-${order}`;

  const { width, height, cls } =
    box === "small"
      ? { width: 575, height: 374, cls: "vert slider-vertical" }
      : { width: 960, height: 615, cls: "" };

  return (
    <div
      id={id}
      className={`carousel slide ${cls}`}
      data-order={order}
      data-interval="3500"
    >
      <div className="carousel-inner" role="listbox">
        {items.map((item, index) => (
          <Slide
            key={item.id}
            data={item}
            box={box}
            width={width}
            height={height}
            k={index}
          />
        ))}
      </div>

      <a
        className="control control-left"
        href={`#${id}`}
        data-slide="prev"
        data-testid="prev-slide"
      >
        <span className="fa fa-angle-left" />
      </a>
      <a
        className="control control-right"
        href={`#${id}`}
        data-slide="next"
        data-testid="next-slide"
      >
        <span className="fa fa-angle-right" />
      </a>

      <ol className="carousel-indicators">
        {items.map((_, index) => (
          <li
            key={index}
            data-target={`#${id}`}
            data-slide-to={index}
            className={index === 0 ? "active" : ""}
          />
        ))}
      </ol>
    </div>
  );
};

export default SlideItems;
