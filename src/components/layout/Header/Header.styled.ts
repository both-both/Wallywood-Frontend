import styled from "styled-components";
import { Container } from "../../elements/Container/Container";
import { theme } from "../../../style/Theme.styled";
import { Link } from "react-router-dom";
import { resetLink } from "../../../style/mixin";

export const HeaderStyled = styled(Container)`
  background-color: ${({ theme }) => theme.colors.white};
  padding-inline: 2rem;
`;

export const HeaderInnerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem;
  border-bottom: 2px solid ${theme.colors.secondary};
`;

export const LogoStyled = styled(Link)`
  ${resetLink}
  font-size: ${theme.fontSizes.logo};
  font-weight: ${theme.fontWeights.black};
  color: ${theme.colors.primary};
  text-transform: uppercase;
`;
