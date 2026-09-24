import type { ReactNode } from "react";
import { MainStyled } from "./Main.styled";

export const Main = ({ children }: { children: ReactNode }) => {
  return <MainStyled innerHTML="main">{children}</MainStyled>;
};
