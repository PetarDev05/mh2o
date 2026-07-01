const FormHead = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src="/john_smith_logo.png" alt="form-logo" className="w-25" />
      <p className="text-sm text-(--text) text-center">
        Send me a message and I'll get back to you with further
        instructions.
      </p>
    </div>
  );
};

export default FormHead;
