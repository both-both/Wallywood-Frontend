import styled from "styled-components";
import { resetButton } from "../../../style/mixin";
import { theme } from "../../../style/Theme.styled";

export const ButtonStyled = styled.button`
  ${resetButton}
  background-color: ${theme.colors.tertiary};
  border: 1px solid ${theme.colors.grey};
  border-radius: 3px;
  font-size: ${theme.fontSizes.medium};
  padding: 0.5rem 1rem;
  color: ${theme.colors.black};
  transition:
    background-color 0.2s,
    color 0.2s;

  &:hover {
    background-color: ${theme.colors.primary};
  }

  &:active {
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  }

  &:focus-visible {
    outline: 2px solid ${theme.colors.secondary};
    outline-offset: 2px;
  }
`;

export const IconButtonStyled = styled(ButtonStyled)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  font-size: 1.5rem;

  @media (hover: hover) {
    &:hover {
      background-color: ${theme.colors.primary};
    }
  }
`;
