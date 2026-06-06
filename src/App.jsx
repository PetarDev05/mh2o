import Header from "./components/header/Header.jsx";
import Menu from "./components/header/Menu.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Colaboration from "./pages/Colaboration.jsx";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/footer/Footer.jsx";

const App = () => {
  return (
    <main>
      <Header />
      <Menu />
      <Routes>
        <Route path="/pocetna" element={<Home />} />
        <Route path="/o_meni" element={<About />} />
        <Route path="/saradnja" element={<Colaboration />} />
      </Routes>
      <Footer />
      <Toaster
        toastOptions={{
          duration: 4000,
          success: {
            style: {
              background: "var(--success)",
              color: "var(--white)",
            },
          },
          error: {
            style: {
              background: "var(--error)",
              color: "var(--white)",
            },
          },
        }}
      />
    </main>
  );
};

export default App;
