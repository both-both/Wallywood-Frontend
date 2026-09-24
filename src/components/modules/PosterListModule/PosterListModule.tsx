import { useParams } from "react-router-dom";
import { endpoints } from "../../../data/Endpoints";
import { useFetch } from "../../../Hooks/useFetch";
import { PosterCard } from "../PosterCard/PosterCard";
import { Container } from "../../elements/Container/Container";
import type { Poster } from "../../../types/api.types";
import { useGenres } from "../../../Hooks/useGenre";

export const PosterListModule = () => {
  const { genreSlug } = useParams();
  const { genre } = useGenres();

  const url = genreSlug
    ? `${endpoints.posters}?genreSlug=${genreSlug}`
    : endpoints.posters;

  const { data, isLoading, error } = useFetch<Poster[]>(url);

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
      <Container>
        <h2>{heading}</h2>
        {data &&
          data.map((item) => (
            <PosterCard
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              description={item.description}
              genres={item.genres}
            />
          ))}
      </Container>
    </>
  );
};
