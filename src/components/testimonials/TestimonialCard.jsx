const TestimonialCard = ({ testimonial }) => {
  return <div className="w-full max-w-100 p-5 border border-(--border) flex flex-col items-start justify-between gap-5 text-(--white) bg-(--bg)/50 backdrop-blur-lg hover:text-(--primary) hover:border-(--primary) hover:bg-(--testimonial-hover)">
    <p className="text-(--text) text-sm">{testimonial.text}</p>
    <p className="italic">- {testimonial.name} -</p>
  </div>;
};

export default TestimonialCard;
