const RoadmapCard = ({ step }) => {
  return (
    <div className="w-full max-w-90 min-h-35 md:min-h-42.5 p-5 rounded-2xl border border-(--border) hover:border-(--primary) bg-(--bg)/50 backdrop-blur-md flex flex-col items-start gap-3 z-10 hover:scale-105 duration-150">
      <div className="w-full flex items-center justify-start gap-3">
        <p className="text-(--primary) font-semibold">{step.number}</p>
        <h3 className="text-(--heading) text-lg">{step.title}</h3>
      </div>
      <p className="text-(--text) text-sm">{step.text}</p>
    </div>
  );
};

export default RoadmapCard;
