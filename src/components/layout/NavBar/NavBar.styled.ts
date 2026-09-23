import styled from "styled-components";
import { resetLink } from "../../../style/mixin";
import { theme } from "../../../style/Theme.styled";

export const NavBarStyled = styled.nav`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;

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
`;
