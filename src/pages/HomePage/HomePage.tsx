import { ContentWrapper } from "../../components/elements/ContentWrapper/ContentWrapper";
import HeroImage from "../../assets/Curtains.png";

import { RandomPostersModule } from "../../components/modules/RandomPostersModule/RandomPostersModule";
export const HomePage = () => {
  return (
    <>
      <img src={HeroImage} alt="" />
      <ContentWrapper title="Fire tilfældige...">
        <RandomPostersModule />
      </ContentWrapper>
    </>
  );
};
