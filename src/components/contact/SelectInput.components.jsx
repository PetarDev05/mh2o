const SelectInput = ({ input, handleChange }) => {
  return (
      <select
        name="trainingLevel"
        value={input.trainingLevel}
        onChange={handleChange}
        className="border border-(--border) cursor-pointer"
      >
        <option className="bg-(--bg) backdrop-blur-lg" value="">
          Chose your experience level
        </option>
        <option className="bg-(--bg) backdrop-blur-lg" value="begginer">
          Begginer
        </option>
        <option className="bg-(--bg) backdrop-blur-lg" value="intermediate">
          Intermediate
        </option>
        <option className="bg-(--bg) backdrop-blur-lg" value="advanced">
          Advanced
        </option>
      </select>
  );
};

export default SelectInput;
