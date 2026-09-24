import type { ButtomProps } from "./Button.types";
import { ButtonStyled } from "./Button.styled";

export const Button = ({
  textValue,
  onClick,
  type,
  className,
  ariaLabel,
}: ButtomProps) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
    >
      {textValue}
    </ButtonStyled>
  );
};
