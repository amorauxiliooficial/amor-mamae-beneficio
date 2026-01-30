import { Hero } from './components/landing/Hero';
import { ValuesBanner } from './components/landing/ValuesBanner';
import { SocialProof } from './components/landing/SocialProof';
import { Eligibility } from './components/landing/Eligibility';
import { Testimonials } from './components/landing/Testimonials';
import { Steps } from './components/landing/Steps';
import { FAQ } from './components/landing/FAQ';
import { Footer } from './components/landing/Footer';
import { FloatingWhatsapp } from './components/landing/FloatingWhatsapp';

function App() {
  return (
    <div className="min-h-screen bg-muted overflow-x-hidden">
      <Hero />
      <ValuesBanner />
      <Testimonials />
      <Steps />
      <SocialProof />
      <Eligibility />
      <FAQ />
      <Footer />
      <FloatingWhatsapp />
    </div>
  );
}

export default App;
