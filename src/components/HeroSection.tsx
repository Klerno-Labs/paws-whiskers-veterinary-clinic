"use client";


import React from 'react';
import { images } from '../config/images';

interface HeroProps {
  badge?: string;
  title: string;
  description: string;
  primaryCta: { label: string; onClick: () => void };
  secondaryCta: { label: string; onClick: () => void };
}

const HeroSection: React.FC<HeroProps> = ({ badge, title, description, primaryCta, secondaryCta }) => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#f0fdf4]">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div>
          {badge && <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full">{badge}</span>}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">{title}</h1>
          <p className="text-xl sm:text-2xl font-semibold text-slate-600">{description}</p>
          <div className="mt-6">
            <button onClick={primaryCta.onClick} className="bg-green-600 text-white px-6 py-2.5 rounded-full text-lg font-semibold hover:bg-green-700">
              {primaryCta.label}
            </button>
            <button onClick={secondaryCta.onClick} className="text-green-600 border border-green-600 px-6 py-2.5 rounded-full text-lg font-semibold hover:bg-green-50">
              {secondaryCta.label}
            </button>
          </div>
        </div>
        <div className="relative rounded-[32px] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square">
          <img src={images.hero.src} alt={images.hero.alt} width={images.hero.width} height={images.hero.height} priority />
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/50 rounded-full blur-[80px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
