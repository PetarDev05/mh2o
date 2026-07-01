import { Link } from "react-router-dom";
import { useAppContext } from "../../hooks/useAppContext.jsx";
import { FaArrowRightLong } from "react-icons/fa6";

const Menu = () => {
  const { showMenu, toggleMenu } = useAppContext();

  return (
    <div
      id="menu"
      className={`w-full max-w-100 fixed top-18 right-0 border-l border-(--border) bg-transparent backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-200 text-(--text) ${showMenu ? "translate-x-0" : "translate-x-full"} z-20 min-[700px]:hidden`}
    >
      <Link
        onClick={toggleMenu}
        to="/"
        className="w-full text-center py-3 hover:text-(--white) duration-100"
      >
        Home
      </Link>
      <Link
        onClick={toggleMenu}
        to="/o_meni"
        className="w-full text-center py-3 hover:text-(--white) duration-100"
      >
        About me
      </Link>
      <Link
        onClick={toggleMenu}
        to="/saradnja"
        className="w-full text-center py-3 hover:text-(--white) duration-100"
      >
        Work with me
      </Link>
      <Link
        onClick={toggleMenu}
        to="/saradnja#kontakt"
        className="flex items-center gap-2 px-7 py-2 rounded-full bg-linear-to-r from-(--primary) to-(--secondary) text-(--button-text) font-semibold text-[13px] cursor-pointer mt-10 hover:scale-105 duration-150"
      >
        Contact me <FaArrowRightLong className="text-(--button-text)" />
      </Link>
    </div>
  );
};

export default Menu;
