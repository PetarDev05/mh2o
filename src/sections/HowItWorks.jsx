import { Link } from "react-router-dom";
import Roadmap from "../components/how_it_works/Roadmap.jsx";
import { FaArrowRightLong } from "react-icons/fa6";

const HowItWorks = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 py-10">
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        How the process works
      </h2>
      <p className="text-(--text) max-w-150 text-center">
        Take these simple steps, contact me and I'll prepare specialized training program that best fits your needs and experience level.
      </p>
      <Roadmap />

      <Link to="/saradnja#kontakt" className="flex items-center gap-2 px-7 py-2 rounded-full border-2 border-(--primary) text-(--button-text) font-semibold text-[13px] cursor-pointer hover:scale-105 duration-150">
        Start now <FaArrowRightLong className="text-(--button-text)" />
      </Link>
    </section>
  );
};

export default HowItWorks;
