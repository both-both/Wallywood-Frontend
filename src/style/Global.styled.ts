import { createGlobalStyle } from "styled-components";
import { reset } from "./mixin";
import { theme } from "./Theme.styled";

export const GlobalStyle = createGlobalStyle`
* {
    ${reset}
}

body {
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.body};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.black};
}

h1{
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.h1};
}
h2, h{
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.h2};
}

img {
    width: 100%;
}

.footer-heading {
    font-size: ${theme.fontSizes.medium};
    font-weight: ${theme.fontWeights.bold};
    text-transform: uppercase;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {

    .section-heading{
        font-size: ${theme.fontSizes.mobileHeading};
    }
  }

`;
