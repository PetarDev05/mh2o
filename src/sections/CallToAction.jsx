import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const CallToAction = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 py-10">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-col items-center gap-10"
      >
        <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
          Start your transformation today
        </h2>
        <p className="text-(--text) max-w-150 text-center">
          Select the program that best fits your situation or send an inquiry
          via the contact form and you are ready to go.
        </p>
        <div className="flex flex-col min-[450px]:flex-row items-center min-[450px]:items-center gap-5">
          <Link
            to="/saradnja#kontakt"
            className="flex items-center gap-2 px-7 py-2 rounded-full bg-linear-to-r from-(--primary) to-(--secondary) text-(--button-text) font-semibold text-[13px] cursor-pointer hover:scale-105 duration-150"
          >
            Start now <FaArrowRightLong className="text-(--button-text)" />
          </Link>
          <Link
            to="/saradnja#planovi"
            className="flex items-center gap-2 px-7 py-2 rounded-full border-2 border-(--primary) text-(--button-text) font-semibold text-[13px] cursor-pointer hover:scale-105 duration-150"
          >
            Browse plans <FaArrowRightLong className="text-(--button-text)" />
          </Link>
        </div>
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-1/2 aspect-square w-[90%] max-w-150 -z-10 bg-radial from-(--primary)/50 to-(--bg) to-70% rounded-full"></div>
    </section>
  );
};

export default CallToAction;
