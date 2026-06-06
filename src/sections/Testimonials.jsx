import { Link } from "react-router-dom";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import { testimonials } from "../data/testimonials";
import { FaArrowRightLong } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 py-10">
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        Šta kažu neki od mojih klijenata
      </h2>
      <p className="text-(--text) max-w-150 text-center">
        Ovde sam istakao samo nekoliko poruka koje sam dobio od svojih klijenata
        nakon rezultata koje su ostvarili.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard
            key={`${testimonial.id}-${i}`}
            testimonial={testimonial}
          />
        ))}
      </div>
      <Link
        to="/saradnja#planovi"
        className="flex items-center gap-2 px-7 py-2 rounded-full bg-linear-to-r from-(--primary) to-(--secondary) text-(--button-text) font-semibold text-[13px] cursor-pointer hover:scale-105 duration-150"
      >
        Prodruži nam se <FaArrowRightLong className="text-(--button-text)" />
      </Link>
    </section>
  );
};

export default Testimonials;
