import { LabelStyled } from "./Label.styled";
import type { LabelProps } from "./Label.types";

export const Label = ({ htmlFor, className, children }: LabelProps) => {
  return (
    <LabelStyled htmlFor={htmlFor} className={className}>
      {children}
    </LabelStyled>
  );
};
