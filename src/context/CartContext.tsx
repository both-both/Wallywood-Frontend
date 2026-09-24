import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { endpoints, USER_ID } from "../data/Endpoints";
import type { Cartline } from "../types/api.types";

type CartContextValue = {
  cartlines: Cartline[];
  totalItems: number;
  addToCart: (posterId: number) => Promise<void>;
  removeFromCart: (id: number) => Promise<void>;
};

// Kurven ligger i context fordi både NavBar PosterCard og CartModule skal bruge den samme kurv. Et almindeligt hook ville give dem hver sin.

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartlines, setCartlines] = useState<Cartline[]>([]);

  // Henter kurven forfra. Kaldes efter hver ændring.
  const loadCart = async () => {
    const response = await fetch(`${endpoints.cartline}?userId=${USER_ID}`);
    const data: Cartline[] = await response.json();
    setCartlines(data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const addToCart = async (posterId: number) => {
    await fetch(endpoints.cartline, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: USER_ID, posterId, quantity: 1 }),
    });
    await loadCart();
  };

  const removeFromCart = async (id: number) => {
    await fetch(`${endpoints.cartline}/${id}`, { method: "DELETE" });
    await loadCart();
  };

  const totalItems = cartlines.reduce((sum, line) => sum + line.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartlines, totalItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart skal bruges inde i CartProvider");
  return context;
};
