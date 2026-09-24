import { useParams } from "react-router-dom";

import { usePoster } from "../../../Hooks/usePosters";
import { useCart } from "../../../context/CartContext";
import { ButtonStyled } from "../../elements/Buttom/Button.styled";
import {
  PosterDetailStyled,
  PosterDetailBodyStyled,
  PosterDetailPriceStyled,
  PosterDetailButtonsStyled,
} from "./PosterDetailModule.styled";
import { FavoriteButton } from "../../elements/FavoriteButton/FavoriteButton";

export const PosterDetailModule = () => {
  const { id } = useParams();
  const { poster, isLoading, error } = usePoster(id);
  const { addToCart } = useCart();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!poster) return <p>Plakaten blev ikke fundet.</p>;

  return (
    <PosterDetailStyled>
      <PosterDetailBodyStyled>
        <h2>{poster.name}</h2>

        <div dangerouslySetInnerHTML={{ __html: poster.description }} />

        <p>
          Størrelse: {poster.width} x {poster.height} cm
        </p>

        <p>Varenummer (SKU): {poster.id}</p>

        <PosterDetailPriceStyled>
          Pris: {poster.price},00 DKK
        </PosterDetailPriceStyled>

        <PosterDetailButtonsStyled>
          <ButtonStyled type="button" onClick={() => addToCart(poster.id)}>
            Læg i kurv
          </ButtonStyled>
          <FavoriteButton posterId={poster.id} />
        </PosterDetailButtonsStyled>
      </PosterDetailBodyStyled>

      <img src={poster.image} alt={poster.name} />
    </PosterDetailStyled>
  );
};
