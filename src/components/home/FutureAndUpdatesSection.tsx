"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FutureAndUpdatesSection() {
  return (
    <>
      {/* FUTURE SECTION */}
      <section className="py-40 px-6 md:px-12 bg-black text-white relative overflow-hidden flex flex-col items-center text-center">
        {/* Subtle geometry instead of heavy borders */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false, margin: "-200px" }}
              transition={{ duration: 2, delay: i * 0.2, ease: "easeOut" }}
              className={`absolute border border-white/[0.03] rounded-full`}
              style={{
                width: `${i * 300}px`,
                height: `${i * 300}px`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <span className="font-sans tracking-[0.2em] text-xs font-medium uppercase text-white/50 mb-8 border border-white/10 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm">
            Looking Ahead
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-medium font-heading tracking-tight mb-10 text-white"
          >
            This is only <br/> the beginning.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/50 font-light leading-relaxed max-w-2xl"
          >
            KAVENTRA is designed to grow. <br/><br/>
            New technologies, new products, new ventures and new possibilities will become part of the ecosystem as the architecture evolves.
          </motion.p>
        </div>
      </section>

      {/* UPDATES SECTION */}
      <section className="py-32 px-6 md:px-12 bg-black text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <span className="font-sans tracking-[0.2em] text-xs font-medium uppercase text-white/50 mb-4 block">
                Latest from Kaventra
              </span>
              <h2 className="text-4xl md:text-5xl font-medium font-heading tracking-tight">
                Updates
              </h2>
            </div>
            <Link
              href="/updates"
              className="group flex items-center gap-2 font-sans text-sm font-medium text-white/60 hover:text-white transition-colors"
            >
              All Updates <ArrowRight size={16} className="text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </Link>
          </div>

          {/* Placeholder for no updates currently */}
          <div className="w-full border border-white/10 bg-white/5 p-20 flex flex-col items-center justify-center text-center rounded-2xl">
            <span className="font-sans tracking-[0.2em] text-xs uppercase text-white/50 mb-4">
              COMMUNICATION MATRIX
            </span>
            <p className="text-xl text-white/80 font-heading">
              Updates coming soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
