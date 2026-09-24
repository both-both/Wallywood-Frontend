import { NavBar } from "../NavBar/NavBar";
import { HeaderStyled, HeaderInnerStyled, LogoStyled } from "./Header.styled";
import { theme } from "../../../style/Theme.styled";

export const Header = () => {
  return (
    <header>
      <HeaderStyled maxwidth={theme.sizes.maxWidth}>
        <HeaderInnerStyled>
          <LogoStyled to="/">Wallywood</LogoStyled>
          <NavBar />
        </HeaderInnerStyled>
      </HeaderStyled>
    </header>
  );
};
