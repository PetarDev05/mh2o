import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="flex flex-col min-[700px]:flex-row items-center gap-8 text-(--text) text-sm cursor-pointer max-[700px]:hidden">
      <Link
        to="/"
        className={`w-fit flex flex-col items-center gap-1 ${location.pathname === "/" ? "text-(--heading)" : ""}`}
      >
        <p className="">Home</p>
        {location.pathname === "/" && (
          <span className="w-full h-0.5 rounded bg-(--primary)"></span>
        )}
      </Link>
      <Link
        to="/about_me"
        className={`w-fit flex flex-col items-center gap-1 ${location.pathname === "/about_me" ? "text-(--heading)" : ""}`}
      >
        <p className="">About me</p>
        {location.pathname === "/about_me" && (
          <span className="w-full h-0.5 rounded bg-(--primary)"></span>
        )}
      </Link>
      <Link
        to="/work_with_me"
        className={`w-fit flex flex-col items-center gap-1 ${location.pathname === "/work_with_me" ? "text-(--heading)" : ""}`}
      >
        <p className="">Work with me</p>
        {location.pathname === "/work_with_me" && (
          <span className="w-full h-0.5 rounded bg-(--primary)"></span>
        )}
      </Link>
    </nav>
  );
};

export default NavBar;
