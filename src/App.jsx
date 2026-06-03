import Header from "./components/header/Header.jsx";
import Menu from "./components/header/Menu.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import Pricing from "./pages/Pricing.jsx";
import { Toaster } from "react-hot-toast";
import Testimonials from "./pages/Testimonials.jsx";
import AboutBrand from "./pages/AboutBrand.jsx";

const App = () => {
  return (
    <main>
      <Header />
      <Menu />
      <Home />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Testimonials />
      <AboutBrand />
      <Toaster toastOptions={{
          duration: 5000,
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
        }} />
    </main>
  );
};

export default App;
