'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, PackageCheck } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const reviews = [
    {
      name: 'Raza M.',
      role: 'Food & Spice Distributor (Dubai, UAE)',
      text: 'Working with Zohreh Janatabadi for Super Negin Saffron and Zarvan Barberry has been exceptional. The batch consistency and authentic aroma meet the high expectations of our GCC clients.'
    },
    {
      name: 'Farhan A.',
      role: 'Wholesale Grocery Importer (Oman)',
      text: 'The Nazila Soybean Oil in 16kg Tin (Halab) packaging arrived perfectly intact. High quality, clear lab analysis, and smooth customs clearing at the port.'
    },
    {
      name: 'Dmitry K.',
      role: 'Catering Supply Chain Manager (CIS Region)',
      text: 'Feijoa Tomato Paste with 27-29% Brix and zero starch is hard to find at competitive rates. Zohreh delivered exact specs as promised in our contract.'
    },
    {
      name: 'Suresh P.',
      role: 'Dry Fruit Merchant (India)',
      text: 'Prompt communication, complete Phytosanitary COA certificates, and top-tier Iranian Pistachios. Zohreh Janatabadi is a reliable trade partner for bulk orders.'
    }
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="testimonials" className="py-16 bg-[#051813] text-[#F4F0E6] border-y border-[#1A4337] relative z-10 w-full">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 w-full space-y-10">

        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#F4F0E6]">
            Trusted by Global B2B Importers
          </h2>
          <p className="text-xs sm:text-sm font-medium text-[#F4F0E6]/70 max-w-xl mx-auto">
            Real feedback from commercial partners across the Middle East, CIS, India, and Europe.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto w-full">
          <motion.div layout className="w-full bg-[#133A2E] rounded-3xl border border-[#1A4337] shadow-2xl relative overflow-hidden p-6 sm:p-10">
            <Quote size={80} className="absolute -bottom-4 -right-4 text-[#C5922E]/10 pointer-events-none transform -rotate-12" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full flex flex-col justify-between text-left space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-[#C5922E]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#C5922E" strokeWidth={0} />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-[#F4F0E6] font-medium leading-relaxed italic border-l-2 border-[#C5922E] pl-4">
                    "{reviews[activeIndex].text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1A4337] flex items-center justify-between w-full">
                  <div>
                    <h4 className="text-[#F4F0E6] text-xs sm:text-sm font-black uppercase tracking-wide">
                      {reviews[activeIndex].name}
                    </h4>
                    <p className="text-[#C5922E] text-xs font-bold mt-0.5">
                      {reviews[activeIndex].role}
                    </p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#C5922E]/40 bg-[#C5922E]/15 flex items-center justify-center text-[#C5922E] shrink-0">
                    <PackageCheck size={14} />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="flex justify-center items-center gap-4 mt-6 w-full">
            <button
              onClick={handlePrev}
              type="button"
              className="p-2.5 rounded-full bg-[#133A2E] border border-[#1A4337] text-[#F4F0E6]/70 hover:text-[#C5922E] transition-all shadow-sm cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all ${i === activeIndex ? 'w-6 bg-[#C5922E]' : 'w-1.5 bg-[#133A2E]'}`} />
              ))}
            </div>
            <button
              onClick={handleNext}
              type="button"
              className="p-2.5 rounded-full bg-[#133A2E] border border-[#1A4337] text-[#F4F0E6]/70 hover:text-[#C5922E] transition-all shadow-sm cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}