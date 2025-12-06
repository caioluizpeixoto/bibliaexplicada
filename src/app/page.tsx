import { Header } from '@/components/landing/header';
import { HeroSection } from '@/components/landing/hero-section';
import { FeaturesSection } from '@/components/landing/features-section';
import { ContentPreviewSection } from '@/components/landing/content-preview-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { AiSummarizerSection } from '@/components/landing/ai-summarizer-section';
import { PricingSection } from '@/components/landing/pricing-section';
import { FaqSection } from '@/components/landing/faq-section';
import { Footer } from '@/components/landing/footer';
import { OrnamentalDivider } from '@/components/ornamental-divider';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <OrnamentalDivider />
        <ContentPreviewSection />
        <TestimonialsSection />
        <OrnamentalDivider />
        <AiSummarizerSection />
        <PricingSection />
        <OrnamentalDivider />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
