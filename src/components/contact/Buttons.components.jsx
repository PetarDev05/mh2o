// import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";
// import { RiTwitterXFill } from "react-icons/ri";
import { TbCircleDotted } from "react-icons/tb";

const Buttons = ({ loading, clearInput }) => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-end sm:items-center gap-5 justify-end">
      {/* <div className="w-full sm:w-fit flex flex-row items-center gap-3 text-xl text-(--text)">
        <span
          className="flex-1 flex items-center justify-center hover:bg-(--light)
hover:text-(--dark) transition-all duration-200 text-(--light) px-2 py-1.75 border border-(--border) rounded-[5px] cursor-pointer"
        >
          <FaInstagram />
        </span>
        <span
          className="flex-1 flex items-center justify-center hover:bg-(--light)
hover:text-(--dark) transition-all duration-200 text-(--light) px-2 py-1.75 border border-(--border) rounded-[5px] cursor-pointer"
        >
          <FaLinkedin />
        </span>
        <span
          className="flex-1 flex items-center justify-center hover:bg-(--light)
hover:text-(--dark) transition-all duration-200 text-(--light) px-2 py-1.75 border border-(--border) rounded-[5px] cursor-pointer"
        >
          <RiTwitterXFill />
        </span>
      </div> */}

      <div className="flex flex-row items-center gap-3">
        <span
          className="text-(--primary) transition-all px-2 py-1.75 border border-(--primary) rounded-[5px] cursor-pointer hover:scale-104 duration-150"
          disabled={loading}
          id="refresh"
          type="button"
          onClick={clearInput}
        >
          <IoRefresh className="text-xl" />
        </span>
        <button
          className="w-30 flex items-center justify-center gap-2 px-7 py-2 rounded-md bg-(--primary) text-(--button-text) font-semibold text-[13px] cursor-pointer hover:scale-104 duration-150"
          id="submit"
          disabled={loading}
          type="submit"
        >
          {loading ? (
            <TbCircleDotted className="w-fit animate-spin text-xl" />
          ) : (
            "Pošalji"
          )}
        </button>
      </div>
    </div>
  );
};

export default Buttons;
