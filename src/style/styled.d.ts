import { theme } from "./Theme.styled";
import "styled-components";

type ThemeType = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
