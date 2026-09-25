import { Link } from "react-router-dom";
import {
  RandomPosterCardActionsStyled,
  RandomPosterCardBodyStyled,
  RandomPosterCardStyled,
} from "./RandomPosterCard.styled";
import type { RandomPosterCardProps } from "./RandomPosterCard.types";
import { ButtonStyled } from "../../elements/Buttom/Button.styled";
import { FavoriteButton } from "../../elements/FavoriteButton/FavoriteButton";

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
        <img src={image} alt={name} title={name} />
      </Link>

      <RandomPosterCardBodyStyled>
        <h3>{name}</h3>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <p>Genre: {genres.map((genre) => genre.title).join(",")}</p>

        <RandomPosterCardActionsStyled>
          <ButtonStyled as={Link} to={`/posters/${id}`}>
            Læs mere
          </ButtonStyled>
          <FavoriteButton posterId={id} />
        </RandomPosterCardActionsStyled>
      </RandomPosterCardBodyStyled>
    </RandomPosterCardStyled>
  );
};
