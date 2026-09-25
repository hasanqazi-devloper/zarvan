'use client';

import React from 'react';
import { Trees, Microscope, PackageCheck, ShieldCheck, Ship } from 'lucide-react';

export default function WorkflowSection() {
  const steps = [
    {
      num: '01',
      icon: Trees,
      title: 'Selective Sourcing',
      desc: 'Hand-picked Saffron, Zarvan Barberries, and Pistachios directly from Iranian farms.'
    },
    {
      num: '02',
      icon: Microscope,
      title: 'Lab Testing & Sizing',
      desc: 'Certified COA testing for Saffron Crocin levels, Brix (27-29%), and moisture control.'
    },
    {
      num: '03',
      icon: PackageCheck,
      title: 'Export Grade Packing',
      desc: '5kg/16kg Tin (Halab) drums for oils & moisture-proof cartons for dry goods.'
    },
    {
      num: '04',
      icon: ShieldCheck,
      title: 'Customs & COA Clearance',
      desc: 'Phytosanitary certificate, Origin papers & Health Inspection approvals.'
    },
    {
      num: '05',
      icon: Ship,
      title: 'Container Port Dispatch',
      desc: 'Direct vessel shipment to global ports with end-to-end consignment tracking.'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-[#FAF5E8] border-b border-[#E6DBBF]">
      <div className="max-w-6xl mx-auto space-y-10">

        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2B22]">
            Our 5-Step Farm-To-Export Workflow
          </h2>
          <p className="text-xs sm:text-sm text-[#0B2B22]/70 font-medium">
            Standardized Quality &amp; Inspection Protocol for Global Food Distributors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#FFFFFF] border border-[#E2D5B8] p-5 rounded-2xl shadow-sm hover:border-[#C5922E] transition-all relative flex flex-col justify-between hover:-translate-y-1"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-[#C5922E]">{step.num}</span>
                    <div className="p-2 bg-[#FAF5E8] text-[#0B2B22] rounded-xl border border-[#E6DBBF]">
                      <IconComp className="w-4 h-4 text-[#C5922E]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B2B22] text-sm">{step.title}</h3>
                    <p className="text-[11px] text-[#0B2B22]/70 leading-normal mt-1">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}