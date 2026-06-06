import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      className="flex flex-row items-center gap-8 text-(--text) text-sm cursor-pointer max-[700px]:hidden"
    >
      <Link to="/pocetna" className="">Početna</Link>
      <Link to="/o_meni" className="">O meni</Link>
      <Link to="/saradnja" className="">Saradnja</Link>
    </nav>
  );
};

export default NavBar;
