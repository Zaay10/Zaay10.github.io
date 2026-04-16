import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              {/* Updated Logo Wrapper to match Navbar */}
              <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden bg-transparent">
  <img 
    src="/logo.png" 
    alt="Zaay10 Logo" 
    className="w-full h-full object-contain"
  />
</div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Zaay<span className="text-primary">10</span>
              </span>
            </div>
            <p className="text-sm mb-6 max-w-xs mx-auto md:mx-0">
              Myanmar's premier dual-mode marketplace for Wholesale trading and Lifestyle needs.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-center md:text-left">Company</h4>
            <ul className="space-y-3 text-center md:text-left text-sm">
              <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/careers" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="/press" className="hover:text-primary transition-colors">Press & Media</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-center md:text-left">Support</h4>
            <ul className="space-y-3 text-center md:text-left text-sm">
              <li><a href="/help" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="/safety" className="hover:text-primary transition-colors">Safety Center</a></li>
              <li><a href="/guidelines" className="hover:text-primary transition-colors">Community Guidelines</a></li>
              <li><a href="/seller-protection" className="hover:text-primary transition-colors">Seller Protection</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-center md:text-left">Legal</h4>
            <ul className="space-y-3 text-center md:text-left text-sm">
              <li><a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="/cookie-policy" className="hover:text-primary transition-colors">Cookie Policy</a></li>
              <li><a href="/intellectual-property" className="hover:text-primary transition-colors">Intellectual Property</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© {currentYear} Zaay Tan. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <span className="text-white font-bold tracking-wide">Origins Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
}