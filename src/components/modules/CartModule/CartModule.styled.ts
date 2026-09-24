import styled from "styled-components";
import { resetList } from "../../../style/mixin";
import { theme } from "../../../style/Theme.styled";

export const CartListStyled = styled.ul`
  ${resetList}
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CartLineStyled = styled.li`
  display: grid;
  grid-template-columns: 140px 1fr auto;
  gap: 1.5rem;
  align-items: center;
  border-bottom: 1px solid ${theme.colors.tertiary};
  padding-block-end: 1.5rem;

  button {
    align-self: end;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 90px 1fr;
    gap: 0.5rem 1rem;

    img {
      grid-row: 1 / -1;
    }
  }
`;

export const CartTotalStyled = styled.p`
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.h2};
  text-align: right;
`;
