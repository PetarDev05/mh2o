const Video = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center gap-10 px-5 py-10">
      <h2 className="text-(--heading) text-3xl md:text-4xl lg:text-5xl max-w-190 font-semibold text-center">
        Da sumiramo
      </h2>
      <p className="text-(--text) max-w-150 text-center">
        Ovaj video ukratko objašnjava kako saradnja sa mnom funkcioniše
      </p>
      <iframe
        scrolling="no"
        className="aspect-video w-full max-w-250 rounded-2xl shadow-video"
        src="//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FKDyNMH3bulM%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DKDyNMH3bulM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FKDyNMH3bulM%2Fhqdefault.jpg&type=text%2Fhtml&schema=youtube"
        frameborder="0"
      ></iframe>
    </section>
  );
};

export default Video;
