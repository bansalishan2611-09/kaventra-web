import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="bg-black text-white min-h-screen pt-40 pb-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <span className="font-sans tracking-[0.2em] text-xs font-medium uppercase text-white/50 mb-6 inline-block border border-white/10 bg-white/5 rounded-full px-4 py-1.5 backdrop-blur-sm">
          Our Mission
        </span>
        <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8">
          What drives us.
        </h1>
        <div className="w-12 h-[1px] bg-accent mb-12"></div>
        <p className="text-xl text-white/60 font-light leading-relaxed mb-16">
          To engineer interconnected digital intelligence and creative infrastructure for the next era.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 font-sans text-sm font-medium text-white/50 hover:text-white transition-colors">
          <ArrowRight size={16} className="rotate-180" /> Return to Architecture
        </Link>
      </div>
    </div>
  );
}
