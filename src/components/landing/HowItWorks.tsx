import { motion } from "framer-motion";
import { UserCheck, Search, Handshake } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: UserCheck,
      title: "Create & Verify",
      description: "Sign up and verify your identity with your NRC for secure access."
    },
    {
      icon: Search,
      title: "Explore & Connect",
      description: "Switch between Wholesale and Lifestyle modes to find what you need."
    },
    {
      icon: Handshake,
      title: "Negotiate & Trade",
      description: "Chat securely, agree on terms, and pay safely via our escrow system."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">How Zaay Tan Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to start trading smarter and living better.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-24 right-24 h-0.5 bg-gray-200" />

          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 bg-white rounded-full shadow-lg border-4 border-gray-50 flex items-center justify-center mb-8 relative z-10 group hover:border-primary/20 transition-colors">
                <step.icon className="w-10 h-10 text-primary" />
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 rounded-full text-white font-bold flex items-center justify-center border-2 border-white text-sm">
                  {i + 1}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
