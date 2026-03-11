"use client";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeroSplitProps {
  badge?: string;
  title: string;
  description: string;
  primaryCta: { label: string; onClick: () => void };
  secondaryCta: { label: string; onClick: () => void };
  imageUrl: string;
}

export default function HeroSplit({ badge, title, description, primaryCta, secondaryCta, imageUrl }: HeroSplitProps) {
  return (
    <section className={cn("flex flex-col md:flex-row items-center justify-between py-20")}>
      <div className="md:w-1/2">
        {badge && <span className="bg-green-600 text-white px-4 py-2 rounded-full">{badge}</span>}
        <h1 className="text-4xl font-bold mt-4">{title}</h1>
        <p className="text-lg mt-2">{description}</p>
        <div className="mt-4">
          <button onClick={primaryCta.onClick} className="bg-green-600 text-white px-6 py-2 rounded-lg mr-4">{primaryCta.label}</button>
          <button onClick={secondaryCta.onClick} className="border border-green-600 text-green-600 px-6 py-2 rounded-lg">{secondaryCta.label}</button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Image src={imageUrl} alt="Hero Image" width={1200} height={800} priority />
      </div>
    </section>
  );
}