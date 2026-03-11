import { cn } from "@/lib/utils";

export default function TrustBar() {
  return (
    <div className={cn("bg-gray-100 py-4")}>
      <div className="max-w-7xl mx-auto flex justify-center space-x-8">
        <img src="/images/aaha.png" alt="Accredited by AAHA" className="h-10" />
        <img src="/images/five-star.png" alt="5-Star Rated" className="h-10" />
      </div>
    </div>
  );
}