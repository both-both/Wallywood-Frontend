import styled from "styled-components";
import type { ContainerStyleProps } from "./Container.types";

export const ContainerStyled = styled.div<ContainerStyleProps>`
  background-color: ${({ $color }) => $color ?? "white"};
  max-width: ${({ $maxwidth }) => ($maxwidth ? `${$maxwidth}px` : "none")};
  margin-inline: auto;
  padding-inline: 2rem;
`;
