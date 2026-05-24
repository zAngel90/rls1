import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <div>
      <Hero />
      
      <div className="flex flex-col gap-0">
        {/* PopularGames ahora está dentro del Hero */}
        
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </div>
    </div>
  );
}
