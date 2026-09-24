import { Link } from "react-router-dom";
import {
  RandomPosterCardActionsStyled,
  RandomPosterCardBodyStyled,
  RandomPosterCardStyled,
} from "./RandomPosterCard.styled";
import type { RandomPosterCardProps } from "./RandomPosterCard.types";
import {
  ButtonStyled,
  IconButtonStyled,
} from "../../elements/Buttom/Button.styled";
import { AiOutlineHeart } from "react-icons/ai";

export const RandomPosterCard = ({
  id,
  name,
  image,
  description,
  genres,
}: RandomPosterCardProps) => {
  return (
    <RandomPosterCardStyled>
      <Link to={`/posters${id}`}>
        <img src={image} alt={name} />
      </Link>

      <RandomPosterCardBodyStyled>
        <h3>{name}</h3>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <p>Genre: {genres.map((genre) => genre.title).join(",")}</p>

        <RandomPosterCardActionsStyled>
          <ButtonStyled as={Link} to={`/posters/${id}`}>
            Læs mere
          </ButtonStyled>
          <IconButtonStyled type="button" aria-label="Gem som favorit">
            <AiOutlineHeart />
          </IconButtonStyled>
        </RandomPosterCardActionsStyled>
      </RandomPosterCardBodyStyled>
    </RandomPosterCardStyled>
  );
};
