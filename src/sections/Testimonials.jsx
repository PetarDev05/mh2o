import { Link } from "react-router-dom";
import TestimonialCard from "../components/testimonials/TestimonialCard";
import { testimonials } from "../data/testimonials";
import { FaArrowRightLong } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 py-10">
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        What some of my clients say
      </h2>
      <p className="text-(--text) max-w-150 text-center">
        Here, I put just a few messages that I got from my clients, after the
        results thay achived.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {testimonials.map((testimonial, i) => (
          <TestimonialCard
            key={`${testimonial.id}-${i}`}
            testimonial={testimonial}
          />
        ))}
      </div>
      <Link
        to="/work_with_me#programs"
        className="flex items-center gap-2 px-7 py-2 rounded-full bg-linear-to-r from-(--primary) to-(--secondary) text-(--button-text) font-semibold text-[13px] cursor-pointer hover:scale-105 duration-150"
      >
        Join us
        <FaArrowRightLong className="text-(--button-text)" />
      </Link>
    </section>
  );
};

export default Testimonials;
