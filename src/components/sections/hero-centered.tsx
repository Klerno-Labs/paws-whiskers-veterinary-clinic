import { cn } from "@/lib/utils";

interface HeroCenteredProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function HeroCentered({ title, subtitle, className }: HeroCenteredProps) {
  return (
    <section className={cn("pt-24 pb-16 bg-white text-center", className)}>
      <div className="container-custom max-w-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
          {title}
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      </div>
    </section>
  );
}