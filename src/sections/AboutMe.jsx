const AboutMe = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-6 py-10">
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        Moja biografija
      </h2>
      <div className="w-full max-w-100 min-[850px]:max-w-170 lg:max-w-200 flex flex-col items-center gap-6 text-(--text) text-justify">
        <div className="flex flex-col min-[850px]:flex-row-reverse items-center min-[850px]:items-start gap-6">
          <div className="flex flex-col items-center gap-6">
            <p>
              Pozdrav, ja sam Miloš Ordić. Rođen sam 8. marta 1996, pa je možda baš zato moja misija da
              edukujem uglavnom ženske vežbače, tokom trenažnog procesa. Tom
              prilikom je stvoren BOOTY BOOSTER program.
            </p>
            <p>
              Od pete godine života, aktivno treniram i bavim se sportom kao
              naukom. Pored ogromne količine literature koju sam pročitao i
              testirao tokom samostalnog trenažnog procesa, stvorila se ideja da
              svoje znanje prenesem dalje. Učestvovao sam na radionicama
              zatvorenog tipa za usavršavanje trenera.
            </p>
            <p className="max-[850px]:hidden">
              Nosilac sam nekoliko nagrada i licenci, izmedju ostalog i FISAF
              licence za personalnog trenera i primenu sporta medju
              gradjanstvom.
            </p>
          </div>
          <img src="/me.png" alt="picture-of-me" className="w-85 min-[850px]:w-70 lg:w-65 rounded-3xl hover:scale-103 duration-300" />
        </div>
        <p className="min-[850px]:hidden">
          Nosilac sam nekoliko nagrada i licenci, izmedju ostalog i FISAF
          licence za personalnog trenera i primenu sporta medju gradjanstvom.
        </p>
        <h3 className="w-full text-(--heading) text-2xl font-semibold">Moja lična misija</h3>
        <p> 
          Spoznao sam sebe kroz višegodišnji profesionalni sport.
          <br /> Odlučio sam, da svoju viziju zdravog života i profesionalnu
          edukaciju prenesem na što veći broj gradjana kako bi smo živeli u
          boljem i zdravijem društvu.
          <br /> Beneficije kvalitetnog sportskog programa i edukacije se
          odražava na sve segmente života. Pridružite se budjenu nacije u
          zdravim navikama.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
