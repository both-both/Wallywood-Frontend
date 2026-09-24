import { Outlet } from "react-router-dom";
import { Container } from "../../components/elements/Container/Container";
import { ContentWrapper } from "../../components/elements/ContentWrapper/ContentWrapper";
import { GenreList } from "../../components/modules/GenreList/GenreList";
import { PosterPageStyled } from "./PosterPage.styled";

export const PosterPage = () => {
  return (
    <ContentWrapper title="Plakater">
      <PosterPageStyled>
        <Container innerHTML="section">
          <GenreList />
        </Container>

        <Container>
          <Outlet />
        </Container>
      </PosterPageStyled>
    </ContentWrapper>
  );
};
