import styled from "styled-components";
import { pageWidth } from "../../../style/mixin";
import { theme } from "../../../style/Theme.styled";

export const FooterStyled = styled.footer`
  ${pageWidth}
  background-color: ${theme.colors.white};
  padding-inline: 2rem;
  padding-block-start: 3rem;

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-block: 1.5rem 2rem;
    border-top: 1px solid ${theme.colors.secondary};
  }

  .contact-info-container {
    display: flex;
    flex: 1;
    max-width: 40%;
    justify-content: space-between;
  }

  h3 {
    color: ${theme.colors.primary};
    text-transform: uppercase;
    font-size: ${theme.fontSizes.medium};
    font-weight: ${theme.fontWeights.bold};
  }

  .soMe-container {
    display: flex;
    gap: 1rem;
    font-size: 1.75rem;

    a {
      display: flex;
      color: ${theme.colors.tertiary};
    }
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding-inline: 1rem;
    padding-block-start: 2rem;

    .footer-content {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 1.5rem;
    }

    .contact-info-container {
      grid-column: 1;
      max-width: 100%;
      flex-direction: column;
      gap: 1rem;
    }

    .soMe-container {
      grid-column: 2;
      grid-row: 1;
    }
  }
`;
