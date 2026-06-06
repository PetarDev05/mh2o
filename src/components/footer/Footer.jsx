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
        <a
          href="https://www.instagram.com/milos.h2o/"
          target="_blank"
          className="hover:-translate-y-0.5 hover:text-(--instagram) duration-200"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/milos.h2o#"
          target="_blank"
          className="hover:-translate-y-0.5 hover:text-(--facebook) duration-200"
        >
          <FaFacebookSquare />
        </a>
        <a
          href="https://www.tiktok.com/@milos.h2o"
          target="_blank"
          className="hover:-translate-y-0.5 hover:text-(--tiktok) duration-200"
        >
          <AiFillTikTok />
        </a>
        <a
          href="https://www.linkedin.com/in/milos-ordic-2b3342260"
          target="_blank"
          className="hover:-translate-y-0.5 hover:text-(--linkedin) duration-200"
        >
          <FaLinkedin />
        </a>
      </div>
      <hr className="w-full max-w-130 text-(--border)" />
      <div className="flex flex-col sm:flex-row items-center gap-15">
        <div className="flex flex-col items-center text-(--text) text-md gap-5">
          <p className="text-lg text-(--heading) font-semibold">Saradnja</p>
          <Link to="/saradnja#video" className="">
            Personalni trening
          </Link>
          <Link to="/saradnja#video" className="">
            Online programi
          </Link>
        </div>
        <div className="flex flex-col items-center text-(--text) text-md gap-5">
          <p className="text-lg text-(--heading) font-semibold">Kontakt</p>
          <p className="">milos@mh2ofitness.com</p>
          <p className="">+381/60-3555412</p>
        </div>
      </div>
      <hr className="w-full max-w-130 text-(--border)" />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2831.63589831414!2d20.48453527616275!3d44.78822777828626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a712da3368163%3A0xa6f95cfc7d28cd0e!2sMilos%20Ordic%20-%20Personalni%20trener!5e0!3m2!1ssr!2srs!4v1780760913954!5m2!1ssr!2srs"
        width="400"
        height="300"
        className="rounded-lg w-full max-w-110"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <hr className="w-full max-w-130 text-(--border)" />
      <p className="text-(--text) text-center">
        &copy; {year} MH2O BRAND. All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;
