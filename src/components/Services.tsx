```typescript
const Services = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Our Services</h2>
        <p className="mt-2 text-lg leading-relaxed text-gray-600">
          Explore our range of services designed to help your business succeed.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Consulting</h3>
          <p className="mt-2 text-base leading-relaxed text-gray-600">
            Expert advice to guide your business decisions.
          </p>
        </div>
        <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Marketing</h3>
          <p className="mt-2 text-base leading-relaxed text-gray-600">
            Innovative marketing strategies to reach your audience.
          </p>
        </div>
        <div className="p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Support</h3>
          <p className="mt-2 text-base leading-relaxed text-gray-600">
            Ongoing support to ensure your success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
```