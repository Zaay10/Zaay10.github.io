import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "../ui/button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm border-b" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          {/* Logo - assuming you moved logo.png to the public folder */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-transparent">
            <img 
              src="/logo.png" 
              alt="Zaay10 Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          <span className="font-extrabold text-2xl tracking-tight text-gray-900">
            Zaay<span className="text-primary">10 : Trusted Myanmar Market</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#modes" className="hover:text-primary transition-colors">Dual Mode</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">How it Works</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex font-semibold">
            Log In
          </Button>
          
          {/* PERMANENT DOWNLOAD LINK: replace 'Zaay10' and 'repo-name' with your actual GitHub info */}
          <a 
            href="https://github.com/Zaay10/Zaay10.github.io/releases/latest/download/zaayten.apk" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              Download App
            </Button>
          </a>
        </div>
      </div>
    </motion.header>
  );
}