'use client';

import React from 'react';
import { ShieldCheck, Award, FileCheck2, Truck } from 'lucide-react';

export default function WhyChooseUsSection() {
  const guarantees = [
    {
      icon: ShieldCheck,
      title: "Authentic Iranian Origin",
      desc: "Direct sourcing from Khorasan saffron fields, Kerman pistachio orchards, and Qazvin processors with zero origin blending."
    },
    {
      icon: FileCheck2,
      title: "EU, GCC & CIS Standard COA",
      desc: "Batch-specific laboratory analysis covering Brix (27-29%), zero-starch certification, moisture control, and phytosanitary papers."
    },
    {
      icon: Award,
      title: "Tin (Halab) & Sealed Packaging",
      desc: "UV-protected 5kg & 16kg metal tins for edible oils alongside vacuum-sealed packaging for spices and dry fruits."
    },
    {
      icon: Truck,
      title: "Reliable Export Logistics",
      desc: "Direct vessel container loading from Southern Iranian ports with complete customs documentation for international buyers."
    }
  ];

  return (
    <section className="bg-[#133A2E] text-[#F4F0E6] py-16 px-4 md:px-8 border-b border-[#1A4337] relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C5922E]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
            International B2B Quality Standards
          </h2>
          <p className="text-xs sm:text-sm text-[#F4F0E6]/70 font-medium">
            Designed to meet the exact procurement criteria of global food chains, importers, and industrial kitchens.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index} 
                className="bg-[#051813] border border-[#1A4337] p-6 rounded-2xl space-y-3 hover:border-[#C5922E] transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-[0_10px_25px_rgba(197,146,46,0.15)] flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="p-3 bg-[#0B2B22] border border-[#1A4337] text-[#C5922E] rounded-xl w-fit shadow-inner">
                    <Icon className="w-5 h-5 stroke-[2]" />
                  </div>
                  <h3 className="text-sm font-bold text-[#F4F0E6] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#F4F0E6]/70 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}