import styled from "styled-components";
import { theme } from "../../../style/Theme.styled";

export const PosterDetailStyled = styled.article`
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 2rem;
  align-items: start;

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const PosterDetailBodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const PosterDetailPriceStyled = styled.p`
  font-size: ${theme.fontSizes.h2};
  font-weight: ${theme.fontWeights.bold};
`;

export const PosterDetailButtonsStyled = styled.div`
  display: inline-flex;
  gap: 0.5rem;
  align-items: stretch;
`;
