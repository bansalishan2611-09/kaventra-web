"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CareersPage() {
  const areasOfWork = [
    "AI",
    "DEV",
    "CREATOR",
    "TOOLS",
    "STUDY",
    "FUTURE"
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-32"
        >
          <span className="font-sans tracking-[0.2em] text-xs font-medium uppercase text-white/50 mb-6 inline-block border border-white/10 bg-white/5 rounded-full px-4 py-1.5 backdrop-blur-sm">
            Careers at Kaventra
          </span>
          <h1 className="text-5xl md:text-7xl font-medium font-heading tracking-tight mb-8">
            Build the architecture.
          </h1>
          <p className="text-lg text-white/60 font-light leading-relaxed">
            We are looking for builders, thinkers, and architects who understand that technology is meant to be interconnected.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 border-t border-white/5 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-2xl font-medium tracking-tight mb-6 text-white/90">Life at KAVENTRA</h2>
            <p className="text-white/50 font-light leading-relaxed">
              We operate as a focused, high-leverage team. There is no busywork. Every role is structural, and every team member contributes to the long-term architecture of the ecosystem.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-heading text-2xl font-medium tracking-tight mb-6 text-white/90">What we look for</h2>
            <p className="text-white/50 font-light leading-relaxed">
              We value precision, deep technical understanding, and the ability to think beyond a single feature. We want people who can see the entire system and build components that scale.
            </p>
          </motion.div>
        </div>

        <div className="border border-white/10 bg-white/[0.02] p-12 mb-32 rounded-2xl">
          <h2 className="font-heading text-2xl font-medium mb-10 text-center tracking-tight text-white/90">Areas of Work</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {areasOfWork.map(area => (
              <span key={area} className="px-6 py-2 border border-white/10 rounded-full bg-white/5 text-sm font-sans font-medium text-white/70 tracking-wider hover:bg-white/10 hover:text-white transition-colors cursor-default">
                {area}
              </span>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-20 flex flex-col items-center text-center">
          <h2 className="font-heading text-3xl font-medium mb-8 tracking-tight text-white/90">Open Positions</h2>
          
          <div className="w-full max-w-2xl border border-white/10 p-12 bg-white/[0.02] rounded-2xl">
            <p className="font-sans text-white/50 tracking-widest text-sm uppercase font-semibold">
              There are currently no open positions.
            </p>
          </div>

          <div className="mt-20">
            <h3 className="font-heading text-xl font-medium mb-4 tracking-tight text-white/90">Future Opportunities</h3>
            <p className="text-white/50 font-light mb-8 max-w-lg mx-auto">
              We are always interested in connecting with exceptional talent. If you believe you belong at KAVENTRA, reach out.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-sans text-sm font-medium rounded-full hover:scale-105 transition-transform duration-300"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
