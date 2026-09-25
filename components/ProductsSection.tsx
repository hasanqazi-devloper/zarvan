'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const products = [
  {
    id: 'saffron',
    name: 'Super Negin Saffron',
    type: 'Grade-A Export Quality',
    spec: 'ISO 3632 Tested | Crocin > 240',
    image: '/safron.png',
  },
  {
    id: 'barberry',
    name: 'Zarvan Dried Barberry (Zereshk)',
    type: 'Puffy (Pofaki) & Anari',
    spec: 'Uniform Size & Natural Red Color',
    image: '/berry.png',
  },
  {
    id: 'pistachio',
    name: 'Iranian Premium Pistachios',
    type: 'Akbari, Fandoghi & Ahmad Aghaei',
    spec: 'Laser Sorted | Hand Picked',
    image: '/p3.png',
  },
  // {
  //   id: 'nazila-oil',
  //   name: 'Nazila Soybean Oil (Tin Packaging)',
  //   type: 'Refined Edible Cooking Oil',
  //   spec: '5kg & 16kg Tin Containers (Halab)',
  //   image: '/p4.png',
  // },
  {
    id: 'feijoa-paste',
    name: 'Feijoa Tomato Paste',
    type: 'Natural Concentrated Paste',
    spec: 'Brix 27-29% | Salt 1.5% | No Additives',
    image: '/past.png',
  },
  {
    id: 'baran-oil',
    name: 'Baran Golahi Edible Oil',
    type: 'Daily Household & Catering',
    spec: '1.5kg & 5kg Retail/Wholesale Packs',
    image: '/oil.png',
  }
];

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-[#051813] text-[#EFECE6] border-b border-[#1A4337] relative overflow-hidden">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#C5922E]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 space-y-16 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl md:text-5xl font-black text-[#EFECE6] tracking-tight">
            Iranian Premium Agro Catalog
          </h2>
          <p className="text-[#EFECE6]/70 text-xs md:text-sm font-medium">
            Explore authentic Iranian Saffron, Dried Fruits, Pure Oils, and Food Ingredients curated for B2B Importers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item) => (
            <div
              key={item.id}
              className="group relative h-[360px] bg-gradient-to-b from-[#0B2B22] to-[#08221B] border border-[#1A4337] hover:border-[#C5922E] rounded-3xl p-6 flex flex-col justify-between transition-all duration-500 hover:-translate-y-3 shadow-2xl hover:shadow-[0_20px_40px_rgba(197,146,46,0.2)] overflow-hidden cursor-pointer"
            >
              <div className="relative w-full h-44 flex items-center justify-center my-auto">
                <div className="absolute w-32 h-32 bg-[#C5922E]/20 rounded-full blur-2xl group-hover:bg-[#C5922E]/35 transition-all duration-500" />
                <div className="absolute bottom-2 w-28 h-4 bg-black/40 rounded-[100%] blur-md group-hover:scale-125 group-hover:bg-black/60 transition-all duration-500" />

                <div className="relative w-45 h-45 transition-transform duration-700 ease-out group-hover:scale-115 group-hover:-translate-y-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.7)]"
                  />
                </div>
              </div>

              <div className="w-full text-center space-y-2 z-10">
                <div>
                  <h3 className="text-lg font-black text-[#EFECE6] group-hover:text-[#C5922E] transition-colors leading-snug">
                    {item.name}
                  </h3>
                  {/* <p className="text-[11px] text-[#C5922E] font-bold mt-0.5">{item.type}</p> */}
                  {/* <p className="text-[10px] text-[#EFECE6]/60 font-medium">{item.spec}</p> */}
                </div>

                <a
                  href="#rfq"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#C5922E] hover:bg-[#B38226] text-[#051813] py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-lg transform translate-y-1 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 mt-2"
                >
                  <span>Inquire Container Price</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}