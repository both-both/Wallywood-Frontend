import type { ReactNode } from "react";

export type ButtomProps = {
  textValue?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
};
