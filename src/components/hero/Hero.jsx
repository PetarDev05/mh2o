import { FaArrowRightLong } from "react-icons/fa6";
import { FaCircleDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full px-5 sm:px-10 md:px-20 lg:px-30 backdrop-blur-2xl">
      <div className="w-full min-h-screen flex flex-col items-start justify-center gap-5 lg:gap-10 bg-(--bg)/50 backdrop-blur-lg">
        <p className="w-fit py-0.5 pl-1.5 pr-3 border border-(--primary) rounded-full text-(--heading) text-[12px] flex items-center gap-2 bg-(--primary)/25">
          <FaCircleDot className="text-(--white) text-md" />
          Personalni trener Miloš Ordić
        </p>
        <h1 className="text-(--heading) text-5xl md:text-6xl lg:text-7xl max-w-190 font-semibold">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-(--primary) to-(--secondary)">
            Premium personalni{" "}
          </span>
          i online treninzi
        </h1>
        <p className="text-(--text) text-md md:text-lg max-w-190">
          Vrhunski gubitak težine i transformacija životnog stila, koji stvaraju
          dugotrajne i velike rezultate za vaše zdravlje, telo i um.
        </p>
        <div className="flex flex-col min-[450px]:flex-row items-start min-[450px]:items-center gap-5">
          <Link to="/saradnja#kontakt" className="flex items-center gap-2 px-7 py-2 rounded-full bg-linear-to-r from-(--primary) to-(--secondary) text-(--button-text) font-semibold text-[13px] cursor-pointer">
            Počni odmah <FaArrowRightLong className="text-(--button-text)" />
          </Link>
          <Link to="/saradnja#planovi" className="flex items-center gap-2 px-7 py-2 rounded-full border-2 border-(--primary) text-(--button-text) font-semibold text-[13px] cursor-pointer">
            Pogledaj planove{" "}
            <FaArrowRightLong className="text-(--button-text)" />
          </Link>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 aspect-square w-[90%] max-w-180 -z-10 bg-radial from-(--primary)/50 to-(--bg) to-80% rounded-full"></div>
    </section>
  );
};

export default Hero;
