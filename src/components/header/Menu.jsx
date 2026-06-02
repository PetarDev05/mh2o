import { useAppContext } from "../../hooks/useAppContext.jsx";

const Menu = () => {
  const { showMenu, toggleMenu } = useAppContext();

  return (
    <div
      id="menu"
      className={`w-full max-w-100 fixed top-18 right-0 border-l border-(--border) bg-transparent backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-200 text-(--text) ${showMenu ? "translate-x-0" : "translate-x-full"} z-20 min-[900px]:hidden`}
    >
      <a
        onClick={toggleMenu}
        href="#pocetna"
        className="w-full text-center py-3"
      >
        Pocetna
      </a>
      <a
        onClick={toggleMenu}
        href="#o_meni"
        className="w-full text-center py-3"
      >
        O meni
      </a>
      <a
        onClick={toggleMenu}
        href="#transformacije"
        className="w-full text-center py-3"
      >
        Transformacije
      </a>
      <a
        onClick={toggleMenu}
        href="#cenovnik"
        className="w-full text-center py-3"
      >
        Cenovnik
      </a>
      <a
        onClick={toggleMenu}
        href="#kontakt"
        className="w-full text-center py-3"
      >
        Kontakt
      </a>
    </div>
  );
};

export default Menu;
