import Image from 'next/image';
import { Star } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Sarah L.',
    role: 'Bible Study Group Leader',
    text: "This platform has been a revelation for our study group. The insights and historical context are deeper than anything we've used before. Truly a blessing!",
  },
  {
    id: 'testimonial-2',
    name: 'Michael B.',
    role: 'Seminary Student',
    text: "As a student, the AI summarizer is a game-changer. It helps me quickly grasp the essence of long passages, saving me hours of study time.",
  },
  {
    id: 'testimonial-3',
    name: 'Pastor John D.',
    role: 'Church Pastor',
    text: "I recommend this to my entire congregation. It's accessible for new believers yet profound enough for seasoned scholars. A fantastic resource for the modern church.",
  },
];

export function TestimonialsSection() {
  const images = PlaceHolderImages;

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">
              Loved by Believers Everywhere
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how our study hub is helping people deepen their relationship with God and His Word.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-stretch gap-8 py-12 lg:grid-cols-3 lg:gap-12">
          {testimonials.map((testimonial) => {
            const image = images.find(img => img.id === testimonial.id);
            return (
            <Card key={testimonial.id} className="border-l-4 border-primary bg-card shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-card-foreground/90 italic">"{testimonial.text}"</blockquote>
              </CardContent>
              <CardHeader className="pt-0">
                <div className="flex items-center gap-4">
                  <Avatar>
                    {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-card-foreground/70">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          )})}
        </div>
      </div>
    </section>
  );
}
