import NavBar from "./NavBar.jsx";
import { FaArrowRightLong } from "react-icons/fa6";
import { CgMenu } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { useAppContext } from "../../hooks/useAppContext.jsx";
import { Link } from "react-router-dom";

const Header = () => {
  const { showMenu, toggleMenu } = useAppContext();

  return (
    <header className="w-full h-18 fixed top-0 flex flex-row items-center justify-between px-7 sm:px-10 xl:px-30 border-b border-(--border) bg-transparent backdrop-blur-lg z-40">
      <Link to="/pocetna" className="cursor-pointer">
        <img src="/mh2o-logo.png" alt="logo" className="w-16" />
      </Link>
      <NavBar />
      <Link
        to="/saradnja#kontakt"
        className="flex items-center gap-2 px-7 py-2 rounded-full bg-linear-to-r from-(--primary) to-(--secondary) text-(--button-text) font-semibold text-[13px] cursor-pointer max-[700px]:hidden hover:scale-105 duration-150"
      >
        Kontaktiraj me <FaArrowRightLong className="text-(--button-text)" />
      </Link>
      <span
        onClick={toggleMenu}
        className="text-2xl text-(--white) min-[700px]:hidden cursor-pointer"
      >
        {showMenu ? <IoClose /> : <CgMenu />}
      </span>
    </header>
  );
};

export default Header;
