import type { GenreListProps } from "../components/modules/GenreList/GenreList.types";
import { endpoints } from "../data/Endpoints";
import { useFetch } from "./useFetch";

export const useGenres = () => {
  const { data, isLoading, error } = useFetch<GenreListProps[]>(
    endpoints.genre,
  );
  // ?? [] gør at komponenter kan kalde .map() med det samme
  return { genre: data ?? [], isLoading, error };
};
