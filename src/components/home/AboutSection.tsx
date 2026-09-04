"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-black text-white relative border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        
        {/* Label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-8 h-[1px] bg-accent"></div>
          <span className="font-sans tracking-[0.2em] text-xs font-medium uppercase text-white/50">
            About Kaventra
          </span>
        </div>

        {/* Content */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium leading-[1.1] tracking-tight"
        >
          Technology, <br />
          designed as an ecosystem.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-2xl text-white/60 font-light leading-relaxed mt-4"
        >
          KAVENTRA is being built as a connected technology ecosystem rather than a single product. 
          <br /><br />
          We explore and develop digital products across AI, development, creator technology, tools, education, and emerging areas of technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="pt-6"
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 font-sans text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Learn about Kaventra 
            <span className="text-white/40 group-hover:translate-x-1 group-hover:text-white transition-all duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
