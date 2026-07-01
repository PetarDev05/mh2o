import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full p-10 border-t border-(--border) mt-10 flex flex-col items-center gap-10">
      <div className="flex flex-row items-center gap-5 text-(--white) text-2xl cursor-pointer">
        <a href="#" className="hover:scale-110 duration-200">
          <FaInstagram />
        </a>
        <a href="#" className="hover:scale-110 duration-200">
          <FaFacebookSquare />
        </a>
        <a href="#" className="hover:scale-110 duration-200">
          <AiFillTikTok />
        </a>
        <a href="#" className="hover:scale-110 duration-200">
          <FaLinkedin />
        </a>
      </div>
      <hr className="w-full max-w-130 text-(--border)" />
      <div className="flex flex-col sm:flex-row items-center gap-15">
        <div className="flex flex-col items-center text-(--text) text-md gap-5">
          <p className="text-lg text-(--heading) font-semibold">Work with me</p>
          <Link to="/saradnja#planovi" className="">
            Personal training
          </Link>
          <Link to="/saradnja#planovi" className="">
            Online programs
          </Link>
        </div>
        <div className="flex flex-col items-center text-(--text) text-md gap-5">
          <p className="text-lg text-(--heading) font-semibold">Contact</p>
          <p className="">john.smith@gmail.com</p>
          <p className="">+381/64-3275578</p>
        </div>
      </div>
      <hr className="w-full max-w-130 text-(--border)" />
      <p className="text-(--text) text-center">
        &copy; {year} John Smith. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
