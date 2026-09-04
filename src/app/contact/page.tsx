"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState("IDLE");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("SUBMITTING");
    setTimeout(() => setFormStatus("SUCCESS"), 1500);
  };

  const categories = [
    "General Enquiries",
    "Business Enquiries",
    "Partnerships",
    "Product Enquiries",
    "Media / Press"
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-20">
        
        {/* Left Side */}
        <div className="lg:w-5/12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-sans tracking-[0.2em] text-xs font-medium uppercase text-white/50 mb-6 inline-block border border-white/10 bg-white/5 rounded-full px-4 py-1.5 backdrop-blur-sm">
              Connect
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8">
              Contact <br/> Kaventra.
            </h1>
            <p className="text-lg text-white/60 font-light leading-relaxed max-w-md">
              Whether you're looking to partner, enquire about our ecosystem, or join us in building the architecture of tomorrow, we're ready to listen.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 flex flex-col gap-8"
          >
            <div className="border-t border-white/10 pt-8">
              <h3 className="font-sans text-xs font-semibold tracking-widest text-white/40 uppercase mb-6">Enquiry Types</h3>
              <ul className="flex flex-col gap-4">
                {categories.map(cat => (
                  <li key={cat} className="font-sans text-sm text-white/70 font-medium tracking-wide">{cat}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Form */}
        <div className="lg:w-7/12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/[0.02] p-8 md:p-12 border border-white/10 rounded-3xl relative overflow-hidden"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>

            {formStatus === "SUCCESS" ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center relative z-10">
                <div className="w-16 h-16 bg-white/10 border border-white/20 text-white flex items-center justify-center rounded-full mb-6">✓</div>
                <h3 className="font-heading text-2xl font-medium tracking-tight mb-4">Message received</h3>
                <p className="text-white/50 font-light max-w-sm">Your communication has been securely logged into our system. We will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="font-sans text-[10px] font-semibold tracking-widest text-white/50 uppercase">Name</label>
                    <input required type="text" className="bg-transparent border-b border-white/20 py-2 px-0 focus:outline-none focus:border-white text-white transition-colors rounded-none placeholder:text-white/20" placeholder="Your full name" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="font-sans text-[10px] font-semibold tracking-widest text-white/50 uppercase">Email</label>
                    <input required type="email" className="bg-transparent border-b border-white/20 py-2 px-0 focus:outline-none focus:border-white text-white transition-colors rounded-none placeholder:text-white/20" placeholder="you@example.com" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-3">
                  <label className="font-sans text-[10px] font-semibold tracking-widest text-white/50 uppercase">Subject</label>
                  <select required defaultValue="" className="bg-transparent border-b border-white/20 py-2 px-0 focus:outline-none focus:border-white text-white transition-colors rounded-none appearance-none [&>option]:bg-black">
                    <option value="" disabled className="text-white/20">Select an enquiry type</option>
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="font-sans text-[10px] font-semibold tracking-widest text-white/50 uppercase">Message</label>
                  <textarea required rows={5} className="bg-transparent border-b border-white/20 py-2 px-0 focus:outline-none focus:border-white text-white transition-colors resize-none rounded-none placeholder:text-white/20" placeholder="How can we help you?"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === "SUBMITTING"}
                  className="mt-6 bg-white text-black font-sans text-sm font-medium rounded-full py-4 px-8 hover:bg-gray-200 transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2 self-start"
                >
                  {formStatus === "SUBMITTING" ? "Transmitting..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>

      </div>
    </div>
  );
}
