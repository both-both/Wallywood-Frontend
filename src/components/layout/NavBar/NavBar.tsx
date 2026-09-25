import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsBasket3 } from "react-icons/bs";
import { HiMenu, HiX } from "react-icons/hi";
import {
  BurgerButtonStyled,
  NavBarStyled,
  NavLinksStyled,
} from "./NavBar.styled";
import { useCart } from "../../../context/CartContext";

export const NavBar = () => {
  const { totalItems } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  //Gør så burgermenuen lukker når man trykker på det af Navlinksne
  const closeMenu = () => setIsOpen(false);

  return (
    <NavBarStyled>
      <NavLinksStyled $isOpen={isOpen}>
        <NavLink to="/" end onClick={closeMenu}>
          Forside
        </NavLink>
        <NavLink to="/posters" onClick={closeMenu}>
          Plakater
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          Om os
        </NavLink>
        <NavLink to="/contact" onClick={closeMenu}>
          Kontakt os
        </NavLink>
        <NavLink to="/login" onClick={closeMenu}>
          Login
        </NavLink>
      </NavLinksStyled>

      <NavLink
        to="/cart"
        className="cart-link"
        aria-label={`Kurv med ${totalItems} varer`}
      >
        <BsBasket3 />
        {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
      </NavLink>

      <BurgerButtonStyled
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Luk menu" : "Åbn menu"}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </BurgerButtonStyled>
    </NavBarStyled>
  );
};
