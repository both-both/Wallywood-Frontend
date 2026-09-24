import { ContentWrapper } from "../../components/elements/ContentWrapper/ContentWrapper";
import { Container } from "../../components/elements/Container/Container";
import { AboutPageStyled } from "./AboutPage.styled";
import StarImage from "../../assets/Star.png";

export const AboutPage = () => {
  return (
    <ContentWrapper title="Om os">
      <AboutPageStyled>
        <Container>
          <p>
            Wallywood startede som en samling af filmplakater i en kælder i
            Aalborg. I dag sælger vi plakater fra hele filmhistorien til folk,
            der gerne vil have en bid af det store lærred hjem på væggen.
          </p>
          <p>
            Vores katalog spænder fra klassiske westerns til nye science
            fiction-film. Alle plakater trykkes på tykt mat papir, så farverne
            holder, og vi sender dem i en rulle, der kan tåle en tur med posten.
          </p>
          <p>
            Vi er et lille hold på fire, og vi ser alt for mange film. Har du et
            ønske til en plakat, vi ikke har, så skriv til os.
          </p>
        </Container>

        <img src={StarImage} alt="Oplyst stjerne med pærer" />
      </AboutPageStyled>
    </ContentWrapper>
  );
};
