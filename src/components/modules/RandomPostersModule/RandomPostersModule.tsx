import { useRandomPosters } from "../../../Hooks/usePosters";
import { Loader } from "../../elements/Loader/Loader";

import { RandomPosterCard } from "../RandomPosterCard/RandomPosterCard";
import { PosterGridStyled } from "./RandomPostersModule.styled";

export const RandomPostersModule = () => {
  const { posters, isLoading, error } = useRandomPosters();

  // Loader skla sættes ind
  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;

  return (
    <>
      <PosterGridStyled>
        {posters.map((poster) => (
          <RandomPosterCard
            key={poster.id}
            id={poster.id}
            name={poster.name}
            image={poster.image}
            description={poster.description}
            genres={poster.genres}
          />
        ))}
      </PosterGridStyled>
    </>
  );
};
