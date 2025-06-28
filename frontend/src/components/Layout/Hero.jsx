import { Link } from "react-router-dom";
import heroImg from "../../assets/cyanide-hero.jpg";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="Rabbit"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="text-center text-white p-6">
          <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
            HOLIDAY <br /> MODE: ON
          </h1>
          <p className="text-sm tracking-tighter md:text-lg mb-6">
            Discover travel-perfect looks with lightning-fast delivery.
          </p>
          <Link
            to="collections/all"
            className="bg-white text-gray-950 px-6 py-3 rounded-sm text-lg hover:bg-white/90"
          >
            Grab Yours
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
