import AboutBrand from "../sections/AboutBrand.jsx";
import AboutMe from "../sections/AboutMe.jsx";
import Advatages from "../sections/Advatages.jsx";
import CallToAction from "../sections/CallToAction.jsx";

const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center gap-10 pt-18">
      <AboutBrand />
      <AboutMe />
      <Advatages />
      <CallToAction />
    </section>
  );
};

export default About;
