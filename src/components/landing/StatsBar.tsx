import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function Counter({ end, suffix = "", duration = 2 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // easeOutExpo
      const easeProgress = 1 === progress ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end); // ensure exact end value
      }
    };
    
    window.requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsBar() {
  const stats = [
    { label: "Downloads", value: 1000, suffix: "+" },
    { label: "Verified Sellers", value: 98, suffix: "%" },
    { label: "User Rating", value: 4.8, suffix: "★" },
    { label: "Regions Covered", value: 10, suffix: "+" }

  ];

  return (
    <section className="bg-gray-900 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary via-gray-900 to-gray-900" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-gray-800">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col items-center text-center ${i % 2 !== 0 ? 'border-none md:border-solid' : 'border-none'} ${i === 0 ? 'border-none' : ''}`}
            >
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {stat.value % 1 !== 0 ? (
                  <span className="tabular-nums">{stat.value}{stat.suffix}</span>
                ) : (
                  <Counter end={stat.value} suffix={stat.suffix} />
                )}
              </div>
              <div className="text-gray-400 font-medium tracking-wide text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
