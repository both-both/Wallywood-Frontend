import styled from "styled-components";
import { theme } from "../../style/Theme.styled";

export const PosterPageStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 2rem;

  > *:first-child {
    border-right: 1px solid ${theme.colors.secondary};
    padding-right: 2rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr 2fr;
    gap: 1rem;

    > *:first-child {
      border-right: none;
      padding-right: 1rem;
    }
  }
`;
