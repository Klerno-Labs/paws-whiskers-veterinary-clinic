
import Image from "next/image";
import { images } from "@/config/images";

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-start bg-gray-50 relative">
      <Image
        src={images.hero.src}
        alt={images.hero.alt}
        width={images.hero.width}
        height={images.hero.height}
        priority={true}
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
          Elevate Your Business Today
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-600">
          Discover innovative solutions tailored to your needs.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="#contact" className="bg-primary text-white py-3 px-6 rounded-lg shadow-md hover:brightness-110 transition">
            Get Started
          </a>
          <a href="#services" className="border border-gray-300 text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-100 transition">
            Learn More
          </a>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <span className="text-gray-900">↓</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
