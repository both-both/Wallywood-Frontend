import { ContentWrapper } from "../../components/elements/ContentWrapper/ContentWrapper";
import { CartModule } from "../../components/modules/CartModule/CartModule";

export const CartPage = () => {
  return (
    <ContentWrapper title="Din kurv">
      <CartModule />
    </ContentWrapper>
  );
};
