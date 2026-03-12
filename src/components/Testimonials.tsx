
const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What Our Clients Say</h2>
        <p className="mt-2 text-lg leading-relaxed text-gray-600">
          Hear from some of our satisfied clients.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="p-6 md:p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <p className="text-base leading-relaxed text-gray-600">
            "The consulting services provided were exceptional and helped us streamline our operations." 
          </p>
          <p className="mt-4 font-semibold">Maria L.</p>
        </div>
        <div className="p-6 md:p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <p className="text-base leading-relaxed text-gray-600">
            "Their marketing strategies significantly increased our visibility and customer engagement."
          </p>
          <p className="mt-4 font-semibold">James T.</p>
        </div>
        <div className="p-6 md:p-8 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <p className="text-base leading-relaxed text-gray-600">
            "The support team was always available and provided us with the assistance we needed."
          </p>
          <p className="mt-4 font-semibold">Emily R.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
