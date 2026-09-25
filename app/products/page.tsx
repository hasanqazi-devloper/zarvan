'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ArrowDown, 
  ShieldCheck, 
  ThermometerSnowflake, 
  FileCheck2, 
  Ship, 
  Globe2, 
  PackageCheck, 
  MessageSquare, 
  ArrowUpRight,
  Check,
  Award,
  Scale,
  SlidersHorizontal
} from 'lucide-react';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const whatsappNumber = '989100424714';
  const whatsappMsg = encodeURIComponent(
    'Hello Zohreh, I would like to request an export quotation for your B2B agro catalog.'
  );

  const categories = ['ALL', 'SAFFRON', 'BARBERRY', 'EDIBLE OILS', 'TOMATO PASTE', 'PISTACHIOS'];

  const products = [
    {
      id: 'super-negin-saffron',
      category: 'SAFFRON',
      name: 'Super Negin Saffron',
      subTitle: 'Grade A Premium Harvest',
      image: '/safron.png',
      description: '100% pure, deep red all-red threads with zero yellow style. Extracted from original Khorasan harvests, offering Crocin color intensity > 240.',
      specs: {
        grading: 'Crocin > 240 | Safranal > 35',
        moisture: '< 7%',
        packaging: '1g to 500g Glass / Tin / Bulk',
        origin: 'Khorasan, Iran'
      },
      tag: 'Highest Grade'
    },
    {
      id: 'zarvan-barberry',
      category: 'BARBERRY',
      name: 'Zarvan Barberry (Pofaki)',
      subTitle: 'Puff-Dried Seedless Barberry',
      image: '/berry.png',
      description: 'Naturally shade-dried red barberries (Zereshk Pofaki). Features rich ruby red color, uniform size, and high moisture retention without oiling.',
      specs: {
        grading: 'Export Grade A (Seedless)',
        moisture: '< 15%',
        packaging: '10kg / 15kg Export Cartons',
        origin: 'South Khorasan'
      },
      tag: 'Export Bestseller'
    },
    {
      id: 'nazila-soybean-oil',
      category: 'EDIBLE OILS',
      name: 'Nazila Refined Soybean Oil',
      subTitle: 'Pure Edible Cooking Oil',
      image: '/oil.png',
      description: 'Fully refined, deodorized, and bleached soybean oil. Formulated for heavy-duty food production, commercial frying, and culinary packaging.',
      specs: {
        grading: '100% Refined & Deodorized',
        moisture: '< 0.1%',
        packaging: '16kg Metal Tins / Bulk Drums',
        origin: 'Iran Processing Facility'
      },
      tag: 'Commercial Bulk'
    },
    {
      id: 'feijoa-tomato-paste',
      category: 'TOMATO PASTE',
      name: 'Feijoa Tomato Paste',
      subTitle: 'Concentrated Tomato Paste',
      image: '/past.png',
      description: 'Double concentrated, 100% natural tomato paste processed from ripe field tomatoes. Rich red color value (A/B > 2.1) without artificial additives.',
      specs: {
        grading: 'Brix 27-29% / 36-38% Aseptic',
        moisture: 'Standard Concentrated',
        packaging: '400g/800g Cans & 220L Aseptic',
        origin: 'Iranian Agro Processing'
      },
      tag: 'Industrial & Retail'
    },
    {
      id: 'akbari-pistachios',
      category: 'PISTACHIOS',
      name: 'Akbari & Premium Pistachios',
      subTitle: 'Super Long & In-Shell Varieties',
      image: '/p4.png',
      description: 'Hand-picked, naturally split Akbari, Ahmad Aghaei, and Fandoghi in-shell pistachios alongside premium green kernels (GPEK).',
      specs: {
        grading: '18/20 to 28/30 Screen Sizes',
        moisture: '< 5%',
        packaging: '10kg / 25kg Vacuum Bags',
        origin: 'Kerman Hub'
      },
      tag: 'Lab Certified'
    }
  ];

  const filteredProducts = selectedCategory === 'ALL' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-20 md:py-18 border-b border-[#1A4337]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1756749442845-4973b7cede48?auto=format&fit=crop&w=1920&q=100"
            alt="Iranian Agricultural Commodity Export"
            fill
            priority
            unoptimized
            className="object-cover object-center opacity-40 -scale-x-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B22]/85 via-[#0B2B22]/50 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-7 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-none uppercase">
              <span className="text-[#F4F0E6]">EXPORT </span>
              <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">COMMODITY CATALOG.</span>
            </h1>

            <p className="text-[#F4F0E6]/90 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl">
              Explore our laboratory-verified export portfolio managed by Zohreh Janatabadi—featuring Super Negin Saffron, Zarvan Barberry, Nazila Oils, Feijoa Tomato Paste, and Iranian Pistachios.
            </p>

            <div className="pt-2">
              <a
                href="#catalog"
                className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
              >
                <span>VIEW EXPORT PRODUCTS</span>
                <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER CONTROLS */}
      <section id="catalog" className="py-8 bg-[#133A2E] border-b border-[#1A4337] sticky top-0 z-30 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#C5922E]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F4F0E6]">Filter Commodity:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-black tracking-wider transition-all duration-300 ${
                  selectedCategory === cat 
                    ? 'bg-[#C5922E] text-[#0B2B22] shadow-lg shadow-[#C5922E]/20' 
                    : 'bg-[#0B2B22] text-[#F4F0E6]/80 hover:bg-[#1A4337] border border-[#1A4337]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CARDS GRID */}
      <section className="py-16 md:py-20 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-[#133A2E] border border-[#1A4337] rounded-3xl p-6 flex flex-col justify-between hover:border-[#C5922E]/50 transition-all duration-300 group relative"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5922E] bg-[#0B2B22] px-3 py-1 rounded-full border border-[#1A4337]">
                    {product.tag}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4F0E6]/60">
                    {product.category}
                  </span>
                </div>

                {/* IMAGE DISPLAY CONTAINER */}
                <div className="relative h-60 w-full flex items-center justify-center my-2">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    priority
                    className="object-contain object-center drop-shadow-none group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="space-y-4 mt-2">
                  <div>
                    <h3 className="text-2xl font-black text-[#F4F0E6] tracking-tight">{product.name}</h3>
                    <p className="text-xs font-bold text-[#C5922E] tracking-wider uppercase mt-1">{product.subTitle}</p>
                  </div>

                  <p className="text-xs text-[#F4F0E6]/75 leading-relaxed font-normal">
                    {product.description}
                  </p>

                  {/* Specification Table Box */}
                  <div className="bg-[#0B2B22] border border-[#1A4337] rounded-2xl p-4 space-y-2.5 text-xs">
                    <div className="flex justify-between items-center border-b border-[#1A4337] pb-1.5">
                      <span className="text-[#F4F0E6]/60 font-medium">Standard / Grade:</span>
                      <span className="font-bold text-[#F4F0E6] text-right">{product.specs.grading}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#1A4337] pb-1.5">
                      <span className="text-[#F4F0E6]/60 font-medium">Moisture / Spec:</span>
                      <span className="font-bold text-[#F4F0E6] text-right">{product.specs.moisture}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-[#1A4337] pb-1.5">
                      <span className="text-[#F4F0E6]/60 font-medium">Packaging Options:</span>
                      <span className="font-bold text-[#F4F0E6] text-right">{product.specs.packaging}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[#F4F0E6]/60 font-medium">Origin:</span>
                      <span className="font-bold text-[#C5922E] text-right">{product.specs.origin}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello Zohreh, I would like to inquire about B2B prices for ${product.name}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0B2B22] hover:bg-[#C5922E] text-[#F4F0E6] hover:text-[#0B2B22] border border-[#1A4337] font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl transition-all duration-300 group-hover:border-[#C5922E]"
                  >
                    <span>Inquire Market Rate</span>
                    <ArrowUpRight className="w-4 h-4 text-[#C5922E] group-hover:text-[#0B2B22]" />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PACKAGING & BULK SPECIFICATIONS SECTION */}
      <section className="py-16 md:py-18 bg-[#133A2E] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-[#F4F0E6] tracking-tight leading-tight">
              Custom Packaging &amp; Private Label Services
            </h2>
            
            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed font-normal">
              We cater to diverse client needs, offering customized bulk containers, nitrogen-flushed foil bags, 16kg metal tins, and OEM retail packaging designed for international distribution compliance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-[#0B2B22] border border-[#1A4337] rounded-xl flex items-center gap-3">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">16kg Tins &amp; Export Cartons</span>
              </div>
              <div className="p-3.5 bg-[#0B2B22] border border-[#1A4337] rounded-xl flex items-center gap-3">
                <Check className="w-4 h-4 text-[#C5922E] shrink-0" />
                <span className="text-xs font-bold text-[#F4F0E6]">Aseptic Drums &amp; Tin Packaging</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-80 sm:h-[450px] w-full flex items-center justify-center">
            <Image
              src="/hero.png"
              alt="Export Packaging Solutions"
              fill
              priority
              className="object-contain object-center drop-shadow-none"
            />
          </div>

        </div>
      </section>

      {/* 5. QUALITY ASSURANCE & LAB TESTING */}
      <section className="py-16 md:py-20 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl md:text-4xl font-black text-[#F4F0E6] tracking-tight">
              Certified Parameters &amp; Lab Inspection
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300">
              <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Purity Guarantees</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Tested by accredited ISO laboratories ensuring full compliance with destination port standards.
              </p>
            </div>

            <div className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300">
              <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <ThermometerSnowflake className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Moisture Control</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Strict moisture calibration to preserve aroma, shelf life, and taste during long transit.
              </p>
            </div>

            <div className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300">
              <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Optical Sorting</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Automated color sorting and density grading eliminate foreign matter and defective batch portions.
              </p>
            </div>

            <div className="bg-[#133A2E] border border-[#1A4337] hover:border-[#C5922E]/50 p-6 rounded-2xl space-y-4 transition-all duration-300">
              <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] w-fit">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F0E6]">Official Export COAs</h3>
              <p className="text-xs text-[#F4F0E6]/70 leading-relaxed">
                Phytosanitary Certificates, Laboratory COA, and Certificate of Origin included with every batch.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. CALL TO ACTION (RFQ) */}
      <section id="rfq" className="py-16 md:py-20 bg-[#133A2E] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5922E]/10 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F4F0E6] tracking-tight leading-tight">
            Ready to Direct-Source Premium Agro Commodities?
          </h2>

          <p className="text-[#F4F0E6]/80 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Get instant FOB or CIF container prices directly from Zohreh Janatabadi for your required specifications.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl shadow-xl shadow-[#C5922E]/20 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 fill-[#0B2B22]" />
              <span>WhatsApp Instant Quote</span>
            </a>

            <a
              href="mailto:trade@zohreh-janatabadi.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B2B22] hover:bg-[#133A2E] border border-[#1A4337] text-[#F4F0E6] font-bold text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition"
            >
              <span>Email Specifications</span>
              <ArrowUpRight className="w-4 h-4 text-[#C5922E]" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}