import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/30"></div>

      <div className="relative z-10 container px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
          Deepen Your Faith
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200">
          Unlock the timeless wisdom of the Scriptures with our comprehensive study tools, designed for believers at every stage of their journey.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg">
            <Link href="#pricing">Quero meu acesso!</Link>
          </Button>
          <Button asChild variant="link" size="lg" className="text-primary hover:text-primary/90">
            <Link href="#features">Learn more <span aria-hidden="true">→</span></Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
