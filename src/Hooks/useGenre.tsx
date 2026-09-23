import type { GenreListProps } from "../components/modules/GenreList/GenreList.types";
import { endpoints } from "../data/Endpoints";
import { useFetch } from "./useFetch";

export const useGenres = () => {
  const { data, isLoading, error } = useFetch<GenreListProps[]>(
    endpoints.genre,
  );

  return { genre: data ?? [], isLoading, error };
};
