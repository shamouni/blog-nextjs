import Link from "next/link";
import { TSlideItem } from "./types";

interface ISlideProps {
  data: TSlideItem;
  box: "small" | "large";
  width: number;
  height: number;
  k: number;
}

const Slide = (props: ISlideProps) => {
  const { data, box, width, height, k } = props;
  const { id, title, desc, video, category, color } = data;
  const path = "/assets/images/";

  return (
    <div
      className={`carousel-item box box-${box} ${k === 0 ? "active" : ""}`}
      key={k}
    >
      {!video ? (
        <img
          width={width}
          height={height}
          src={`${path}${id}.jpg`}
          alt={title}
        />
      ) : (
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          loop
          playsInline
          src={`${path}${video}`}
        />
      )}

      <Link href={`/posts/${id}`} className="link" />

      <div className="text">
        <div className="labels">
          <span className={`lbl ${color}`}>{category}</span>
        </div>
        <h3 className="bold">
          <Link href={`/posts/${id}`}>{title}</Link>
        </h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Slide;
