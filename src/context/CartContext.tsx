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

// fordi NavBar, PosterCard, PosterDetailModule og CartModule alle skal læse og ændre på den samme kurv, ligger Kurven i en context
const CartContext = createContext<CartContextValue | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Kurven findes kun i databasen. så derfor tælles trigger op efter hver POST, PUT og DELETE, og det får useCartData til at hente forfra
  const [trigger, setTrigger] = useState(0);
  const { cartData } = useCartData(trigger);

  const addToCart = async (posterId: number) => {
    const existing = cartData.find((line) => line.posterId === posterId);

    // hvis plakaten allerede i kurven: tæller antallet op på den linje med PUT
    if (existing) {
      await fetch(`${endpoints.cartline}/${existing.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: USER_ID,
          posterId,
          quantity: existing.quantity + 1,
        }),
      });
    } else {
      // Ny Plakat kurven: opretter en ny linje med  med POST.
      await fetch(endpoints.cartline, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: USER_ID, posterId, quantity: 1 }),
      });
    }

    setTrigger((t) => t + 1);
  };

  // Sleter en kurvlinje med linjens eget id i stien, ikke plakatens id.
  const removeFromCart = async (id: number) => {
    await fetch(`${endpoints.cartline}/${id}`, { method: "DELETE" });
    setTrigger((t) => t + 1);
  };

  // Samlet antal varer der er i kurven. Det er tallet der vises på kurv-ikonet i NavBar.
  const totalItems = cartData.reduce((sum, line) => sum + line.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cartData, totalItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
// UseCart eget hook så komponenter kun skal importere useCart og ikke både useContext og CartContext. Fejlen fanger det, hvis en komponent bruges uden CartProvider.

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart skal bruges inde i CartProvider");
  return context;
};
