const TextArea = ({ input, handleChange }) => {
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <textarea
        name="message"
        value={input.message}
        onChange={handleChange}
        className="border border-(--border) min-h-35 resize-none"
        placeholder="Upišite svoju poruku ovde..."
      ></textarea>
    </div>
  );
};

export default TextArea;
