import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Zap, MapPin } from "lucide-react";
import { useState } from "react";

// Mathematically calculated coordinates based on Myanmar's Latitude/Longitude bounding box
// (Assuming the PNG is closely cropped to the country's borders)
const CITIES = [
  { id: "myitkyina", name: "Myitkyina", top: "17%", left: "58%" },
  { id: "mandalay", name: "Mandalay", top: "35%", left: "44%" },
  { id: "taunggyi", name: "Taunggyi", top: "41%", left: "54%" },
  { id: "naypyidaw", name: "Naypyidaw", top: "47%", left: "44%" },
  { id: "bago", name: "Bago", top: "60%", left: "49%" },
  { id: "yangon", name: "Yangon", top: "63%", left: "46%" },
  { id: "pathein", name: "Pathein", top: "65%", left: "35%" },
  { id: "mawlamyine", name: "Mawlamyine", top: "65%", left: "61%" },
];

export default function CoverageMap() {
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);

  // Motion Values for 3D tilt effect on mouse movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // Transform coordinates into subtle 3D rotation
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["15deg", "-15deg"]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="coverage" className="py-24 bg-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#003366]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#FBBF24]/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-center md:text-left max-w-xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-[#003366] font-semibold text-sm mb-6 shadow-sm border border-blue-100"
            >
              <Zap className="w-4 h-4 text-[#FBBF24]" />
              Verified commerce across Myanmar
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6"
            >
              Our Growing <span className="text-[#003366]">Network</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl"
            >
              From Yangon to Myitkyina, Zaay10 connects buyers and sellers with an expanding logistics spine. Every pulsing point visualizes an active, secure node where trust happens safely.
            </motion.p>
            
            {/* Stats bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-6 justify-center md:justify-start"
            >
              <div className="bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-gray-900">{CITIES.length}+</div>
                <div className="text-sm font-medium text-gray-500">Hubs Active</div>
              </div>
              <div className="bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100 shadow-sm">
                <div className="text-3xl font-bold text-[#003366] flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  Live
                </div>
                <div className="text-sm font-medium text-gray-500">Network Status</div>
              </div>
            </motion.div>
          </div>

          {/* Interactive 3D Map Container */}
          <div className="flex items-center justify-center relative min-h-[600px]">
            <div
              style={{ perspective: "1500px" }}
              className="w-full max-w-lg aspect-[3/4] flex items-center justify-center p-4 relative"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                style={{ rotateX, rotateY, z: "100px" }}
                className="relative w-full h-full flex items-center justify-center rounded-3xl"
              >
                
                {/* 1. CSS MASK: Turns your black myanmar.png into a Solid Gold/Yellow map */}
                <div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#FCD34D] to-[#F59E0B] drop-shadow-xl"
                  style={{
                    maskImage: `url('/myanmar.png')`,
                    WebkitMaskImage: `url('/myanmar.png')`,
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskPosition: "center",
                    WebkitMaskPosition: "center",
                  }}
                />

                {/* 2. Overlaid Interactive City Nodes */}
                {/* To ensure dots align with the masked image, we create a container that perfectly bounds the background mask */}
                <div className="absolute inset-0 w-full h-full bg-transparent" style={{ backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                  {CITIES.map((city) => (
                    <div
                      key={city.id}
                      className="absolute z-20 group"
                      style={{ 
                        top: city.top, 
                        left: city.left,
                        transform: "translate(-50%, -50%) translateZ(40px)"
                      }}
                      onMouseEnter={() => setHoveredCity(city.id)}
                      onMouseLeave={() => setHoveredCity(null)}
                    >
                      {/* Invisible larger hover area */}
                      <div className="absolute inset-[-15px] cursor-pointer rounded-full" />
                      
                      {/* Multi-layered pulse and dot */}
                      <div className="relative flex items-center justify-center pointer-events-none">
                        <motion.div
                          className="absolute w-8 h-8 rounded-full bg-[#003366]/40"
                          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 2.0, 1] }}
                          transition={{ duration: 2 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                        />
                        <div className="w-2.5 h-2.5 rounded-full bg-[#003366] border-2 border-white shadow-lg" />
                      </div>

                      {/* Dynamic Tooltip on Hover */}
                      {hoveredCity === city.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none whitespace-nowrap"
                        >
                          <div className="bg-[#003366] px-4 py-1.5 rounded-xl text-white text-xs font-bold shadow-xl flex items-center gap-2">
                            <MapPin className="w-3.5 h-3.5 text-[#FBBF24]" />
                            {city.name}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}