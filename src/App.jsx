import Header from "./components/header/Header.jsx";
import Menu from "./components/header/Menu.jsx";
import Home from "./pages/Home.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import Pricing from "./pages/Pricing.jsx";

const App = () => {
  return (
    <main>
      <Header />
      <Menu />
      <Home />
      <HowItWorks />
      <Pricing />
    </main>
  );
};

export default App;
