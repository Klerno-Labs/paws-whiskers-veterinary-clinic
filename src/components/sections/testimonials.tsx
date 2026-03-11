export function Testimonials() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p>"Dr. Sato saved our dog's life when he ate something he shouldn't have. We trust them completely."</p>
          <p className="font-bold mt-4">— The Garcias</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p>"Most gentle vet we've ever been to. Our anxious cat was actually calm here."</p>
          <p className="font-bold mt-4">— Nina P.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <p>"They take the time to explain everything. You can tell they genuinely love animals."</p>
          <p className="font-bold mt-4">— Chris & Amanda B.</p>
        </div>
      </div>
    </section>
  );
}