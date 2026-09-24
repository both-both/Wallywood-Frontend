import { useParams } from "react-router-dom";
import { usePostersByGenre } from "../../../Hooks/usePosters";
import { PosterCard } from "../PosterCard/PosterCard";

import { useGenres } from "../../../Hooks/useGenre";
import { PosterListStyled } from "./PosterListModule.styled";

export const PosterListModule = () => {
  const { genreSlug } = useParams();
  const { genre } = useGenres();

  const { posters, isLoading, error } = usePostersByGenre(genreSlug);
  const heading =
    genre.find((item) => item.slug === genreSlug)?.title ?? "Alle plaketer";

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h2>
        {heading} - {posters.length} Plakater
      </h2>

      <PosterListStyled>
        {posters.map((item) => (
          <PosterCard
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </PosterListStyled>
    </>
  );
};
