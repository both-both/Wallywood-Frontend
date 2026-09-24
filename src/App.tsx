import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";
import { Main } from "./components/layout/Main/Main";
import { CartProvider } from "./context/CartContext";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Main>
          <AppRouter />
        </Main>
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
