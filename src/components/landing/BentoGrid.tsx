import { motion } from "framer-motion";
import { CloudRain, Languages, Search, Star, Zap, MapPin } from "lucide-react";

export default function BentoGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Everything you need. <br className="sm:hidden" />
            <span className="text-primary">Nothing you don't.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[240px]">
          
          {/* Weather & Location - Span 2 cols */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-1 rounded-3xl bg-blue-50 p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-110 transition-transform duration-500">
              <CloudRain className="w-32 h-32 text-blue-500" />
            </div>
            <div className="relative z-10 flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Location Context</h3>
              <p className="text-gray-600">Real-time weather and location sync to optimize delivery routes and meetups.</p>
            </div>
          </motion.div>

          {/* Language Support */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl bg-orange-50 p-8 flex flex-col justify-between"
          >
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Languages className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Bilingual</h3>
              <p className="text-gray-600 text-sm">Full Burmese & English language support.</p>
            </div>
          </motion.div>

          {/* Speed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 rounded-3xl bg-purple-50 p-8 flex flex-col justify-between text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" />
            <div className="relative z-10 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-yellow-400" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">Lightning Fast</h3>
              <p className="text-gray-300 text-sm">Optimized for low-bandwidth connections.</p>
            </div>
          </motion.div>

          {/* Search & Filters */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 rounded-3xl bg-emerald-50 p-8 flex items-center justify-between overflow-hidden"
          >
            <div className="max-w-[60%]">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <Search className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Advanced Filters</h3>
              <p className="text-gray-600">Find exactly what you need with powerful categorized search.</p>
            </div>
            <div className="hidden md:flex flex-col gap-2 opacity-50 rotate-[-10deg] scale-125 translate-x-4">
              <div className="w-32 h-8 rounded-full bg-emerald-200" />
              <div className="w-24 h-8 rounded-full bg-emerald-200" />
              <div className="w-28 h-8 rounded-full bg-emerald-200" />
            </div>
          </motion.div>

          {/* Reputation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-2 md:row-span-1 rounded-3xl bg-pink-50 p-8 flex flex-col justify-between"
          >
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="w-8 h-8 text-pink-500 fill-pink-500" />
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Reputation System</h3>
              <p className="text-gray-600">Buy from top-rated sellers with verified transaction history and reviews.</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
