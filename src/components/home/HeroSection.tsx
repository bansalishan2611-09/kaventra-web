"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-black">
      {/* Refined Architectural Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]"></div>
        {/* Very subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="font-sans text-[11px] tracking-[0.25em] text-white/50 uppercase border border-white/10 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            KAVENTRA ECOSYSTEM
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.05] tracking-tight mb-8 max-w-5xl text-white"
        >
          Building the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
            architecture of tomorrow.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white/60 max-w-2xl text-lg md:text-xl mb-12 font-light leading-relaxed"
        >
          KAVENTRA is a technology ecosystem building interconnected digital intelligence, creative infrastructure, and practical technology for the next era.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Link
            href="/ecosystem"
            className="px-8 py-4 bg-white text-black font-sans text-sm font-medium hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.1)]"
          >
            Explore the ecosystem
          </Link>
          
          <Link
            href="/about"
            className="group px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-sans text-sm font-medium hover:bg-white/10 transition-colors duration-300 flex items-center justify-center gap-2 rounded-full"
          >
            Discover Kaventra <ArrowRight size={16} className="text-white/50 group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />
          </Link>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-16 bg-white/10 relative overflow-hidden">
          <div className="absolute top-0 w-full h-1/3 bg-white/50 animate-[scrolldown_2s_ease-in-out_infinite]"></div>
        </div>
      </motion.div>
    </section>
  );
}
