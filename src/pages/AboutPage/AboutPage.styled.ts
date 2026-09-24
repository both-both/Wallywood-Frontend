import styled from "styled-components";

export const AboutPageStyled = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 296px;
  gap: 2.5rem;
  align-items: start;

  p + p {
    margin-block-start: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;
