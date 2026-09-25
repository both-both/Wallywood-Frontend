import { endpoints } from "../data/Endpoints";
import type { Cartline } from "../types/api.types";
import { useFetch } from "./useFetch";

export const useCartData = (trigger = 0) => {
  const { data, isLoading, error } = useFetch<Cartline[]>(
    endpoints.cartline,
    "GET",
    null,
    trigger,
  );

  // ?? [] gør at komponenter kan kalde .map() med det samme
  return { cartData: data ?? [], isLoading, error };
};
