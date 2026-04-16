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
          
          {/* Transparent, perfectly round logo matching the footer */}
          <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-transparent">
            <img 
              src="src/logo.png" 
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
          {/* Updated Download Link */}
          <a href="https://release-assets.githubusercontent.com/github-production-release-asset/1212175191/bd366a10-ebd4-4cee-97eb-8ab4bb2b15a6?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-04-16T07%3A22%3A01Z&rscd=attachment%3B+filename%3Dzaayten.apk&rsct=application%2Fvnd.android.package-archive&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-04-16T06%3A21%3A34Z&ske=2026-04-16T07%3A22%3A01Z&sks=b&skv=2018-11-09&sig=2rqlX9cowGD1T2pHdzA%2FdBARwJ3MYwUQ7mJPJ0iX8ps%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc3NjMyMjg0OCwibmJmIjoxNzc2MzIxMDQ4LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.MHr_Zx35aFcbGZSDlEFiUQum4-oEFQLlLgEYDxp6PfM&response-content-disposition=attachment%3B%20filename%3Dzaayten.apk&response-content-type=application%2Fvnd.android.package-archive" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              Download App
            </Button>
          </a>
        </div>
      </div>
    </motion.header>
  );
}