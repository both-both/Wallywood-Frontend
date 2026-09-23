import { endpoints } from "../data/Endpoints";
import type { Poster } from "../types/api.types";
import { useFetch } from "./useFetch";

export const useRandomPosters = () => {
  const { data, isLoading, error } = useFetch<Poster[]>(
    `${endpoints.posters}?random=true&limit=4`,
  );

  return { posters: data ?? [], isLoading, error };
};
export const usePostersByGenre = (genreSlug?: string) => {
  const url = genreSlug
    ? `${endpoints.posters}?genreSlug=${genreSlug}`
    : endpoints.posters;

  const { data, isLoading, error } = useFetch<Poster[]>(url);

  return { posters: data ?? [], isLoading, error };
};
