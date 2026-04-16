import { motion, useScroll, useTransform } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const rotate = useTransform(scrollY, [0, 1000], [-5, 10]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Myanmar's First Dual-Mode Marketplace
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Trade Smarter. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                Live Better.
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              The first dual-mode marketplace for Wholesale and Lifestyle in Myanmar. Secure, verified, and built for the future by Origins Technology.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              
              {/* UPDATED DOWNLOAD BUTTON LINK */}
              <a 
               href="https://github.com/Zaay10/Zaay10-Trusted-Myanmar-Market/releases/tag/1.2.0"
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full sm:w-auto"
              >
                <Button size="lg" className="w-full h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25">
                  Download the App
                </Button>
              </a>

              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full border-gray-200 hover:bg-gray-50">
                <Play className="w-5 h-5 mr-2 fill-current" />
                Watch How it Works
              </Button>
            </div>
          </motion.div>

          <div className="relative h-[600px] flex items-center justify-center lg:justify-end">
            <motion.div 
              style={{ y: y1, rotate }}
              className="relative w-[320px] h-[650px] z-10"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-white rounded-[48px] border-[12px] border-gray-900 shadow-2xl overflow-hidden flex flex-col"
              >
                {/* iPhone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-40 mx-auto z-20" />
                
                {/* App Header */}
                <div className="bg-primary pt-12 pb-6 px-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="flex justify-between items-center relative z-10">
                    <div>
                      <p className="text-xs font-medium text-white/80">Good morning</p>
                      <h3 className="font-bold text-xl">Aung Kyaw</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center border border-white/30">
                      <span className="font-bold text-sm">AK</span>
                    </div>
                  </div>
                  
                  {/* Search bar mockup */}
                  <div className="mt-6 h-12 rounded-full bg-white/20 backdrop-blur border border-white/30 flex items-center px-4">
                    <div className="w-4 h-4 rounded-full border-2 border-white/60" />
                    <div className="ml-3 w-32 h-2 rounded-full bg-white/40" />
                  </div>
                </div>

                {/* App Content */}
                <div className="flex-1 bg-gray-50 p-4 space-y-4">
                  {/* Banner */}
                  <div className="h-32 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-4 flex flex-col justify-end text-white shadow-sm">
                    <div className="w-20 h-3 rounded-full bg-white/80 mb-2" />
                    <div className="w-32 h-2 rounded-full bg-white/50" />
                  </div>
                  
                  {/* Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
                        <div className="w-full aspect-square rounded-xl bg-gray-100 mb-3" />
                        <div className="w-3/4 h-2 rounded-full bg-gray-300 mb-2" />
                        <div className="w-1/2 h-2 rounded-full bg-primary/60" />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* App Navbar */}
                <div className="h-20 bg-white border-t border-gray-100 flex items-center justify-around px-6 pb-4">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className={`w-10 h-10 flex flex-col items-center justify-center gap-1 ${i === 1 ? 'text-primary' : 'text-gray-400'}`}>
                      <div className={`w-6 h-6 rounded-md ${i === 1 ? 'bg-primary' : 'bg-gray-300'}`} />
                      <div className={`w-8 h-1 rounded-full ${i === 1 ? 'bg-primary' : 'bg-transparent'}`} />
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Floating decorative elements */}
            <motion.div 
              animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/4 -left-12 bg-white p-4 rounded-2xl shadow-xl z-20 border border-gray-100 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                ✓
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">Verified Seller</p>
                <p className="text-xs text-gray-500">NRC Authenticated</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-1/4 -right-8 bg-white p-4 rounded-2xl shadow-xl z-20 border border-gray-100 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-primary font-bold">
                K
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900">Secure Escrow</p>
                <p className="text-xs text-gray-500">Payment Protected</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}