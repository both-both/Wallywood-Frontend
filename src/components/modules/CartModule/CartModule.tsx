import { useCart } from "../../../context/CartContext";
import { ButtonStyled } from "../../elements/Buttom/Button.styled";
import { Container } from "../../elements/Container/Container";
import {
  CartLineStyled,
  CartListStyled,
  CartTotalStyled,
} from "./CartModule.styled";

export const CartModule = () => {
  const { cartData, removeFromCart } = useCart();

  console.log(cartData);

  if (cartData.length === 0) {
    return <p>Din kurv er tom.</p>;
  }

  const total = cartData.reduce(
    (sum, line) => sum + Number(line.poster.price) * line.quantity,
    0,
  );

  return (
    <>
      <CartListStyled>
        {cartData.map((line) => (
          <CartLineStyled key={line.id}>
            <img src={line.poster.image} alt={line.poster.name} />

            <Container>
              <h3>{line.poster.name}</h3>
              <p>Antal: {line.quantity}</p>
              <p>Kr. {line.poster.price},00 pr stk</p>
            </Container>

            <ButtonStyled type="button" onClick={() => removeFromCart(line.id)}>
              Fjern
            </ButtonStyled>
          </CartLineStyled>
        ))}
      </CartListStyled>
      <CartTotalStyled>I alt: Kr. {total},00</CartTotalStyled>
    </>
  );
};
