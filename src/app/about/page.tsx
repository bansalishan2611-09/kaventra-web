"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
  const sections = [
    { title: "Who is KAVENTRA?", content: "KAVENTRA is a technology ecosystem and parent company focused on building interconnected digital intelligence, creative infrastructure, software, tools, educational technology, and future-oriented digital products." },
    { title: "Why KAVENTRA exists", content: "We believe that technology should not exist as disconnected fragments. We exist to build cohesive architectures where every product strengthens a unified ecosystem." },
    { title: "Our philosophy", content: "We don't build technology for the sake of technology. We build it to make what comes next possible. Precision, purpose, and long-term scalability guide everything we do." },
    { title: "What we build", content: "From intelligent AI systems to developer tools, creator software, educational platforms, and experimental future technology. We build for the people building tomorrow." },
    { title: "How we think", content: "Architecturally. We view every line of code and every design decision as a brick in a much larger structure. We value forward momentum and uncompromising clarity." },
    { title: "Our ecosystem", content: "A network of ideas, products, and ventures. Designed to be scalable, connected, and endlessly adaptable." },
    { title: "Our future", content: "This is only the beginning. KAVENTRA is designed to grow, adapt, and expand into areas of technology we haven't even imagined yet." },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="font-sans tracking-[0.2em] text-xs font-medium uppercase text-white/50 mb-6 inline-block border border-white/10 bg-white/5 rounded-full px-4 py-1.5 backdrop-blur-sm">
            About Kaventra
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-12">
            Technology, <br/> designed as an <br/> ecosystem.
          </h1>
        </motion.div>

        <div className="mt-20 flex flex-col gap-12">
          {sections.map((sec, i) => (
            <motion.div
              key={sec.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-t border-white/5 pt-8 flex flex-col md:flex-row gap-8 group hover:border-white/20 transition-colors duration-500"
            >
              <h2 className="md:w-1/3 font-heading text-xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
                {sec.title}
              </h2>
              <p className="md:w-2/3 text-lg text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors">
                {sec.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 border border-white/10 rounded-3xl p-12 text-center flex flex-col items-center bg-white/[0.02] hover:bg-white/[0.04] transition-colors relative overflow-hidden"
        >
          {/* Subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none"></div>
          
          <h3 className="text-3xl font-heading font-medium tracking-tight mb-8 relative z-10">Ready to explore?</h3>
          <Link
            href="/ecosystem"
            className="relative z-10 px-8 py-4 bg-white text-black font-sans text-sm font-medium rounded-full hover:scale-105 transition-transform flex items-center gap-2"
          >
            Explore the Ecosystem <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
