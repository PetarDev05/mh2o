import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="flex flex-col min-[700px]:flex-row items-center gap-8 text-(--text) text-sm cursor-pointer max-[700px]:hidden">
      <Link
        to="/"
        className={`w-fit flex flex-col items-center gap-1 ${location.pathname === "/" ? "text-(--heading)" : ""}`}
      >
        <p className="">Početna</p>
        {location.pathname === "/" && (
          <span className="w-full h-0.5 rounded bg-(--heading)"></span>
        )}
      </Link>
      <Link
        to="/o_meni"
        className={`w-fit flex flex-col items-center gap-1 ${location.pathname === "/o_meni" ? "text-(--heading)" : ""}`}
      >
        <p className="">O meni</p>
        {location.pathname === "/o_meni" && (
          <span className="w-full h-0.5 rounded bg-(--heading)"></span>
        )}
      </Link>
      <Link
        to="/saradnja"
        className={`w-fit flex flex-col items-center gap-1 ${location.pathname === "/saradnja" ? "text-(--heading)" : ""}`}
      >
        <p className="">Saradnja</p>
        {location.pathname === "/saradnja" && (
          <span className="w-full h-0.5 rounded bg-(--heading)"></span>
        )}
      </Link>
    </nav>
  );
};

export default NavBar;
