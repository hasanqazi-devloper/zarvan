'use client';

import React from 'react';
import { Check, X, ShieldAlert, ShieldCheck } from 'lucide-react';

export default function ComparisonSection() {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-[#FAF5E8] text-[#0B2B22] border-b border-[#E6DBBF]">
      <div className="max-w-5xl mx-auto space-y-8">
        
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2B22]">
            Uncertified Traders vs. Direct Iranian Supply
          </h2>
          <p className="text-xs sm:text-sm text-[#0B2B22]/70 font-medium">
            How Zohreh Janatabadi secures high-grade commodities and protects international buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#FFFFFF] border border-[#E2D5B8] p-6 rounded-3xl shadow-sm space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#E2D5B8] pb-3">
              <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                <ShieldAlert className="w-4 h-4" />
                <span>Unverified Middlemen</span>
              </div>
              <span className="text-[10px] bg-red-100 text-red-800 font-black px-2.5 py-0.5 rounded-full uppercase">
                High Risk
              </span>
            </div>
            
            <ul className="space-y-3 text-xs text-[#0B2B22]/80 font-medium">
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Inconsistent saffron aroma, crocin purity, and artificially colored barberry.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Tomato paste loaded with starch or unauthorized additives to fake thickness.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Weak packaging leaking oil or letting moisture spoil food products in transit.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span>Broker markups adding up to 15% to total bulk purchase prices.</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#0B2B22] text-[#F4F0E6] border border-[#C5922E] p-6 rounded-3xl shadow-xl space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#1A4337] pb-3">
              <div className="flex items-center gap-2 text-[#C5922E] font-bold text-sm">
                <ShieldCheck className="w-4 h-4" />
                <span>Zohreh Janatabadi Direct Trade</span>
              </div>
              <span className="text-[10px] bg-[#C5922E] text-[#0B2B22] font-black px-2.5 py-0.5 rounded-full uppercase">
                Guaranteed &amp; Certified
              </span>
            </div>

            <ul className="space-y-3 text-xs text-[#F4F0E6]/90 font-medium">
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                <span>100% Pure Super Negin Saffron &amp; Zarvan Barberries with natural color &amp; aroma.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                <span>Feijoa Tomato Paste guaranteed 27-29% Brix, 1.5% Salt, zero starch/additives.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                <span>Nazila &amp; Baran Edible Oils in sturdy 5kg &amp; 16kg UV-proof Tin (Halab) containers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0 mt-0.5" />
                <span>Transparent FOB/CIF container pricing directly from source producers.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}