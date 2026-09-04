"use client";

import { motion } from "framer-motion";

export default function ValuesSection() {
  const values = [
    {
      num: "01",
      title: "Architectural Precision",
      desc: "Build with absolute structure and purpose."
    },
    {
      num: "02",
      title: "Forward Momentum",
      desc: "Never stop moving toward what comes next."
    },
    {
      num: "03",
      title: "Scalability",
      desc: "Build ideas capable of becoming systems."
    },
    {
      num: "04",
      title: "Uncompromising Clarity",
      desc: "Make complexity understandable and technology purposeful."
    }
  ];

  return (
    <section className="py-32 px-6 md:px-12 bg-black text-white relative border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        
        <div className="lg:w-1/3">
          <span className="font-sans tracking-[0.2em] text-xs font-medium uppercase text-white/50 mb-6 block">
            Our Values
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium font-heading tracking-tight leading-[1.1] sticky top-32 text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40"
          >
            The <br/> Foundation.
          </motion.h2>
        </div>

        <div className="lg:w-2/3 flex flex-col gap-6">
          {values.map((val, i) => (
            <motion.div
              key={val.num}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 relative overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <span className="font-sans text-5xl font-light text-white/20 group-hover:text-white/40 transition-colors duration-500">
                {val.num}
              </span>
              <div>
                <h3 className="font-heading text-2xl font-medium tracking-tight mb-2 text-white/90 group-hover:text-white transition-colors">
                  {val.title}
                </h3>
                <p className="text-white/50 font-light leading-relaxed">
                  {val.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
