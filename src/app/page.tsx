import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Pricing from '@/components/Pricing';
import Gallery from '@/components/Gallery';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      <HeroSection />
      <Features />
      <Gallery />
      <Pricing />
      <FAQ />
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border mt-12">
        <div className="container mx-auto px-4">
          <p>© 2026 AI Art Studio. All rights reserved.</p>
          <p className="mt-2">Create stunning AI-generated art in seconds.</p>
        </div>
      </footer>
    </main>
  );
}
