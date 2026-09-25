import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { endpoints, USER_ID } from "../data/Endpoints";
import type { Cartline } from "../types/api.types";
import { useCartData } from "../Hooks/useCartData";

type CartContextValue = {
  cartData: Cartline[];
  totalItems: number;
  addToCart: (posterId: number) => Promise<void>;
  removeFromCart: (id: number) => Promise<void>;
};

// Kurven ligger i context fordi både NavBar PosterCard og CartModule skal bruge den samme kurv. Et almindeligt hook ville give dem hver sin.

const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [trigger, setTrigger] = useState(0);
  const { cartData } = useCartData(trigger);
  const [cartlines, setCartlines] = useState<Cartline[]>([]);

  const addToCart = async (posterId: number) => {
    await fetch(endpoints.cartline, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: USER_ID, posterId, quantity: 1 }),
    });
    setTrigger((t) => t + 1);
  };

  const removeFromCart = async (id: number) => {
    await fetch(`${endpoints.cartline}/${id}`, { method: "DELETE" });
    setTrigger((t) => t + 1);
  };

  const totalItems = cartData.reduce((sum, line) => sum + line.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartData, totalItems, addToCart, removeFromCart }}
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
