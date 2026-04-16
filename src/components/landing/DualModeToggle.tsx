import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Building2, Car, Home, Package, Plane, ShoppingBag, Smartphone } from "lucide-react";

export default function DualModeToggle() {
  const [mode, setMode] = useState<"wholesale" | "lifestyle">("wholesale");

  const wholesaleItems = [
    { icon: Package, title: "Bulk Electronics", color: "bg-blue-100 text-blue-600" },
    { icon: Car, title: "Commercial Vehicles", color: "bg-orange-100 text-orange-600" },
    { icon: Building2, title: "Industrial Goods", color: "bg-indigo-100 text-indigo-600" },
    { icon: ShoppingBag, title: "Wholesale Fashion", color: "bg-pink-100 text-pink-600" },
  ];

  const lifestyleItems = [
    { icon: Briefcase, title: "Jobs & Careers", color: "bg-emerald-100 text-emerald-600" },
    { icon: Plane, title: "Travel & Tours", color: "bg-sky-100 text-sky-600" },
    { icon: Home, title: "Home Rentals", color: "bg-amber-100 text-amber-600" },
    { icon: Smartphone, title: "Personal Items", color: "bg-purple-100 text-purple-600" },
  ];

  const items = mode === "wholesale" ? wholesaleItems : lifestyleItems;

  return (
    <section id="modes" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Two Worlds. <br className="md:hidden" /> One App.
          </h2>
          <p className="text-xl text-gray-600">
            Switch effortlessly between professional sourcing and everyday living. Zaay Tan adapts to your needs with a single tap.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-32">
          
          {/* Toggle Switch UI */}
          <div className="relative">
            <div className="bg-gray-100 p-2 rounded-[2rem] flex items-center shadow-inner relative w-[300px] h-20">
              <motion.div
                className="absolute inset-y-2 w-[142px] bg-white rounded-[1.5rem] shadow-md border border-gray-200 z-0"
                animate={{ 
                  x: mode === "wholesale" ? 0 : 142 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
              
              <button
                onClick={() => setMode("wholesale")}
                className={`relative z-10 flex-1 flex flex-col items-center justify-center h-full rounded-[1.5rem] font-bold text-sm transition-colors ${
                  mode === "wholesale" ? "text-primary" : "text-gray-500"
                }`}
              >
                Wholesale
                <span className={`text-[10px] font-normal ${mode === "wholesale" ? "text-primary/70" : "text-gray-400"}`}>B2B Market</span>
              </button>
              
              <button
                onClick={() => setMode("lifestyle")}
                className={`relative z-10 flex-1 flex flex-col items-center justify-center h-full rounded-[1.5rem] font-bold text-sm transition-colors ${
                  mode === "lifestyle" ? "text-primary" : "text-gray-500"
                }`}
              >
                Lifestyle
                <span className={`text-[10px] font-normal ${mode === "lifestyle" ? "text-primary/70" : "text-gray-400"}`}>Everyday Needs</span>
              </button>
            </div>
            
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
          </div>

          {/* Interactive Phone Mockup */}
          <div className="relative w-[320px] h-[650px] bg-white rounded-[48px] border-[12px] border-gray-900 shadow-2xl overflow-hidden flex flex-col">
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl w-40 mx-auto z-20" />
            
            <motion.div 
              animate={{ 
                backgroundColor: mode === "wholesale" ? "#FF9500" : "#10B981" 
              }}
              className="pt-14 pb-6 px-6 text-white transition-colors duration-500"
            >
              <h3 className="font-bold text-2xl mb-1">
                {mode === "wholesale" ? "Wholesale" : "Lifestyle"}
              </h3>
              <p className="text-sm opacity-80">
                {mode === "wholesale" ? "Sourcing made easy" : "Live your best life"}
              </p>
            </motion.div>

            <div className="flex-1 bg-gray-50 p-4 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, x: mode === "wholesale" ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: mode === "wholesale" ? 20 : -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-3">
                    {items.map((item, i) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3"
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}>
                          <item.icon className="w-6 h-6" />
                        </div>
                        <span className="font-semibold text-sm text-gray-800 leading-tight">{item.title}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mt-4">
                    <div className="w-full h-32 rounded-xl bg-gray-100 mb-3 flex items-center justify-center">
                      <span className="text-gray-400 font-medium">Featured Deal</span>
                    </div>
                    <div className="w-3/4 h-3 rounded-full bg-gray-200 mb-2" />
                    <div className="w-1/2 h-3 rounded-full bg-gray-200" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="h-1 bg-gray-900 w-32 mx-auto rounded-full mb-2" />
          </div>
          
        </div>
      </div>
    </section>
  );
}
