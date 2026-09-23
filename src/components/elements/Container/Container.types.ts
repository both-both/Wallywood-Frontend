export type ContainerTag =
  | "div"
  | "section"
  | "fielsdset"
  | "figure"
  | "main"
  | "article";

export type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  innerHTML?: ContainerTag;
  title?: string;
  color?: string;
  maxwidth?: number;
};
export type ContainerStyleProps = {
  $color?: string;
  $maxwidth?: number;
};
