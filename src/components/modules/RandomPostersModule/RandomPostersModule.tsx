import { useRandomPosters } from "../../../Hooks/usePosters";
import { PosterCard } from "../PosterCard/PosterCard";

export const RandomPostersModule = () => {
  const { posters, isLoading, error } = useRandomPosters();

  // Loader skla sættes ind
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      {posters.map((poster) => (
        <PosterCard
          key={poster.id}
          id={poster.id}
          name={poster.name}
          image={poster.image}
          description={poster.description}
          genres={poster.genres}
        />
      ))}
    </>
  );
};
