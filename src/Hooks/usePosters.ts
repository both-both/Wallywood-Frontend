import { endpoints } from "../data/Endpoints";
import type { Poster } from "../types/api.types";
import { useFetch } from "./useFetch";

// Tre hooks ovenpå useFetch, ét pr. måde plakater bliver hentet  bruges så t URL'erne skal står et sted

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
export const usePoster = (id?: string) => {
  const { data, isLoading, error } = useFetch<Poster>(
    `${endpoints.posters}/${id}`,
  );

  return { poster: data, isLoading, error };
};
