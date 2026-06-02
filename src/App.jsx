import Header from "./components/header/Header.jsx";
import Menu from "./components/header/Menu.jsx";
import Home from "./pages/Home.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";

const App = () => {
  return (
    <main>
      <Header />
      <Menu />
      <Home />
      <HowItWorks />
    </main>
  );
};

export default App;
