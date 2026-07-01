const AboutMe = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-6 py-10">
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        A few words about me
      </h2>
      <div className="w-full max-w-100 min-[850px]:max-w-170 lg:max-w-200 flex flex-col items-center gap-6 text-(--text) text-justify">
        <div className="flex flex-col min-[850px]:flex-row-reverse items-center min-[850px]:items-start gap-6">
          <div className="flex flex-col items-center gap-6">
            <p>
              Hello, I'm John Smith, a certified personal trainer dedicated to
              helping people build stronger, healthier, and more confident lives
              through fitness. My coaching philosophy is based on consistency,
              proper technique, and creating sustainable habits that produce
              long-term results.
            </p>
            <p>
              Over the years, I have worked with clients of different fitness
              levels, from complete beginners to experienced athletes. This
              experience has allowed me to develop personalized training
              programs that focus on each individual's goals, abilities, and
              lifestyle rather than following one-size-fits-all routines.
            </p>
          </div>
          <img
            src="/me.jpg"
            alt="picture-of-me"
            className="w-85 min-[850px]:w-70 lg:w-65 rounded-3xl hover:scale-103 duration-300"
          />
        </div>

        <h3 className="w-full text-(--heading) text-2xl font-semibold">
          My personal mission
        </h3>
        <p>
          For me, fitness is about much more than physical appearance. Regular
          exercise improves strength, confidence, mental well-being, and overall
          quality of life. My goal is to help every client enjoy the process,
          stay motivated, and achieve results they can maintain for years to
          come.
        </p>
        <p>
          I continuously expand my knowledge through professional education,
          certifications, and practical coaching experience. Staying up to date
          with modern training methods and exercise science allows me to provide
          effective, safe, and evidence-based guidance for every client.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
