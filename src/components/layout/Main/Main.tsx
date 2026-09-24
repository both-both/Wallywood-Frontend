import type { ReactNode } from "react";
import { MainStyled } from "./Main.styled";
import { theme } from "../../../style/Theme.styled";

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <MainStyled innerHTML="main" maxwidth={theme.sizes.maxWidth}>
      {children}
    </MainStyled>
  );
};
