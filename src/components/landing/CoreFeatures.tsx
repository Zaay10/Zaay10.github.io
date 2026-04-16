import { motion } from "framer-motion";
import { ShieldCheck, MessageSquare, Lock } from "lucide-react";

export default function CoreFeatures() {
  return (
    <section id="features" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Built on Trust. <br /> Engineered for Myanmar.
          </h2>
          <p className="text-xl text-gray-600">
            A marketplace where you can trade with confidence. We verify identities, secure payments, and facilitate smooth negotiations.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Identity Feature */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[32px] p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full"
          >
            <div className="h-48 rounded-2xl bg-blue-50 mb-8 relative flex items-center justify-center overflow-hidden border border-blue-100">
              <ShieldCheck className="w-16 h-16 text-blue-500 absolute opacity-20" />
              
              {/* ID Card Animation */}
              <motion.div 
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-48 h-32 bg-white rounded-xl shadow-lg border border-gray-200 p-4 relative z-10 flex flex-col gap-3"
              >
                <div className="flex gap-3">
                  <div className="w-12 h-16 bg-gray-200 rounded-md" />
                  <div className="flex-1 space-y-2">
                    <div className="w-full h-2 bg-gray-200 rounded" />
                    <div className="w-2/3 h-2 bg-gray-200 rounded" />
                    <div className="w-4/5 h-2 bg-gray-200 rounded" />
                  </div>
                </div>
                
                {/* Scanner line */}
                <motion.div 
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.5)] z-20"
                />
              </motion.div>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Identity You Can Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                Every seller undergoes strict NRC identity verification. We ensure you're dealing with real people and legitimate businesses.
              </p>
            </div>
          </motion.div>

          {/* Negotiation Engine */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-[32px] p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full"
          >
            <div className="h-48 rounded-2xl bg-orange-50 mb-8 relative flex flex-col items-center justify-center p-6 border border-orange-100 overflow-hidden">
              <MessageSquare className="w-16 h-16 text-orange-500 absolute opacity-10" />
              
              {/* Chat bubbles */}
              <div className="w-full space-y-3 z-10">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm border border-gray-100 w-4/5"
                >
                  Can you do 50,000 MMK for 10 boxes?
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-primary text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm self-end ml-auto w-4/5"
                >
                  Deal. I'll send the offer now.
                </motion.div>
              </div>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Make the Deal, Your Way</h3>
              <p className="text-gray-600 leading-relaxed">
                Our built-in negotiation engine lets you chat, bid, and agree on terms securely within the app. No more switching to external messengers.
              </p>
            </div>
          </motion.div>

          {/* Secure Escrow */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-[32px] p-8 shadow-md border border-gray-100 hover:shadow-xl transition-shadow flex flex-col h-full"
          >
            <div className="h-48 rounded-2xl bg-green-50 mb-8 relative flex items-center justify-center overflow-hidden border border-green-100">
              {/* Payment logos abstract */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-4 border-green-500"
              >
                <Lock className="w-10 h-10 text-green-500" />
              </motion.div>
              
              <div className="absolute flex gap-8 opacity-40">
                <div className="font-bold text-lg text-blue-800">KBZPay</div>
                <div className="font-bold text-lg text-yellow-600">WaveMoney</div>
              </div>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Payments, Protected</h3>
              <p className="text-gray-600 leading-relaxed">
                Funds are held in secure escrow until the item is delivered and inspected. Integrated seamlessly with KPay and WaveMoney.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
