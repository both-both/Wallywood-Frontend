import styled from "styled-components";
import { Link } from "react-router-dom";
import { pageWidth, resetLink } from "../../../style/mixin";
import { theme } from "../../../style/Theme.styled";

export const HeaderStyled = styled.header`
  ${pageWidth}
  background-color: ${theme.colors.white};
  padding-inline: 2rem;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1rem;
    border-bottom: 1px solid ${theme.colors.secondary};
  }
`;

export const LogoStyled = styled(Link)`
  ${resetLink}
  font-size: ${theme.fontSizes.logo};
  font-weight: ${theme.fontWeights.black};
  color: ${theme.colors.primary};
  text-transform: uppercase;
`;
