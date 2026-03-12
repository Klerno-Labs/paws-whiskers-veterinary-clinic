
const About = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About Us</h2>
        <p className="mt-2 text-lg leading-relaxed text-gray-600">
          We are a dedicated team of professionals committed to providing exceptional services to help your business thrive.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="p-6 md:p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="mt-2 text-base leading-relaxed text-gray-600">
            To empower businesses with innovative solutions and unparalleled support.
          </p>
        </div>
        <div className="p-6 md:p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Our Vision</h3>
          <p className="mt-2 text-base leading-relaxed text-gray-600">
            To be the leading provider of business solutions in our community.
          </p>
        </div>
        <div className="p-6 md:p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Our Values</h3>
          <p className="mt-2 text-base leading-relaxed text-gray-600">
            Integrity, Excellence, and Innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
