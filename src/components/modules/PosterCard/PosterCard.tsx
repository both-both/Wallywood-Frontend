import type { PosterCardProps } from "./PosterCard.types";
import { Link } from "react-router-dom";
import {
  PosterCardButtonsStyled,
  PosterCardBodyStyled,
  PosterCardStyled,
} from "./PosterCard.styled";
import { ButtonStyled } from "../../elements/Buttom/Button.styled";
import { useCart } from "../../../context/CartContext";
import { FavoriteButton } from "../../elements/FavoriteButton/FavoriteButton";

export const PosterCard = ({ id, name, image, price }: PosterCardProps) => {
  const { addToCart } = useCart();

  return (
    <PosterCardStyled>
      <Link to={`/posters/${id}`}>
        <img src={image} alt={name} />
      </Link>

      <PosterCardBodyStyled>
        <h3>{name}</h3>
        <p>Kr. {price},00</p>

        <PosterCardButtonsStyled>
          <ButtonStyled type="button" onClick={() => addToCart(id)}>
            Læg i kurv
          </ButtonStyled>
          <FavoriteButton posterId={id} />
        </PosterCardButtonsStyled>
      </PosterCardBodyStyled>
    </PosterCardStyled>
  );
};
