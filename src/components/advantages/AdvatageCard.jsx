import { SiOpenaigym } from "react-icons/si";
import { PiBrainLight } from "react-icons/pi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { LuClipboardCheck } from "react-icons/lu";
import { LuDumbbell } from "react-icons/lu";
import { MdOutlineWaterDrop } from "react-icons/md";

const AdvatageCard = ({ advantage }) => {
  return (
    <div className="w-full max-w-75 flex flex-col items-center gap-6 p-6 rounded-2xl bg-(--bg)/50 backdrop-blur-lg border border-(--border) hover:border-(--primary) hover:bg-(--card-hover)">
      <div className="w-full flex flex-row items-center justify-start gap-4 ">
        <span className="p-3 rounded-md border border-(--primary) text-2xl text-(--white)">
          {advantage.icon === "shape" ? <SiOpenaigym /> : ""}
          {advantage.icon === "brain" ? <PiBrainLight /> : ""}
          {advantage.icon === "limit" ? <IoSpeedometerOutline /> : ""}
          {advantage.icon === "accountability" ? <LuClipboardCheck /> : ""}
          {advantage.icon === "program" ? <LuDumbbell /> : ""}
          {advantage.icon === "drop" ? <MdOutlineWaterDrop /> : ""}
        </span>
        <h3 className="text-(--heading)">{advantage.title}</h3>
      </div>
      <p className="text-(--text)">{advantage.text}</p>
    </div>
  );
};

export default AdvatageCard;
