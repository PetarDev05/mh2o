import { FaArrowRightLong } from "react-icons/fa6";
import { FaCircleDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full px-5 sm:px-10 md:px-20 lg:px-30 backdrop-blur-2xl">
      <motion.div
        initial={{ x: 40, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="w-full min-h-screen flex flex-col items-start justify-center gap-5 lg:gap-10 bg-(--bg)/50 backdrop-blur-lg"
      >
        <p className="w-fit py-0.5 pl-1.5 pr-3 border border-(--primary) rounded-full text-(--heading) text-[12px] flex items-center gap-2 bg-(--primary)/25">
          <FaCircleDot className="text-(--white) text-md" />
          Personal Trainer John Smith
        </p>
        <h1 className="text-(--heading) text-5xl md:text-6xl lg:text-7xl max-w-190 font-semibold">
          <span className="text-transparent bg-clip-text bg-linear-to-r from-(--primary) to-(--secondary)">
            Premium personal{" "}
          </span>
          and online trainings
        </h1>
        <p className="text-(--text) text-md md:text-lg max-w-190">
          Perfect weight loss and transformation of lifestyle, which creates
          longlasting rezults for your health, body and mind.
        </p>
        <div className="flex flex-col min-[450px]:flex-row items-start min-[450px]:items-center gap-5">
          <Link
            to="/work_with_me#contact"
            className="flex items-center gap-2 px-7 py-2 rounded-full bg-linear-to-r from-(--primary) to-(--secondary) text-(--button-text) font-semibold text-[13px] cursor-pointer hover:scale-105 duration-150"
          >
            Start now <FaArrowRightLong className="text-(--button-text)" />
          </Link>
          <Link
            to="/work_with_me#programs"
            className="flex items-center gap-2 px-7 py-2 rounded-full border-2 border-(--primary) text-(--button-text) font-semibold text-[13px] cursor-pointer hover:scale-105 duration-150"
          >
            Browse programs{" "}
            <FaArrowRightLong className="text-(--button-text)" />
          </Link>
        </div>
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 aspect-square w-[90%] max-w-180 -z-10 bg-radial from-(--primary)/50 to-(--bg) to-80% rounded-full"></div>
    </section>
  );
};

export default Hero;
