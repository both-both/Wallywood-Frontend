import { NavLink } from "react-router-dom";

import { useGenres } from "../../../Hooks/useGenre";
import { GenreListStyled } from "./GenreList.styled";

export const GenreList = () => {
  const { genres, error } = useGenres();

  if (error) return <p>{error}</p>;

  return (
    <>
      <h2>Filtre</h2>
      <h3>Genre</h3>
      <GenreListStyled>
        {genres.map((item) => {
          return (
            <li key={item.id}>
              <NavLink to={`/posters/genre/${item.slug}`}>{item.title}</NavLink>
            </li>
          );
        })}
      </GenreListStyled>
    </>
  );
};
