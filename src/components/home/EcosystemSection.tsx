"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function EcosystemSection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
    { id: "ai", name: "AI", desc: "Machine Intelligence" },
    { id: "dev", name: "DEV", desc: "Infrastructure" },
    { id: "creator", name: "CREATOR", desc: "Digital Arts" },
    { id: "tools", name: "TOOLS", desc: "Utilities" },
    { id: "study", name: "STUDY", desc: "Education" },
    { id: "future", name: "FUTURE", desc: "Experimental" },
  ];

  return (
    <section className="bg-black text-white relative border-t border-white/5 py-32 overflow-hidden">
      
      {/* Subtle Background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="lg:w-5/12 flex flex-col items-start text-left z-20">
          <span className="font-sans tracking-[0.2em] text-xs font-medium uppercase text-white/50 mb-6 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full backdrop-blur-sm">
            Ecosystem Flow
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium leading-[1.1] tracking-tight mb-8"
          >
            One architecture.<br/>
            Multiple possibilities.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg font-light"
          >
            Technology should not exist as disconnected products. We build ideas capable of becoming systems, where every new venture strengthens the entire architecture.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/ecosystem"
              className="group px-8 py-4 bg-white text-black font-sans text-sm font-medium hover:bg-gray-200 transition-colors duration-300 inline-flex items-center gap-2 rounded-full"
            >
              Explore the flowchart <ArrowRight size={16} className="text-black/50 group-hover:text-black group-hover:translate-x-1 transition-all" />
            </Link>
          </motion.div>
        </div>

        {/* RIGHT: INTERACTIVE FLOWCHART */}
        <div className="lg:w-7/12 w-full relative flex items-center justify-between h-[700px]">
          
          {/* Dynamic SVG Connection Curves */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
            {nodes.map((node, i) => {
              // Calculate Y position for the target node on the right
              // 6 nodes evenly spaced across 700px
              const totalNodes = nodes.length;
              const spacing = 700 / totalNodes;
              const targetY = (i * spacing) + (spacing / 2);
              
              // KAVENTRA core is vertically centered at 350
              const isHovered = hoveredNode === node.id;
              const isDimmed = hoveredNode !== null && hoveredNode !== node.id;

              return (
                <g key={`flow-${node.id}`}>
                  {/* Base Faint Line */}
                  <path 
                    d={`M 140 350 C 250 350, 300 ${targetY}, 450 ${targetY}`}
                    fill="none"
                    stroke="rgba(255,255,255,0.05)"
                    strokeWidth="2"
                    className={`transition-opacity duration-300 ${isDimmed ? 'opacity-20' : 'opacity-100'}`}
                  />
                  
                  {/* Highlight Line (Only shows on hover) */}
                  <motion.path 
                    d={`M 140 350 C 250 350, 300 ${targetY}, 450 ${targetY}`}
                    fill="none"
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ 
                      pathLength: isHovered ? 1 : 0, 
                      opacity: isHovered ? 1 : 0 
                    }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />

                  {/* Continuous Pulse Line (Shows when idle or hovered, hides when dimmed) */}
                  {!isDimmed && (
                    <motion.path 
                      d={`M 140 350 C 250 350, 300 ${targetY}, 450 ${targetY}`}
                      fill="none"
                      stroke="rgba(255,255,255,0.3)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: [0, 1, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Root Node: KAVENTRA */}
          <div className="relative z-10 w-[140px]">
            <div className={`
              h-[120px] rounded-2xl border border-white/20 bg-black/80 backdrop-blur-md 
              flex flex-col items-center justify-center p-4 shadow-[0_0_30px_rgba(255,255,255,0.05)]
              transition-all duration-500
              ${hoveredNode !== null ? 'border-white/40 shadow-[0_0_40px_rgba(255,255,255,0.1)]' : ''}
            `}>
              <div className={`absolute inset-0 bg-white/[0.02] rounded-2xl transition-opacity duration-500 ${hoveredNode !== null ? 'opacity-100' : 'opacity-0'}`}></div>
              <span className="font-heading font-bold tracking-widest text-sm text-white">KAVENTRA</span>
              <span className="font-sans text-[9px] uppercase tracking-widest text-white/40 mt-2">Core System</span>
              
              {/* Connection Dots (Output) */}
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-black border border-white/40 rounded-full flex items-center justify-center">
                <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${hoveredNode !== null ? 'bg-white' : 'bg-white/20'}`}></div>
              </div>
            </div>
          </div>

          {/* Target Nodes */}
          <div className="relative z-10 flex flex-col justify-between h-full w-[250px] py-4">
            {nodes.map((node, i) => {
              const isHovered = hoveredNode === node.id;
              const isDimmed = hoveredNode !== null && hoveredNode !== node.id;

              return (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  className={`
                    group relative p-4 rounded-xl border border-white/10 bg-black/60 backdrop-blur-sm cursor-pointer
                    transition-all duration-300
                    ${isHovered ? 'scale-105 border-white/40 bg-white/5 shadow-[0_0_30px_rgba(255,255,255,0.05)]' : ''}
                    ${isDimmed ? 'opacity-30 scale-95' : 'opacity-100'}
                  `}
                >
                  {/* Connection Dot (Input) */}
                  <div className={`
                    absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-black border rounded-full flex items-center justify-center transition-colors duration-300
                    ${isHovered ? 'border-white' : 'border-white/20'}
                  `}>
                    <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${isHovered ? 'bg-white' : 'bg-white/10'}`}></div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className={`font-heading font-medium tracking-wide transition-colors duration-300 ${isHovered ? 'text-white' : 'text-white/80'}`}>
                        {node.name}
                      </h4>
                      <p className={`font-sans text-[10px] uppercase tracking-wider mt-1 transition-colors duration-300 ${isHovered ? 'text-white/60' : 'text-white/40'}`}>
                        {node.desc}
                      </p>
                    </div>
                    
                    <ArrowRight size={14} className={`transition-all duration-300 ${isHovered ? 'text-white translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
