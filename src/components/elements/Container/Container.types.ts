export type ContainerTag =
  | "div"
  | "section"
  | "fieldset"
  | "figure"
  | "main"
  | "article";

export type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  innerHTML?: ContainerTag;
  title?: string;
  color?: string;
};
export type ContainerStyleProps = {
  $color?: string;
};
