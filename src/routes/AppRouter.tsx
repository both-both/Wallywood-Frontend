import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { PosterPage } from "../pages/PosterPage/PosterPage";
import { PosterListModule } from "../components/modules/PosterListModule/PosterListModule";
import { PosterDetailModule } from "../components/modules/PosterDetailModule/PosterDetailModule";
import { CartPage } from "../pages/CartPage/CartPage";
// import { PosterListModule } from "../components/modules/PosterListModule/PosterListModule";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/posters" element={<PosterPage />}>
        <Route index element={<PosterListModule />} />
        <Route path="genre/:genreSlug" element={<PosterListModule />} />
        <Route path=":id" element={<PosterDetailModule />} />
      </Route>
      {/* <Route path="/contact" element={<ContactPage />} /> */}
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
