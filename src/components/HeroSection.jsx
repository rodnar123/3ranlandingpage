import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        This is a modern{" "}
        <span className="bg-gradient-to-r from-orange-700 to-orange-950 text-transparent bg-clip-text">
          company landing page
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Gone are the days of text-heavy landing pages that lull visitors to
        sleep. Today's digital landscape demands attention-grabbing visuals,
        clear value propositions, and a seamless user experience. Here's what
        makes a modern landing page sing
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-br from-orange-700 to-orange-950 py-3 px-4 mx-3 rounded-md"
        >
          COntact Us Now
        </a>
        <a href="#" className="py-3 px-4 mx-3 rounded-md border">
          Explore
        </a>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-900 shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-900 shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
