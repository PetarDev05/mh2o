import { useState } from "react";
import { toast } from "react-hot-toast";
import FormHead from "./FormHead.components.jsx";
import NameInput from "./NameInput.components.jsx";
import EmailInput from "./EmailInput.components.jsx";
import SelectInput from "./SelectInput.components.jsx";
import TextArea from "./TextArea.components.jsx";
import Buttons from "./Buttons.components.jsx";

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    trainingLevel: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const clearInput = () => {
    setInput({
      name: "",
      email: "",
      trainingLevel: "",
      message: "",
      username: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Poruka je poslata");
      setInput({
        name: "",
        email: "",
        trainingLevel: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-100  gap-5 p-4 sm:p-6 backdrop-blur-lg"
    >
      <FormHead />

      <NameInput input={input} handleChange={handleChange} />

      <EmailInput input={input} handleChange={handleChange} />

      <SelectInput input={input} handleChange={handleChange} />

      <TextArea input={input} handleChange={handleChange} />

      <Buttons loading={loading} clearInput={clearInput} />
    </form>
  );
};

export default Form;
