"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function VenturesSection() {
  const ventures = [
    {
      name: "KAVENTRA Tools",
      category: "TOOLS",
      desc: "Useful online utilities designed to streamline daily workflows and digital tasks.",
      status: "IN RESEARCH"
    },
    {
      name: "KAVENTRA Study",
      category: "STUDY",
      desc: "Dedicated student and NCERT-focused educational tools for the modern learner.",
      status: "IN RESEARCH"
    },
    {
      name: "KAVENTRA Creator",
      category: "CREATOR",
      desc: "Practical utilities and creative infrastructure for digital creators.",
      status: "IN RESEARCH"
    },
    {
      name: "KAVENTRA AI",
      category: "AI",
      desc: "Practical, accessible artificial intelligence tools built for real-world application.",
      status: "IN RESEARCH"
    },
    {
      name: "KAVENTRA Dev",
      category: "DEV",
      desc: "High-performance developer utilities and architectural tools.",
      status: "IN RESEARCH"
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-black text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="font-sans tracking-[0.2em] text-xs font-medium uppercase text-white/50 mb-6 block">
              Ventures
            </span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium leading-[1.1] tracking-tight"
            >
              Ideas becoming <br/> products.
            </motion.h2>
          </div>
          <Link
            href="/ventures"
            className="group flex items-center gap-2 font-sans text-sm font-medium text-white/70 hover:text-white transition-colors"
          >
            View all ventures <ArrowRight size={16} className="text-white/40 group-hover:translate-x-1 group-hover:text-white transition-all duration-300" />
          </Link>
        </div>

        {ventures.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventures.map((venture, i) => (
              <motion.div
                key={venture.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 flex flex-col justify-between min-h-[280px] cursor-pointer"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-white/50 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                      {venture.category}
                    </span>
                    <span className="font-sans text-[10px] uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                      {venture.status}
                    </span>
                  </div>
                  <h3 className="font-heading font-medium text-2xl text-white/90 group-hover:text-white transition-colors mb-3">
                    {venture.name}
                  </h3>
                  <p className="font-sans text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                    {venture.desc}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <span className="font-sans text-xs text-white/60 font-medium tracking-wide">Monitor Progress</span>
                  <ArrowRight size={16} className="text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="w-full border border-white/10 bg-white/5 p-20 flex flex-col items-center justify-center text-center rounded-2xl">
            <span className="font-sans tracking-[0.2em] text-xs uppercase text-white/50 mb-4">
              VENTURE DATABASE
            </span>
            <p className="text-xl text-white/80 font-heading">
              Ventures will be announced soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
