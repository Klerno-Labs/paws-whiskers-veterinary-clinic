import { Shield, Star, Heart } from "lucide-react";

const trustItems = [
  { icon: Shield, text: "AAHA Accredited" },
  { icon: Heart, text: "Fear Free Certified" },
  { icon: Star, text: "5-Star Rated" },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-slate-100 py-8">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-slate-600">
              <item.icon className="text-primary-600 w-5 h-5" />
              <span className="font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}