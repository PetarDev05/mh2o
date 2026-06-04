const Transformations = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 py-10">
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        Transformacije mojih klijenata
      </h2>
      <p className="text-(--text) max-w-150 text-center">
        Evo nekoliko sjajnih transformacija koje su ostvarili moji klijenti.
      </p>
      <div className="flex aspect-square w-full max-w-125 overflow-x-hidden rounded-2xl">
        <div className="flex flex-row items-center animate-slide">
          <img src="/trans01.png" alt="transformation-image" />
          <img src="/trans02.png" alt="transformation-image" />
          <img src="/trans03.png" alt="transformation-image" />
          <img src="/trans04.png" alt="transformation-image" />
          <img src="/trans05.png" alt="transformation-image" />
          <img src="/trans06.png" alt="transformation-image" />
          <img src="/trans07.png" alt="transformation-image" />
          <img src="/trans08.png" alt="transformation-image" />
          <img src="/trans09.png" alt="transformation-image" />
          {/* duplicates */}
          <img src="/trans01.png" alt="transformation-image" />
          <img src="/trans02.png" alt="transformation-image" />
          <img src="/trans03.png" alt="transformation-image" />
          <img src="/trans04.png" alt="transformation-image" />
          <img src="/trans05.png" alt="transformation-image" />
          <img src="/trans06.png" alt="transformation-image" />
          <img src="/trans07.png" alt="transformation-image" />
          <img src="/trans08.png" alt="transformation-image" />
          <img src="/trans09.png" alt="transformation-image" />
        </div>
        
      </div>
    </section>
  );
};

export default Transformations;
