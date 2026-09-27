const BASE_URL = import.meta.env.VITE_API_URL;

// Simulerer en indlogget bruger. API'et har rigtig authentication med JWT, da login er ikke koblet til frontenden, så kurven hører altid til bruger 2

export const USER_ID = 2;

export const endpoints = {
  posters: `${BASE_URL}posters`,
  genre: `${BASE_URL}genre`,
  cartline: `${BASE_URL}cartline`,
  userrating: `${BASE_URL}userrating`,
};
