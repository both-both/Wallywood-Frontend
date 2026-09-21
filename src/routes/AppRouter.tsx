import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { ContactPage } from "../pages/ContactPage/ContactPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/posters" element={PosterPage} />
      <Route path="/poster/:id" element={PosterDetails} />

      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};
