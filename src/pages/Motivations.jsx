import MotivationCard from "../components/motivations/MotivationCard";
import { motivations } from "../data/motivations";

const Motivations = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 py-10">
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        Da li ste znali?
      </h2>
      <p className="text-(--text) max-w-150 text-center">
        Par interesantnih i korisnih informacija koje vam mogu biti od pomoći u
        trenažnom procesu.
      </p>
      <div className="w-full max-w-180 flex flex-col items-center gap-6">
        {motivations.map((motivation) => (
          <MotivationCard key={motivation.id} motivation={motivation} />
        ))}
      </div>
    </section>
  );
};

export default Motivations;
