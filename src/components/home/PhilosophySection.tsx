"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PhilosophySection() {
  return (
    <>
      <section className="py-40 px-6 md:px-12 bg-black text-white relative flex flex-col items-center text-center border-t border-white/5">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.98, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium max-w-5xl leading-[1.2] tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 mb-24"
        >
          "We don't build technology for the sake of technology. We build it to make what comes next possible."
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-6 w-full">
          {[
            { title: "Purpose", desc: "Every product begins with a fundamental reason to exist." },
            { title: "Connection", desc: "Individual products become exponentially more powerful within a larger ecosystem." },
            { title: "Evolution", desc: "Technology must continuously improve, adapt, and move forward." }
          ].map((item, i) => (
            <motion.div 
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05] group hover:bg-white/[0.04] transition-colors"
            >
              <h3 className="font-heading text-2xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors mb-4 text-left">
                {item.title}
              </h3>
              <p className="text-white/50 font-light leading-relaxed text-left">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission & Vision split section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-black text-white border-t border-white/5">
        
        {/* Mission */}
        <div className="p-16 md:p-24 lg:p-32 flex flex-col items-start lg:border-r border-white/5 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          
          <span className="font-sans tracking-[0.2em] text-xs font-medium uppercase text-white/50 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            Our Mission
          </span>
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-heading font-medium leading-[1.1] tracking-tight mb-12 max-w-lg text-white/90"
          >
            To engineer interconnected digital intelligence and creative infrastructure for the next era.
          </motion.h3>
          <Link
            href="/mission"
            className="mt-auto group-hover:text-white text-white/50 font-sans text-sm font-medium flex items-center gap-2 transition-colors"
          >
            Discover our mission <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Vision */}
        <div className="p-16 md:p-24 lg:p-32 flex flex-col items-start relative overflow-hidden group">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          <span className="font-sans tracking-[0.2em] text-xs font-medium uppercase text-white/50 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
            Our Vision
          </span>
          <motion.h3 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-heading font-medium leading-[1.1] tracking-tight mb-8 max-w-lg text-white/90"
          >
            A unified ecosystem for the people building tomorrow.
          </motion.h3>
          <p className="text-white/50 font-light text-lg leading-relaxed mb-12 max-w-md">
            A future where developers, creators, students, builders and thinkers can access seamless technology designed to help them create, learn and move forward.
          </p>
          <Link
            href="/vision"
            className="mt-auto group-hover:text-white text-white/50 font-sans text-sm font-medium flex items-center gap-2 transition-colors"
          >
            Explore our vision <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </section>
    </>
  );
}
