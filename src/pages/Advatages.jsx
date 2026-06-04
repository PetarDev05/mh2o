import AdvatageCard from "../components/advantages/AdvatageCard";
import { advatages } from "../data/advatages.js";

const Advatages = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 py-10">
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        Prednosti treninga sa personalnim trenerom
      </h2>
      <p className="text-(--text) max-w-150 text-center">
        Iz dole navedenih razloga sam odlučio da tržištu, stanovništvu i mladima ponudim opciju zdravog trenažnog procesa.
      </p>
      <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-10">
        {advatages.map((advantage) => (
          <AdvatageCard key={advantage.id} advantage={advantage} />
        ))}
      </div>
    </section>
  );
};

export default Advatages;
