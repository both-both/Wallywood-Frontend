import { ContainerStyled } from "./Container.styled";
import type { ContainerProps } from "./Container.types";

export const Container = ({
  innerHTML = "div",
  className,
  children,
  title,
  color,
  maxwidth,
}: ContainerProps) => {
  return (
    <ContainerStyled
      as={innerHTML}
      className={className}
      title={title}
      $color={color}
      $maxwidth={maxwidth}
    >
      {children}
    </ContainerStyled>
  );
};
