import styled from "styled-components";
import { theme } from "../../../style/Theme.styled";

export const InputStyled = styled.input`
  width: 100%;
  border: none;
  border-top: 1px solid ${theme.colors.tertiary};
  // viser secondary color i 4%
  background-color: color-mix(in srgb, ${theme.colors.secondary} 4%, white);
  padding: 0.5rem;
  font-family: inherit;
  font-size: ${theme.fontSizes.body};

  &:focus-visible {
    outline: 2px solid ${theme.colors.primary};
    outline-offset: 2px;
  }
`;
