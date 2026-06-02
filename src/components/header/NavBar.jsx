const NavBar = () => {
  return (
    <nav
      className="flex flex-row items-center gap-8 text-(--text) text-sm cursor-pointer max-[900px]:hidden"
    >
      <a href="#pocetna" className="">Početna</a>
      <a href="#o_meni" className="">O meni</a>
      <a href="#transformacije" className="">Transformacije</a>
      <a href="#cenovnik" className="">Cenovnik</a>
      <a href="#kontakt" className="">Kontakt</a>
    </nav>
  );
};

export default NavBar;
