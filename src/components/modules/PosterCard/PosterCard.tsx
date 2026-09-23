import { Button } from "../../elements/Buttom/Buttom";
import { Container } from "../../elements/Container/Container";
import type { PosterCardProps } from "./PosterCard.types";
import { Link } from "react-router-dom";

export const PosterCard = ({
  id,
  name,
  price,
  image,
  description,
  genres,
}: PosterCardProps) => {
  return (
    <Container>
      <Link to={`/posters/${id}`}>
        <img src={image} alt={name}></img>
        <h3>{name}</h3>
      </Link>

      <div dangerouslySetInnerHTML={{ __html: description }} />

      <p>Genre: {genres.map((genre) => genre.title).join(", ")}</p>

      <p>{price}</p>
      <Button textValue="Læg i kurv"></Button>
      <Button textValue="hjerte"></Button>
    </Container>
  );
};
