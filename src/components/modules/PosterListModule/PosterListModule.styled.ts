import styled from "styled-components";
import { theme } from "../../../style/Theme.styled";

export const PosterListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
