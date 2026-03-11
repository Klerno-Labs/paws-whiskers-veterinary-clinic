export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center">What Our Clients Say</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="italic">"Dr. Sato saved our dog's life when he ate something he shouldn't have. We trust them completely."</p>
          <p className="mt-4 font-bold">— The Garcias</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="italic">"Most gentle vet we've ever been to. Our anxious cat was actually calm here."</p>
          <p className="mt-4 font-bold">— Nina P.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="italic">"They take the time to explain everything. You can tell they genuinely love animals."</p>
          <p className="mt-4 font-bold">— Chris & Amanda B.</p>
        </div>
      </div>
    </section>
  );
}