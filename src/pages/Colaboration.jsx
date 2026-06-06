import Contact from "../sections/Contact.jsx";
import Pricing from "../sections/Pricing.jsx";
import Transformations from "../sections/Transformations.jsx";
import Video from "../sections/Video.jsx";

const Colaboration = () => {
  

  return (
    <section className="w-full min-h-screen flex flex-col items-center gap-10 pt-18">
      <Transformations />
      <Pricing />
      <Video />
      <Contact />
    </section>
  );
};

export default Colaboration;
