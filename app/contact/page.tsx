'use client';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  MessageSquare, 
  ChevronDown,
  Building2,
  Clock,
  Globe
} from 'lucide-react';

export default function ContactPage() {
  const whatsappNumber = '989100424714';
  const whatsappMsg = encodeURIComponent(
    'Hello Zohreh, I would like to inquire about commodity availability, pricing, and export supply terms.'
  );

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'What is the Minimum Order Quantity (MOQ) for commodity export?',
      a: 'Our standard MOQ depends on the commodity. For Feijoa Tomato Paste and Refined Oils, standard shipments start at one 20ft Full Container Load (FCL). For high-value commodities like Super Negin Saffron and Zarvan Barberry, flexible air-freight and smaller commercial batch sizes are available.'
    },
    {
      q: 'How are quality analysis and lab testing reports provided?',
      a: 'Every export shipment is sampled and tested in accredited laboratories. Official Phytosanitary Certificates and Certificate of Analysis (COA) specifying chemical purity, Crocin levels, Brix content, and safety compliance are issued for customs clearance.'
    },
    {
      q: 'Which Incoterms and payment methods are supported?',
      a: 'We quote on FOB origin shipping ports, CIF destination port, or CFR terms. Flexible payment arrangements including Wire Transfer (T/T), Letter of Credit (L/C), and milestone agreements are supported.'
    }
  ];

  return (
    <div className="bg-[#0B2B22] text-[#F4F0E6] min-h-screen selection:bg-[#C5922E] selection:text-[#0B2B22]">

      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0B2B22] text-[#F4F0E6] overflow-hidden py-16 md:py-20 border-b border-[#1A4337]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1756749442845-4973b7cede48?auto=format&fit=crop&w=1920&q=100"
            alt="Zohreh Janatabadi Commercial Communication & Trade Desk"
            fill
            priority
            unoptimized
            className="object-cover object-center opacity-40 -scale-x-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B2B22]/90 via-[#0B2B22]/60 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl space-y-7 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase leading-tight">
              <span className="text-[#F4F0E6]">CONTACT OUR </span>
              <span className="text-[#C5922E] drop-shadow-[0_0_25px_rgba(197,146,46,0.3)]">EXPORT DESK</span>
            </h1>

            <p className="text-[#F4F0E6]/80 text-sm md:text-base leading-relaxed">
              Connect directly with Zohreh Janatabadi for global commodity inquiries, contract supply terms, COA verification, and wholesale freight quotes across Saffron, Barberry, Oils, Tomato Paste, and Pistachios.
            </p>

            <div className="pt-2">
              <a
                href="#contact-form"
                className="inline-flex items-center gap-3 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20 hover:shadow-[#C5922E]/40 transform active:scale-95 group"
              >
                <span>SEND DIRECT INQUIRY</span>
                <ArrowDown className="w-4 h-4 stroke-[3] transition-transform duration-300 group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HEAD OFFICE DETAILS & FORM */}
      <section id="contact-form" className="py-20 bg-[#0B2B22] border-b border-[#1A4337]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#C5922E]">Trade Desk & Representative</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#F4F0E6] mt-1 tracking-tight">
                Zohreh Janatabadi
              </h2>
              <p className="text-xs text-[#F4F0E6]/70 mt-2 leading-relaxed">
                Direct export supply channel for Super Negin Saffron, Zarvan Barberry, Nazila Refined Oils, Feijoa Tomato Paste, and Iranian Pistachios.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-[#133A2E] border border-[#1A4337] p-5 rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#C5922E] uppercase tracking-wider">Direct Phone & WhatsApp</h3>
                  <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#F4F0E6] hover:text-[#C5922E] transition mt-0.5 block">
                    +98 910 042 4714
                  </a>
                </div>
              </div>

              <div className="bg-[#133A2E] border border-[#1A4337] p-5 rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#C5922E] uppercase tracking-wider">Email Inquiry</h3>
                  <p className="text-sm font-semibold text-[#F4F0E6] mt-0.5">trade@zohreh-janatabadi.com</p>
                </div>
              </div>

              <div className="bg-[#133A2E] border border-[#1A4337] p-5 rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-[#0B2B22] border border-[#1A4337] rounded-xl text-[#C5922E] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#C5922E] uppercase tracking-wider">Working Hours</h3>
                  <p className="text-sm font-semibold text-[#F4F0E6] mt-0.5">Saturday – Thursday: 8:00 AM – 6:00 PM (GMT+3.5)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-[#133A2E] border border-[#1A4337] rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="mb-6 space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#C5922E]">Direct Communication</span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#F4F0E6]">Send Us a Message</h2>
            </div>

            {submitted ? (
              <div className="bg-[#0B2B22] border border-[#C5922E] rounded-2xl p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-[#C5922E] text-[#0B2B22] rounded-full flex items-center justify-center mx-auto font-black text-xl">
                  ✓
                </div>
                <h3 className="text-xl font-black text-[#F4F0E6]">Message Delivered!</h3>
                <p className="text-xs text-[#F4F0E6]/80 leading-relaxed max-w-md mx-auto">
                  Thank you for your inquiry. Zohreh Janatabadi will review your message and reach out shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-bold text-[#C5922E] underline uppercase tracking-wider pt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] rounded-xl px-4 py-3 text-xs text-[#F4F0E6] outline-none transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] rounded-xl px-4 py-3 text-xs text-[#F4F0E6] outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Phone / WhatsApp</label>
                    <input
                      type="text"
                      placeholder="+123..."
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] rounded-xl px-4 py-3 text-xs text-[#F4F0E6] outline-none transition"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Commodity Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Saffron / Tomato Paste Bulk Order"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] rounded-xl px-4 py-3 text-xs text-[#F4F0E6] outline-none transition"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-[#F4F0E6]/80 uppercase tracking-wider">Message Detail</label>
                  <textarea
                    rows={4}
                    placeholder="Provide details about required quantities, target destination port, or specific lab test requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#0B2B22] border border-[#1A4337] focus:border-[#C5922E] rounded-xl px-4 py-3 text-xs text-[#F4F0E6] outline-none transition"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#C5922E] hover:bg-[#B38226] text-[#0B2B22] font-black text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-300 shadow-xl shadow-[#C5922E]/20"
                >
                  <Send className="w-4 h-4 fill-[#0B2B22]" />
                  <span>Submit Commodity Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. FAQ SECTION */}
      <section className="py-20 bg-[#133A2E]">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-[#F4F0E6]">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-[#0B2B22] border border-[#1A4337] rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-[#F4F0E6] hover:text-[#C5922E] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-[#C5922E] shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-0 text-xs text-[#F4F0E6]/70 leading-relaxed border-t border-[#1A4337]/50">
                    <p className="mt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}