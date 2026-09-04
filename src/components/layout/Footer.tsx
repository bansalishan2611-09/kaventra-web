import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    Company: [
      { name: "About", href: "/about" },
      { name: "Our Story", href: "/story" },
      { name: "Mission & Vision", href: "/mission" },
      { name: "Director", href: "/director" },
      { name: "Values", href: "/values" },
    ],
    Ecosystem: [
      { name: "AI", href: "/ecosystem/ai" },
      { name: "Development", href: "/ecosystem/dev" },
      { name: "Creator", href: "/ecosystem/creator" },
      { name: "Tools", href: "/ecosystem/tools" },
      { name: "Study", href: "/ecosystem/study" },
      { name: "Future", href: "/ecosystem/future" },
    ],
    Resources: [
      { name: "Ventures", href: "/ventures" },
      { name: "Documentation", href: "/documentation" },
      { name: "Updates", href: "/updates" },
      { name: "Careers", href: "/careers" },
    ],
    Connect: [
      { name: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6 md:px-12 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-6 md:w-1/4">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 overflow-hidden bg-white rounded-md p-1">
              <Image
                src="/favicon.png"
                alt="KAVENTRA"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-heading font-medium text-xl tracking-wide text-white">
              KAVENTRA
            </span>
          </Link>
          <p className="font-sans text-sm text-white/50 leading-relaxed max-w-[200px]">
            The architecture of tomorrow.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:w-3/4">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-4">
              <h4 className="font-sans text-xs font-semibold tracking-wider text-white mb-2">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© 2026 KAVENTRA. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
