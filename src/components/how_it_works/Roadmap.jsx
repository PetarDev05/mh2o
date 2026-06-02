import { steps } from "../../data/steps.js";
import RoadmapCard from "./RoadmapCard.jsx";

const Roadmap = () => {
  return (
    <div className="relative max-w-150 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-15">
      {steps.map((step) => (
        <RoadmapCard key={step.id} step={step} />
      ))}
      <div className="w-[40%] h-[80%] md:w-[60%] md:h-[60%] absolute top-1/2 left-1/2 -translate-1/2 rounded-[25px] md:rounded-[50px] shadow-step-mobile md:shadow-step">
      </div>
    </div>
  );
};

export default Roadmap;
