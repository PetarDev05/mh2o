const AboutBrand = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 py-10">
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        Kako je nastao brend MH2O
      </h2>
      <div className="w-full flex flex-col-reverse min-[950px]:flex-row items-center justify-evenly gap-5 px-5">
        <div className="flex flex-col items-center min-[950px]:items-start min-[950px]:w-1/2 gap-5">
          <hr className="w-full text-(--border)" />
          <div className="flex max-[500px]:flex-col flex-row items-center gap-5 sm:gap-10">
            <span className="flex items-center justify-center border border-(--secondary) bg-(--secondary)/15 min-w-15 h-15 text-xl font-semibold rounded-md text-(--secondary)">
              01
            </span>
            <p className="text-(--text) max-w-150 max-[500px]:text-center">
              Već godinama posmatram koliko se članovi fitness industrije trude
              da učine stanovništvo što nezdravijim. Ishrana koju industrija
              nudi je katastrofalna, suplementacija i hemija se
              zloupotrebljavaju u skoro svakoj grani sporta.
            </p>
          </div>
          <hr className="w-full text-(--border)" />
          <div className="flex max-[500px]:flex-col flex-row items-center gap-5 sm:gap-10">
            <span className="flex items-center justify-center border border-(--secondary) bg-(--secondary)/15 min-w-15 h-15 text-xl font-semibold rounded-md text-(--secondary)">
              02
            </span>
            <p className="text-(--text) max-w-150 max-[500px]:text-center">
              Tehničko izvodjenje vežbi, po statističkim podacima u skoro 85%
              slučajeva nije primenjeno na odgovarajući način, i to je jedan od
              razloga zbog čega vam je potreban Personalni trener.
            </p>
          </div>
          <hr className="w-full text-(--border)" />
          <div className="flex max-[500px]:flex-col flex-row items-center gap-5 sm:gap-10">
            <span className="flex items-center justify-center border border-(--secondary) bg-(--secondary)/15 min-w-15 h-15 text-xl font-semibold rounded-md text-(--secondary)">
              03
            </span>
            <p className="text-(--text) max-w-150 max-[500px]:text-center">
              Psiho-fizičko stanje sportista i uticaj društvenih mreža vode naše
              stanovništvo u propast, a stanovništvo ima jako malo pravih
              primera na koje mogu da se ugledaju.
            </p>
          </div>
          <hr className="w-full text-(--border)" />
        </div>
        <div className="aspect-square w-full max-w-100 bg-radial from-(--primary)/70 to-(--bg) to-60% flex items-center justify-center">
          <img src="/mh2o-logo.png" alt="logo" className="w-[90%] hover:scale-105 duration-400" />
        </div>
      </div>

      {/* <div className="relative w-full max-w-200 flex items-center justify-center gap-5 rounded-2xl ">
        <div className="w-full h-full flex flex-col items-center justify-center gap-5 rounded-2xl backdrop-blur-[10px] py-25 px-20 z-15 text-(--white) bg-(--bg)/60">
          <p>
            Već godinama posmatram koliko se članovi fitness industrije trude da
            učine stanovništvo što nezdravijim. Ishrana koju industrija nudi je
            katastrofalna, suplementacija i hemija se zloupotrebljavaju u skoro
            svakoj grani sporta.
          </p>
          <p>
            Tehničko izvodjenje vežbi, po statističkim podacima u skoro 85%
            slučajeva nije primenjeno na odgovarajući način, i to je jedan od
            razloga zbog čega vam je potreban Personalni trener.
          </p>
          <p>
            Psiho-fizičko stanje sportista i uticaj društvenih mreža vode naše
            stanovništvo u propast, a stanovništvo ima jako malo pravih primera
            na koje mogu da se ugledaju.
          </p>
        </div>
        <img
          src="/mh2o-logo.png"
          alt="logo"
          className="w-110 absolute top-1/2 left-1/2 -translate-1/2"
        />
      </div> */}
    </section>
  );
};

export default AboutBrand;
