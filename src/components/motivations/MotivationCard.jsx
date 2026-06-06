import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "motion/react";

const MotivationCard = ({ motivation }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="w-full flex flex-col items-start gap-6 p-6 rounded-2xl border border-(--border) hover:shadow-motivation hover:-translate-y-0.5 duration-200">
      <div className="w-full flex flex-row items-center gap-6 text-(--heading)">
        <span
          onClick={() => setOpen((prev) => !prev)}
          className="border border-(--border) hover:border-(--primary) hover:bg-(--primary)/20 duration-100 rounded p-1 cursor-pointer"
        >
          <IoIosArrowDown className={`text-2xl ${open ? "" : "-rotate-90"}`} />
        </span>
        <h3 className="text-lg sm:text-xl font-semibold">{motivation.title}</h3>
      </div>
      {open && <p className="text-(--text) text-sm">{motivation.text}</p>}
    </motion.div>
  );
};

export default MotivationCard;
