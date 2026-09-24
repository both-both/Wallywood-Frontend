import { ContainerStyled } from "./Container.styled";
import type { ContainerProps } from "./Container.types";

// innerHTML vælger hvilken tag der rendes className bærer stylingen
export const Container = ({
  innerHTML = "div",
  className,
  children,
  title,
  color,
}: ContainerProps) => {
  return (
    <ContainerStyled
      as={innerHTML}
      className={className}
      title={title}
      $color={color}
    >
      {children}
    </ContainerStyled>
  );
};
