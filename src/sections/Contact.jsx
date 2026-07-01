import { useEffect } from "react";
import Form from "../components/contact/Form.jsx";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const flag = location.hash.split("#")[1];
      const section = document.getElementById(flag);
      section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <section
      id="kontakt"
      className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 py-10 bg-radial from-(--gradient-bg)/50 to-(--bg) to-50%"
    >
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        Get in touch
      </h2>
      <p className="text-(--text) max-w-150 text-center">
        You can enter here additional info about yourself, your goals and habits
        and based on that I'll build completely personalized training program.
      </p>
      <Form />
    </section>
  );
};

export default Contact;
