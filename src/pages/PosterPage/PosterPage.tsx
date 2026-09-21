import { Outlet } from "react-router-dom";
import { Container } from "../../components/elements/Container/Container";
import { ContentWrapper } from "../../components/elements/ContantWrapper/ContentWrapper";

export const PosterPage = () => {
  return (
    <ContentWrapper title="Plakater">
      <Container innerHTML="section">
        <PosterNav />
      </Container>
      <Container>
        <Outlet />
      </Container>
    </ContentWrapper>
  );
};
