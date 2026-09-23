import { NavBar } from "../NavBar/NavBar";
import { HeaderInnerStyled, LogoStyled } from "./Header.styled";
import { theme } from "../../../style/Theme.styled";

export const Header = () => {
  return (
    <header>
      <HeaderInnerStyled maxwidth={theme.sizes.maxWidth}>
        <LogoStyled to="/">Wallywood</LogoStyled>
        <NavBar />
      </HeaderInnerStyled>
    </header>
  );
};
