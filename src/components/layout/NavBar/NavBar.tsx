import { NavLink } from "react-router-dom";
import { NavBarStyled } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <NavBarStyled>
      <NavLink to="/">Forside</NavLink>
      <NavLink to="/">Plakater</NavLink>
      <NavLink to="/">Om os</NavLink>
      <NavLink to="/">Kontakt os</NavLink>
      <NavLink to="/">Login</NavLink>
    </NavBarStyled>
  );
};
