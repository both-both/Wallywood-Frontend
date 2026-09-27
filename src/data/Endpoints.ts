const BASE_URL = import.meta.env.VITE_API_URL;

// Simulerer en bruger. så kurven hører altid til bruger 2
export const USER_ID = 2;

export const endpoints = {
  posters: `${BASE_URL}posters`,
  genre: `${BASE_URL}genre`,
  cartline: `${BASE_URL}cartline`,
  userrating: `${BASE_URL}userrating`,
};
