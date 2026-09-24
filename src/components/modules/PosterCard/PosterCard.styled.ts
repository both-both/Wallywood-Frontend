import styled from "styled-components";
import { Container } from "../../elements/Container/Container";

export const PosterCardStyled = styled.article`
  display: grid;
  grid-template-columns: 165px 1fr;
  gap: 1rem;
  align-items: start;
`;

export const PosterCardBodyStyled = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const PosterCardActionsStyled = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-top: 1rem;
`;
