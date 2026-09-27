import type { Genre } from "../types/api.types";
import { endpoints } from "../data/Endpoints";
import { useFetch } from "./useFetch";

export const useGenres = () => {
  const { data, isLoading, error } = useFetch<Genre[]>(endpoints.genre);
  // ?? [] gør at komponenter kan kalde .map() med det samme
  return { genres: data ?? [], isLoading, error };
};
