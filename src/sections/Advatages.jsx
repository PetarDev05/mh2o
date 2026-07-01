import { Link } from "react-router-dom";
import AdvatageCard from "../components/advantages/AdvatageCard.jsx";
import { advantages } from "../data/advatages.js";
import { FaArrowRightLong } from "react-icons/fa6";

const Advatages = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 py-10">
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        Advantages of trainging with personal coach
      </h2>
      <p className="text-(--text) max-w-150 text-center">
        These are some of the most important advantages of having a mentor while
        starting fitness journey towards new body and new character.
      </p>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-10">
        {advantages.map((advantage) => (
          <AdvatageCard key={advantage.id} advantage={advantage} />
        ))}
      </div>
      <Link
        to="/work_with_me#contact"
        className="flex items-center gap-2 px-7 py-2 rounded-full bg-linear-to-r from-(--primary) to-(--secondary) text-(--button-text) font-semibold text-[13px] cursor-pointer hover:scale-105 duration-150"
      >
        Try it yourself <FaArrowRightLong className="text-(--button-text)" />
      </Link>
    </section>
  );
};

export default Advatages;
