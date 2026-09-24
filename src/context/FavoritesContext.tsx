import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type FavoritesContextValue = {
  favorites: number[];
  isFavorite: (posterId: number) => boolean;
  toggleFavorite: (posterId: number) => void;
};

const FavoritesContext = createContext<FavoritesContextValue | null>(null);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  // Læser gemte favoritter én gang, når komponenten oprettes
  const [favorites, setFavorites] = useState<number[]>(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  // Gemmer igen hver gang listen ændrer sig
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (posterId: number) => favorites.includes(posterId);

  const toggleFavorite = (posterId: number) => {
    setFavorites((current) =>
      current.includes(posterId)
        ? current.filter((favoriteId) => favoriteId !== posterId)
        : [...current, posterId],
    );
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error("useFavorites skal bruges inde i FavoritesProvider");
  return context;
};
