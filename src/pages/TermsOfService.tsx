import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-3xl">
          
          <div className="mb-12 border-b border-gray-100 pb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-500">Last updated: April 16, 2026</p>
          </div>

          <div className="space-y-8 text-gray-600 leading-relaxed text-lg">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By downloading, accessing, or using the Zaay10 application, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Account Registration and Verification</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-gray-800">Eligibility:</strong> You must be at least 18 years old to create an account.</li>
                <li><strong className="text-gray-800">Accuracy:</strong> You agree to provide accurate, current, and complete information during the registration process.</li>
                <li><strong className="text-gray-800">Verification:</strong> To access premium features, live bidding, and "Verified" status, users must submit valid government-issued identification (NRC) or corporate registration documents. We reserve the right to suspend accounts that provide false identification.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. The Marketplace & User Conduct</h2>
              <p className="mb-4">Zaay10 acts as a digital venue connecting buyers and sellers for B2B (Wholesale) and C2C (Lifestyle) transactions.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-gray-800">Prohibited Items:</strong> You may not list illegal goods, stolen items, unauthorized hazardous materials, or any goods prohibited by the laws of Myanmar.</li>
                <li><strong className="text-gray-800">User Responsibility:</strong> Sellers are solely responsible for the accuracy of their listings, the quality of the goods, and ensuring they have the legal right to sell the items.</li>
                <li><strong className="text-gray-800">Communication:</strong> All negotiations must occur within the Zaay10 chat system. Moving transactions off-platform to avoid fees violates these terms and voids all Seller and Buyer Protection guarantees.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Live Bidding and Auctions</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-gray-800">Binding Bids:</strong> Any bid placed during a Live Auction or Timed Batch listing is considered a legally binding contract. If you win an auction, you are obligated to complete the purchase.</li>
                <li><strong className="text-gray-800">Ghost Bidding:</strong> Sellers are strictly prohibited from bidding on their own items (or using secondary accounts) to artificially inflate prices. Violators will be permanently banned.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payments and Escrow (Safe Pay)</h2>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong className="text-gray-800">Escrow System:</strong> For supported transactions, Zaay10 holds the buyer's funds securely until the item is delivered and confirmed as described.</li>
                <li><strong className="text-gray-800">Fees:</strong> Zaay10 charges a platform fee (commission) on successful transactions. This fee is clearly displayed before a transaction is finalized.</li>
                <li><strong className="text-gray-800">Fund Release:</strong> Buyers must confirm receipt of goods within the specified timeframe. If a buyer fails to inspect and confirm or dispute the item within the inspection window, funds will be automatically released to the seller.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Dispute Resolution</h2>
              <p>
                In the event of a dispute regarding an escrow transaction, Zaay10 will act as an impartial mediator. Users must provide evidence (e.g., photos, chat logs, delivery receipts) within the Zaay10 app. Our decision on the release or refund of escrowed funds is final.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p>
                Zaay10 and Origins Technology provide the platform "as is." We are not responsible for the actual condition of goods sold, the physical delivery process (unless explicitly managed by our integrated logistics partners), or any losses arising from user interactions outside the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users of the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the Republic of the Union of Myanmar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to Terms</h2>
              <p>
                We reserve the right to modify these terms at any time. We will notify users of significant changes via the application. Continued use of the platform constitutes acceptance of the new terms.
              </p>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}