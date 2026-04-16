import { motion } from "framer-motion";
import { QrCode, Download } from "lucide-react";
import { Button } from "../ui/button";

export default function DownloadCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-primary rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          {/* Abstract background shapes */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            
            <div className="text-center lg:text-left max-w-2xl text-white">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
              >
                Ready to transform <br className="hidden lg:block" /> how you trade?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-white/90 mb-10"
              >
                Join over 50,000 businesses and individuals in Myanmar. Download Zaay Tan today.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                {/* APKPure Link */}
                <a href="https://apkpure.com/your-app-link" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-full h-14 px-8 font-semibold text-lg flex items-center justify-center gap-3">
                    <Download className="w-5 h-5" />
                    APKPure
                  </Button>
                </a>

                {/* Uptodown Link */}
                <a href="https://en.uptodown.com/android/your-app-link" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-white hover:bg-gray-50 text-gray-900 rounded-full h-14 px-8 font-semibold text-lg flex items-center justify-center gap-3">
                    <Download className="w-5 h-5" />
                    Uptodown
                  </Button>
                </a>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-6"
            >
              {/* QR Code APKPure */}
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-3xl border border-white/30 text-center text-white">
                <div className="bg-white p-2 rounded-2xl mb-3 shadow-sm">
                  <QrCode className="w-32 h-32 text-gray-900" strokeWidth={1} />
                </div>
                <p className="font-semibold text-sm">Scan for APKPure</p>
              </div>
              
              {/* QR Code Uptodown */}
              <div className="bg-white/20 backdrop-blur-md p-4 rounded-3xl border border-white/30 text-center text-white hidden sm:block">
                <div className="bg-white p-2 rounded-2xl mb-3 shadow-sm">
                  <QrCode className="w-32 h-32 text-gray-900" strokeWidth={1} />
                </div>
                <p className="font-semibold text-sm">Scan for Uptodown</p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}