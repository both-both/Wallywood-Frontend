import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { PosterPage } from "../pages/PosterPage/PosterPage";
import { PosterListModule } from "../components/modules/PosterListModule/PosterListModule";
import { PosterDetailModule } from "../components/modules/PosterDetailModule/PosterDetailModule";
import { CartPage } from "../pages/CartPage/CartPage";
import { AboutPage } from "../pages/AboutPage/AboutPage";
import { ContactPage } from "../pages/ContactPage/ContactPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
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
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
