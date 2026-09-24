import { FormGroupStyled } from "./FormGroup.styled";
import type { FormGroupProps } from "./FormGroup.types";

export const FormGroup = ({ children, className }: FormGroupProps) => {
  return <FormGroupStyled className={className}>{children}</FormGroupStyled>;
};
