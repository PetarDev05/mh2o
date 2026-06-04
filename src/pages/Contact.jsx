import Form from "../components/contact/Form.jsx";

const Contact = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 py-10 bg-radial from-(--gradient-bg)/50 to-(--bg) to-50%">
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        Kontaktiraj me
      </h2>
      <p className="text-(--text) max-w-150 text-center">
        Ovde mozete uneti i dodatne informacije o sebi, svojim ciljevima i navikama, na osnovu cega ce biti izradjen potpuno personalizovan plan treninga.
      </p>
      <Form />
    </section>
  );
};

export default Contact;
