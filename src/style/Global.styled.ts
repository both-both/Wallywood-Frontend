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

#root {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
}


h1{
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.h1};
    color: ${theme.colors.primary};
    padding: 2rem 0;
}
h2{
    font-family: ${theme.fonts.primary};
    font-size: ${theme.fontSizes.h2};
}

img {
    width: 100%;
    height: auto;
    display: block;

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
