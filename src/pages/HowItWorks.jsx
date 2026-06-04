import Roadmap from "../components/how_it_works/Roadmap.jsx";

const HowItWorks = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 py-10">
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">Kako saradnja funkcioniše</h2>
      <p className="text-(--text) max-w-150 text-center">Preduzmite nekoliko jednostavnih koraka, naša saradnja počinje i vidimo se na treningu.</p>
      <Roadmap />
    </section>
  );
};

export default HowItWorks;
