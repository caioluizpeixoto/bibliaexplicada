import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ContentPreviewSection() {
  const previewImage = PlaceHolderImages.find((img) => img.id === 'content-preview');

  return (
    <section id="preview" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">
              An Immersive Study Experience
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our intuitive interface is designed to keep you focused on what matters most: the Word of God.
            </p>
          </div>
        </div>
        <div className="mt-12 mx-auto max-w-5xl">
          {previewImage && (
             <div className="rounded-lg border-4 border-primary/50 overflow-hidden shadow-2xl shadow-primary/20">
               <Image
                 src={previewImage.imageUrl}
                 alt={previewImage.description}
                 width={1200}
                 height={800}
                 className="w-full"
                 data-ai-hint={previewImage.imageHint}
               />
             </div>
          )}
        </div>
      </div>
    </section>
  );
}
