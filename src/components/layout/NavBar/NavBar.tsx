import { NavLink } from "react-router-dom";
import { NavBarStyled } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <NavBarStyled>
      <NavLink to="/">Forside</NavLink>
      <NavLink to="/posters">Plakater</NavLink>
      <NavLink to="/about">Om os</NavLink>
      <NavLink to="/contact">Kontakt os</NavLink>
      <NavLink to="/login">Login</NavLink>
    </NavBarStyled>
  );
};
