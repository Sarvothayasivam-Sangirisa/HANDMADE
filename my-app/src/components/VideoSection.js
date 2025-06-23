const VideoSection = () => {
  return (
    <section className="px-6 py-12 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Watch Our Creative Process</h2>

      <div className="mx-auto w-[420px] md:w-[660px] h-[200px] md:h-[315px]">
        <iframe
          className="w-full h-full rounded-lg shadow-md"
          src="https://www.youtube.com/embed/vBdXK3G6PhM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;
