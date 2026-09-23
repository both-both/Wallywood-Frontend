import styled from "styled-components";
import { Container } from "../../elements/Container/Container";
import { theme } from "../../../style/Theme.styled";
import { Link } from "react-router-dom";
import { resetLink } from "../../../style/mixin";

export const HeaderInnerStyled = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LogoStyled = styled(Link)`
  ${resetLink}
  font-size: ${theme.fontSizes.logo};
  font-weight: ${theme.fontWeights.black};
  color: ${theme.colors.primary};
  text-transform: uppercase;
`;
