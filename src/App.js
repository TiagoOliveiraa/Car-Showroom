import { useLocation } from "react-router-dom";
import { Header, Footer } from "./components";
import { AllRoutes } from "./routes/AllRoutes";
import { createGlobalStyle } from "styled-components";

export default function App() {

  const location = useLocation();
  const isBannerPage = location.pathname === "/";

  return (
    <>
    <GlobalStyle/>
    <div className="App">
      <Header $isOverlay={isBannerPage}/>
      <AllRoutes />
      <Footer />
    </div>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }

  main {
    min-height: 100vh;
  }
`;
