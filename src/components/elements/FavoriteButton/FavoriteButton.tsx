import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IconButtonStyled } from "../Buttom/Button.styled";
import { useFavorites } from "../../../context/FavoritesContext";

export const FavoriteButton = ({ posterId }: { posterId: number }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(posterId);

  return (
    <IconButtonStyled
      type="button"
      onClick={() => toggleFavorite(posterId)}
      aria-pressed={favorite}
      aria-label={favorite ? "Fjern fra favoritter" : "Gem som favorit"}
    >
      {favorite ? <AiFillHeart /> : <AiOutlineHeart />}
    </IconButtonStyled>
  );
};
