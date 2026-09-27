import { endpoints, USER_ID } from "../data/Endpoints";
import type { Cartline } from "../types/api.types";
import { useFetch } from "./useFetch";

export const useCartData = (trigger = 0) => {
  // userId i query-strengen filtrerer i API'et, så vi kun får de kurvlinjer der hører til denne bruger, og ikke hele tabellen.

  const { data, isLoading, error } = useFetch<Cartline[]>(
    `${endpoints.cartline}?userId=${USER_ID}`,
    "GET",
    null,
    trigger,
  );

  // ?? [] gør at komponenter kan kalde .map() med det samme
  return { cartData: data ?? [], isLoading, error };
};
