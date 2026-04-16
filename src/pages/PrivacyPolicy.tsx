import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="mb-12 border-b border-gray-100 pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-500">Effective Date: April 16, 2026</p>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
            <p>
              Welcome to Zaay Tan (Zaay10), operated by Origins Technology ("we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. This policy explains how we collect, use, and share your data when you use our dual-mode marketplace application.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="mb-4">We collect personal information that you voluntarily provide to us when you register on Zaay10. This includes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Account Data:</strong> Name, phone number, email address, and profile picture.</li>
                <li><strong>Identity Verification (KYC):</strong> National Registration Card (NRC) details, business licenses, or tax IDs required for the "Origins Verified" badge and high-value B2B transactions.</li>
                <li><strong>Financial Data:</strong> Payment wallet identifiers (e.g., KBZPay, WaveMoney) required to process our Escrow/Safe Pay services.</li>
                <li><strong>Device & Usage Data:</strong> IP addresses, browser types, and network conditions to optimize our app for low-bandwidth environments.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To facilitate secure C2C and B2B transactions between buyers and sellers.</li>
                <li>To operate our Escrow payment system and prevent fraud or scams.</li>
                <li>To resolve disputes between users regarding mispresented items or non-delivery.</li>
                <li>To comply with the Myanmar Ministry of Commerce e-commerce regulations for 2026.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
              <p>
                We only share information with third parties when necessary to complete your transaction or comply with the law. This includes sharing necessary delivery details with logistics partners (e.g., Royal Express, Ninja Van) and transaction data with payment gateways (e.g., KBZPay). We <strong>never</strong> sell your personal data to third-party advertisers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Your Data Rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of your personal data. If you wish to delete your account and associated NRC data, please contact our privacy team at privacy@zaay10.com. Note that we may be required by law to retain certain transaction records for up to 5 years.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}