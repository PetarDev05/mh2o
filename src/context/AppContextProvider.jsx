import { useState } from "react";
import { AppContext } from "./AppContext.jsx";

const AppContextProvider = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const value = {
    showMenu,
    toggleMenu,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
