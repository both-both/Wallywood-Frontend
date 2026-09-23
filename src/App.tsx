import { Footer } from "./components/layout/Footer/Footer";
import { Header } from "./components/layout/Header/Header";
import { Main } from "./components/layout/Main/Main";
import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <>
      <Header />
      <Main>
        <AppRouter />
      </Main>
      <Footer>footer</Footer>
    </>
  );
}

export default App;
