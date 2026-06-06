import Hero from "../components/hero/Hero.jsx";
import HowItWorks from "../sections/HowItWorks.jsx";
import Motivations from "../sections/Motivations.jsx";
import Testimonials from "../sections/Testimonials.jsx";

const Home = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center">
      <Hero />
      <HowItWorks />
      <Testimonials />
      <Motivations />
    </section>
  );
};

export default Home;
