import SlideItems from "./SlideItems";
import { TSlideItem } from "./types";

type SliderProps = {
  data?: TSlideItem[];
};

const Slider = ({ data = [] }: SliderProps) => {
  // Group items dynamically
  const grouped: Record<string, TSlideItem[]> = data.reduce((acc, item) => {
    const key = item.box || "small"; // fallback
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {} as Record<string, TSlideItem[]>);

  // Small boxes configuration
  const smallBoxes = [
    {
      key: "small-1",
      order: 2,
      className:
        "col-md-6 col-sm-6 col-6 col-12 h-50 brd-right brd-right-sm brd-bottom brd-bottom-sm",
    },
    {
      key: "small-2",
      order: 3,
      className: "col-md-6 col-sm-6 col-12 h-50 brd-bottom brd-bottom-sm",
    },
    {
      key: "small-3",
      order: 4,
      className:
        "col-md-6 col-sm-6 col-6 col-12 h-50 brd-right brd-right-sm brd-bottom-sm",
    },
    {
      key: "small-4",
      order: 5,
      className: "col-md-6 col-sm-6 col-6 col-12 h-50 brd-bottom-sm",
    },
  ];

  return (
    <div
      id="slider"
      className="slider slider-modern box-5-left box5-right modern_slider border-yes brd-5 brd-light"
    >
      <div className="container-fluid px-0">
        <div className="row">
          {/* Large Box */}
          <div className="col box-large col-lg-6 col-md-12 col-sm-12 col-12 brd-bottom-sm">
            <SlideItems items={grouped.large || []} order={1} box="large" />
          </div>

          {/* Small Boxes */}
          <div className="col col-small col-lg-6 col-md-12 col-sm-12 col-12 brd-left">
            <div className="row no-gutters">
              {smallBoxes.map(({ key, order, className }) => (
                <div key={key} className={className}>
                  <SlideItems items={grouped[key] || []} order={order} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
