import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PricingCard from "../components/pricing/PricingCard.jsx";
import { programs } from "../data/programs.js";
import { motion } from "motion/react";

const Pricing = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const flag = location.hash.split("#")[1];
      const section = document.getElementById(flag);
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <section
      id="planovi"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 py-10 bg-radial from-(--gradient-bg)/50 to-(--bg) to-60%"
    >
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        Istražite planove
      </h2>
      <p className="text-(--text) max-w-150 text-center">
        Ovde možete pronaći sve planove, odaberite onaj koji vam najviše
        odgovara i koji se najbolje uklapa u vaše ciljeve i budžet.
      </p>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        {programs.map((program) => (
          <PricingCard key={program.id} program={program} />
        ))}
      </motion.div>
    </section>
  );
};

export default Pricing;
