"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DirectorSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-black text-white relative border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <span className="font-sans tracking-[0.2em] text-xs font-medium uppercase text-white/50 mb-8 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full backdrop-blur-sm">
          From the Director
        </span>
        
        <motion.blockquote 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium leading-[1.15] tracking-tight mb-12 text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40"
        >
          "KAVENTRA is being built as a long-term vision — not around one product, but around an ecosystem of ideas, technology and people."
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/50 text-lg leading-relaxed mb-12 max-w-2xl font-light"
        >
          Our focus is on building practical, interconnected digital products. Through AI experimentation, software development, and creative technology, we are designing systems for long-term scalability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-12 h-[1px] bg-white/20 mb-2"></div>
          <div>
            <h4 className="font-heading font-medium text-xl text-white tracking-wide">Ishan Bansal</h4>
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/40 mt-1">Director / Founder</p>
          </div>
          
          <Link
            href="/director"
            className="mt-4 group flex items-center gap-2 font-sans text-sm font-medium text-white/60 hover:text-white transition-colors"
          >
            Read full statement <ArrowRight size={16} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
