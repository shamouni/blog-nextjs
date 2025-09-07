type TSlideBox = "large" | "small-1" | "small-2" | "small-3" | "small-4";

export type TSlideItem = {
  id: string | number;
  title: string;
  desc: string;
  video?: string;
  category: string;
  color: string;
  box: TSlideBox;
};