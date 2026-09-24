import styled from "styled-components";
import { theme } from "../../../style/Theme.styled";

export const PosterGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
