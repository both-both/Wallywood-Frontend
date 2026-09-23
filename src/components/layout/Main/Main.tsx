import type { ReactNode } from "react";
import { Container } from "../../elements/Container/Container";
import { theme } from "../../../style/Theme.styled";

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <Container innerHTML="main" maxwidth={theme.sizes.maxWidth}>
      {children}
    </Container>
  );
};
