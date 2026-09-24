import styled from "styled-components";
import { resetButton, resetLink } from "../../../style/mixin";
import { theme } from "../../../style/Theme.styled";

export const NavBarStyled = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;
  position: relative;

  a {
    ${resetLink}
    font-weight: ${theme.fontWeights.light};
    font-size: ${theme.fontSizes.navigation};
    color: ${theme.colors.black};
    text-transform: uppercase;
  }

  a.active {
    color: ${theme.colors.primary};
  }

  .cart-link {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 1.5rem;
  }

  .cart-count {
    font-size: ${theme.fontSizes.body};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BurgerButtonStyled = styled.button`
  ${resetButton}
  display: none;
  font-size: 2rem;
  color: ${theme.colors.black};

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
  }
`;

export const NavLinksStyled = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${theme.breakpoints.mobile}) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    position: absolute;
    top: 100%;
    right: 0;
    z-index: 10;

    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.tertiary};
    padding: 1.5rem 2rem;
  }
`;
