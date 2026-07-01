const Transformations = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 pb-10 bg-linear-to-b from-(--bg) via-(--trans-grad-bg) to-(--bg)">
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        Transformations of my clients
      </h2>
      <p className="text-(--text) max-w-150 text-center">
        Here are some of incredible transformations that my clients achieved.
      </p>
      <div className="flex aspect-square w-full max-w-125 overflow-x-hidden rounded-3xl border-5 border-(--primary)">
        <div className="flex flex-row items-center animate-slide">
          <img src="/trans-01.jpg" alt="transformation-image" className="min-w-full aspect-square" />
          <img src="/trans-02.jpg" alt="transformation-image" className="min-w-full aspect-square" />
          <img src="/trans-03.avif" alt="transformation-image" className="min-w-full aspect-square" />
          <img src="/trans-04.jpg" alt="transformation-image" className="min-w-full aspect-square" />
          <img src="/trans-05.jpg" alt="transformation-image" className="min-w-full aspect-square" />
          <img src="/trans-06.jpg" alt="transformation-image" className="min-w-full aspect-square" />
          {/* duplicates */}
          <img src="/trans-01.jpg" alt="transformation-image" className="min-w-full aspect-square" />
          <img src="/trans-02.jpg" alt="transformation-image" className="min-w-full aspect-square" />
          <img src="/trans-03.avif" alt="transformation-image" className="min-w-full aspect-square" />
          <img src="/trans-04.jpg" alt="transformation-image" className="min-w-full aspect-square" />
          <img src="/trans-05.jpg" alt="transformation-image" className="min-w-full aspect-square" />
          <img src="/trans-06.jpg" alt="transformation-image" className="min-w-full aspect-square" />
        </div>
      </div>
    </section>
  );
};

export default Transformations;
