'use client';

import Image from 'next/image';
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    id: 'testimonial-fb-1',
    name: 'Sarah Lima',
    time: '2h',
    text: "Uau, que material incrível! Sempre tive dificuldade com os livros dos profetas, mas os guias visuais e os comentários versículo por versículo mudaram tudo. Finalmente sinto que estou entendendo a profundidade da Palavra. Recomendo demais!",
    likes: 127,
  },
  {
    id: 'testimonial-fb-2',
    name: 'Marcos Borges',
    time: '5h',
    text: "Estou usando os resumos para preparar minhas aulas na escola dominical e o feedback dos alunos tem sido fantástico. O conteúdo é rico, confiável e muito didático. Valeu cada centavo!",
    likes: 89,
  },
  {
    id: 'testimonial-fb-3',
    name: 'Juliana Costa',
    time: '1d',
    text: "Comprei sem muita expectativa, mas fui surpreendida. A abordagem visual com mapas mentais me ajudou a conectar as histórias e a reter muito mais informação. Um trabalho primoroso, que Deus abençoe vocês!",
    likes: 241,
  },
    {
    id: 'testimonial-fb-4',
    name: 'Rafael Mendes',
    time: '2d',
    text: "O melhor investimento que fiz no meu crescimento espiritual este ano. Acesso vitalício é um bônus incrível. A qualidade do conteúdo é impressionante, direto ao ponto e sem enrolação.",
    likes: 178,
  },
];

export function FacebookTestimonialsSection() {
  const images = PlaceHolderImages;

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">
            O que nossos alunos estão dizendo
          </h2>
          <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Veja o que a nossa comunidade está comentando sobre o material.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => {
              const image = images.find((img) => img.id === testimonial.id);
              return (
                <CarouselItem key={testimonial.id} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-card text-card-foreground shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
                      {/* Post Header */}
                      <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            {image && <AvatarImage src={image.imageUrl} alt={testimonial.name} data-ai-hint={image.imageHint} />}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-sm">{testimonial.name}</p>
                            <p className="text-xs text-muted-foreground">{testimonial.time}</p>
                          </div>
                        </div>
                        <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
                      </div>

                      {/* Post Content */}
                      <div className="px-4 pb-4 flex-grow">
                        <p className="text-sm text-foreground/90">{testimonial.text}</p>
                      </div>

                      {/* Post Footer */}
                      <div className="mt-auto">
                        <div className="px-4 py-2 border-t border-border/20">
                          <div className="flex justify-between items-center text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <div className="bg-blue-500 rounded-full p-1">
                                <ThumbsUp className="h-3 w-3 text-white" />
                              </div>
                              <span>{testimonial.likes}</span>
                            </div>
                            <div>
                              <span></span>
                            </div>
                          </div>
                        </div>

                        <div className="flex border-t border-border/20 text-muted-foreground font-medium text-sm">
                          <button className="flex-1 p-2 flex items-center justify-center gap-2 hover:bg-accent transition-colors">
                            <ThumbsUp className="h-4 w-4" /> Curtir
                          </button>
                          <button className="flex-1 p-2 flex items-center justify-center gap-2 hover:bg-accent transition-colors">
                            <MessageCircle className="h-4 w-4" /> Comentar
                          </button>
                          <button className="flex-1 p-2 flex items-center justify-center gap-2 hover:bg-accent transition-colors">
                            <Share2 className="h-4 w-4" /> Compartilhar
                          </button>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
