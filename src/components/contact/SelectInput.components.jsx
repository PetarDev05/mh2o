const SelectInput = ({ input, handleChange }) => {
  return (
      <select
        name="trainingLevel"
        value={input.trainingLevel}
        onChange={handleChange}
        className="border border-(--border) cursor-pointer"
      >
        <option className="bg-(--bg) backdrop-blur-lg" value="">
          Odaberite svoj nivo utreniranosti
        </option>
        <option className="bg-(--bg) backdrop-blur-lg" value="begginer">
          Početni
        </option>
        <option className="bg-(--bg) backdrop-blur-lg" value="intermediate">
          Srednji
        </option>
        <option className="bg-(--bg) backdrop-blur-lg" value="advanced">
          Napredan
        </option>
      </select>
  );
};

export default SelectInput;
