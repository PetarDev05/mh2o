import PricingCard from "../components/pricing/PricingCard.jsx";
import { programs } from "../data/programs.js";

const Pricing = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 py-10 bg-radial from-(--gradient-bg)/50 to-(--bg) to-60%">
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        Istražite planove
      </h2>
      <p className="text-(--text) max-w-150 text-center">
        Ovde možete pronaći sve planove, odaberite onaj koji vam najviše
        odgovara i koji se najbolje uklapa u vaše ciljeve i budžet.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {programs.map((program) => (
          <PricingCard key={program.id} program={program} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
