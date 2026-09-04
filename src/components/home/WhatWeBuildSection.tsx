"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Code2, PenTool, Wrench, GraduationCap, Sparkles } from "lucide-react";

export default function WhatWeBuildSection() {
  const areas = [
    {
      id: "AI",
      title: "Intelligence",
      icon: <BrainCircuit strokeWidth={1.5} size={24} />,
      desc: "Intelligent systems and AI-powered experiences."
    },
    {
      id: "DEV",
      title: "Infrastructure",
      icon: <Code2 strokeWidth={1.5} size={24} />,
      desc: "Software, developer tools and digital infrastructure."
    },
    {
      id: "CREATOR",
      title: "Creator Tech",
      icon: <PenTool strokeWidth={1.5} size={24} />,
      desc: "Technology designed to empower modern creators."
    },
    {
      id: "TOOLS",
      title: "Utilities",
      icon: <Wrench strokeWidth={1.5} size={24} />,
      desc: "Practical digital utilities designed around real problems."
    },
    {
      id: "STUDY",
      title: "Education",
      icon: <GraduationCap strokeWidth={1.5} size={24} />,
      desc: "Technology for learning, education and student productivity."
    },
    {
      id: "FUTURE",
      title: "Experimental",
      icon: <Sparkles strokeWidth={1.5} size={24} />,
      desc: "Experimental ideas exploring what technology could become next."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-black text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <span className="font-sans tracking-[0.2em] text-xs font-medium uppercase text-white/50 mb-6 block">
            What we build
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium max-w-3xl leading-[1.1] tracking-tight"
          >
            From ideas to interconnected systems.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 relative overflow-hidden flex flex-col h-full"
            >
              {/* Subtle accent glow on hover */}
              <div className="absolute -inset-px bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none -z-10"></div>
              
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70 group-hover:text-white mb-8 transition-colors duration-300">
                {area.icon}
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <span className="font-sans text-[10px] tracking-widest uppercase text-accent font-semibold">
                  {area.id}
                </span>
                <h3 className="font-heading text-xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
                  {area.title}
                </h3>
              </div>
              
              <p className="text-white/50 font-light leading-relaxed">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
