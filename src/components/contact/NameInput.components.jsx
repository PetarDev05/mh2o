const NameInput = ({ input, handleChange }) => {
  return (
    <div className="w-full rounded-[5px] flex flex-col items-start gap-2">
      <input
        name="name"
        value={input.name}
        onChange={handleChange}
        className="border border-(--border)"
        type="text"
        placeholder="Vaše Ime *"
      />
    </div>
  );
};

export default NameInput;
