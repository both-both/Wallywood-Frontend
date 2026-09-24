import type { PosterCardProps } from "./PosterCard.types";
import { Link } from "react-router-dom";
import {
  PosterCardActionsStyled,
  PosterCardBodyStyled,
  PosterCardStyled,
} from "./PosterCard.styled";
import {
  ButtonStyled,
  IconButtonStyled,
} from "../../elements/Buttom/Button.styled";
import { AiOutlineHeart } from "react-icons/ai";

export const PosterCard = ({
  id,
  name,
  price,
  image,
  description,
  genres,
}: PosterCardProps) => {
  return (
    <PosterCardStyled>
      <Link to={`/posters/${id}`}>
        <img src={image} alt={name}></img>
      </Link>
      <PosterCardBodyStyled>
        <h3>{name}</h3>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <p>Genre: {genres.map((genre) => genre.title).join(", ")}</p>

        {price && <p>{price} kr.</p>}

        <PosterCardActionsStyled>
          <ButtonStyled as={Link} to={`/posters/${id}`}>
            Læs mere
          </ButtonStyled>
          <IconButtonStyled type="button" aria-label="Gem som favorit">
            <AiOutlineHeart />
          </IconButtonStyled>
        </PosterCardActionsStyled>
      </PosterCardBodyStyled>
    </PosterCardStyled>
  );
};
