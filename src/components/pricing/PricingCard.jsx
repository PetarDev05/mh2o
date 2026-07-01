import { FaArrowRightLong, FaCircleCheck, FaCircleDot } from "react-icons/fa6";

const PricingCard = ({ program }) => {
  return (
    <div
      className={`w-full max-w-75 px-6 py-8 rounded-2xl border ${program.best ? "border-(--primary)" : "border-(--border)"} bg-(--bg)/50 backdrop-blur-lg hover:border-(--primary) flex flex-col items-start justify-between gap-6 hover:scale-101 duration-300`}
    >
      <div className="w-full flex flex-col items-start gap-6">
        <div className="w-full flex flex-col items-start gap-2">
          <div className="w-full text-(--heading) text-lg md:text-xl font-semibold flex items-center justify-between">
            <h3 className="">{program.title}</h3>
            {program.best && (
              <p className="py-0.5 pl-1.5 pr-3 border border-(--green) rounded-full text-(--heading) text-[12px] flex items-center gap-2 bg-(--green)/25">
                <FaCircleDot className="text-(--white) text-md" />
                Best choice
              </p>
            )}
          </div>
          <p className="text-sm md:text-md text-(--text)">{program.subtitle}</p>
        </div>
        <hr className="w-full text-(--border)" />

        <ul className="w-full flex flex-col items-start gap-1.5 text-(--text) text-sm">
          {program.features.map((feature, i) => (
            <li
              key={`${program.id}-${i}`}
              className="flex items-start justify-start gap-3"
            >
              <FaCircleCheck className="mt-0.5 text-(--primary)" />
              <p className="flex-1">{feature}</p>
            </li>
          ))}
        </ul>
        <hr className="w-full text-(--border)" />
      </div>
      <div className="w-full flex flex-col items-start gap-4">
        <p className="text-(--text) text-lg line-through">{program.oldPrice}</p>
        <p
          className={`${program.best ? "text-(--green)" : "text-(--white)"} text-xl`}
        >
          {program.price}
        </p>
        <a
          href="#contact"
          className="flex items-center gap-2 px-7 py-2 rounded-md bg-(--primary) text-(--button-text) font-semibold text-[13px] cursor-pointer"
        >
          Izaberi plan <FaArrowRightLong className="text-(--button-text)" />
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
