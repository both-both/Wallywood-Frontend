import { NavBar } from "../NavBar/NavBar";
import { Container } from "../../elements/Container/Container";
import { HeaderStyled, LogoStyled } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <Container className="header-content">
        <LogoStyled to="/">Wallywood</LogoStyled>
        <NavBar />
      </Container>
    </HeaderStyled>
  );
};
