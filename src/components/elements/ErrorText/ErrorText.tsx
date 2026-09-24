import { ErrorTextStyled } from "./ErrorText.styled";
import type { ErrorTextProps } from "./ErrorText.types";

export const ErrorText = ({ children }: ErrorTextProps) => {
  return <ErrorTextStyled>{children}</ErrorTextStyled>;
};
