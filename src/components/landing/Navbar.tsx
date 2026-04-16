import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "../ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Typographic Logo based on icon.png design */}
        <a href="/" className="flex items-center group">
          <div className="flex items-center scale-95 origin-left transition-transform">
            <span className="bg-black text-white px-2.5 py-0.5 rounded-md font-black uppercase tracking-tighter text-xl">
              Zaay
            </span>
            <span className="text-primary font-black text-3xl ml-1 tracking-tighter italic">
              10
            </span>
          </div>
          
          
          
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm uppercase tracking-wider text-gray-600">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#modes" className="hover:text-primary transition-colors">Dual Mode</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden sm:inline-flex font-bold text-gray-700 hover:text-primary">
            Log In
          </Button>
          
          <a 
            href="https://github.com/Zaay10/Zaay10.github.io/releases/latest/download/zaayten.apk" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 rounded-full shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 active:translate-y-0">
              Download App
            </Button>
          </a>
        </div>
      </div>
    </motion.header>
  );
}