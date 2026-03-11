export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="max-w-3xl mx-auto">
        <blockquote className="bg-white p-6 rounded-lg shadow-md mb-4">
          <p>"Dr. Sato saved our dog's life when he ate something he shouldn't have. We trust them completely."</p>
          <footer className="mt-4">— The Garcias</footer>
        </blockquote>
        <blockquote className="bg-white p-6 rounded-lg shadow-md mb-4">
          <p>"Most gentle vet we've ever been to. Our anxious cat was actually calm here."</p>
          <footer className="mt-4">— Nina P.</footer>
        </blockquote>
        <blockquote className="bg-white p-6 rounded-lg shadow-md mb-4">
          <p>"They take the time to explain everything. You can tell they genuinely love animals."</p>
          <footer className="mt-4">— Chris & Amanda B.</footer>
        </blockquote>
      </div>
    </section>
  );
}