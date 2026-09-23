import { Container } from "../Container/Container";
import type { ContentWrapperProps } from "./ContentWrapper.types";

export const ContentWrapper = ({
  title,
  description,
  showTitle = true,
  children,
}: ContentWrapperProps) => {
  if (description) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }

  return (
    <Container innerHTML="section">
      <title>{title}</title>
      {showTitle && <h1>{title}</h1>}

      <Container>{children}</Container>
    </Container>
  );
};
