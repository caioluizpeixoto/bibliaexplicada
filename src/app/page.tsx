
'use client';

import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ShieldCheck, Zap, BookLock, Check, Star } from 'lucide-react';
import { FacebookTestimonialsSection } from '@/components/landing/facebook-testimonials-section';
import { AnimateOnScroll } from '@/components/landing/animate-on-scroll';
import { useState } from 'react';
import { OrderBumpDialog } from '@/components/landing/order-bump-dialog';

const identificationItems = [
    { text: 'Deseja entender capítulos e versículos com profundidade, sem se sentir perdido.' },
    { text: 'Almeja ensinar na sua igreja ou pequeno grupo com clareza e confiança.' },
    { text: 'Procura um método de estudo visual que facilite a memorização e o aprendizado.' },
    { text: 'Quer mergulhar na vida de Cristo e nos ensinamentos bíblicos de forma prática.' },
    { text: 'Busca confiança para ler, interpretar e até mesmo pregar a Palavra de Deus.' },
];

const features = [
    { icon: ShieldCheck, title: 'Compra Segura', description: 'Ambiente seguro para sua compra.' },
    { icon: Zap, title: 'Acesso Imediato', description: 'Receba o material assim que o pagamento for confirmado.' },
    { icon: BookLock, title: 'Conteúdo Vitalício', description: 'Pague uma vez e acesse para sempre.' },
];

const faqs = [
  {
    question: 'Como vou receber o material?',
    answer: 'O acesso é 100% digital. Assim que seu pagamento for confirmado, você receberá um e-mail com todas as instruções para acessar a plataforma e baixar seus materiais de estudo.',
  },
  {
    question: 'O pagamento é seguro?',
    answer: 'Sim, totalmente seguro. Usamos uma das maiores plataformas de pagamento do Brasil, com criptografia de ponta para garantir a segurança dos seus dados.',
  },
  {
    question: 'Posso acessar em qualquer dispositivo?',
    answer: 'Com certeza! Você pode estudar no seu celular, tablet ou computador, a qualquer hora e em qualquer lugar. Todo o material é otimizado para uma experiência perfeita em todas as telas.',
  },
  {
    question: 'E se eu tiver dúvidas durante o estudo?',
    answer: 'Temos um canal de suporte exclusivo para alunos. Qualquer dúvida que surgir sobre o material ou sobre a plataforma, nossa equipe estará pronta para te ajudar.',
  },
];


const premiumBonuses = [
  '7 Selos do Apocalipse',
  '31 Provérbios Explicados',
  '100 Versículos Antigo Testamento',
  '100 Versículos Novo Testamento',
  '150 Salmos Explicados',
  '200 Versículos Mais Reveladores',
  '1000 Esboços de Pregação',
  'Bíblia de Estudo Digital',
  'Devocional de 40 Dias',
  'Evangelho de Mateus Explicado',
];

export default function SalesPage() {
  const [isOrderBumpOpen, setOrderBumpOpen] = useState(false);
  const mockupImage = PlaceHolderImages.find(p => p.id === 'product-mockup');
  const previewImage = PlaceHolderImages.find(p => p.id === 'content-preview-2');

  const handleScrollToOffer = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const targetElement = document.getElementById('oferta-final');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <OrderBumpDialog
        isOpen={isOrderBumpOpen}
        onOpenChange={setOrderBumpOpen}
        premiumBonuses={premiumBonuses}
        essentialCheckoutUrl="https://www.ggcheckout.com/checkout/v2/MJBjBouqDlm54NJ0cveH"
        premiumCheckoutUrl="https://www.ggcheckout.com/checkout/v2/MJBjBouqDlm54NJ0cveH"
      />
      {/* Urgency Banner */}
      <div className="bg-primary text-primary-foreground text-center p-2 text-sm font-bold overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-4">Acesso promocional por tempo limitado</span>
          <span className="mx-4">Acesso promocional por tempo limitado</span>
          <span className="mx-4">Acesso promocional por tempo limitado</span>
          <span className="mx-4">Acesso promocional por tempo limitado</span>
          <span className="mx-4">Acesso promocional por tempo limitado</span>
          <span className="mx-4">Acesso promocional por tempo limitado</span>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="text-center py-16 px-4 flex flex-col items-center">
          <AnimateOnScroll>
            <h1 className="font-sans text-4xl md:text-6xl font-bold max-w-3xl mx-auto leading-tight">
              Gênesis a Apocalipse,{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
                Entenda a Bíblia de
              </span>{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 text-transparent bg-clip-text">
                Versículo por Versículo
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
                O guia definitivo para você destravar seu aprendizado bíblico de forma simples e visual.
            </p>
            <div className="mt-8 w-full max-w-md mx-auto">
                <img
                    src="https://i.postimg.cc/RC24f2Xk/Gemini-Generated-Image-pjoqsvpjoqsvpjoq.png"
                    alt="Mockup do produto"
                    width="600"
                    height="600"
                    className="rounded-lg shadow-2xl shadow-primary/10"
                />
            </div>
            <div className="mt-8 text-center">
                <p className="text-foreground/80">De <span className="line-through">R$57,00</span> por apenas:</p>
                <p className="text-5xl font-bold my-2 text-cta">R$9,99</p>
            </div>
            <Button onClick={handleScrollToOffer} size="lg" className="mt-6 w-full max-w-md font-bold text-lg h-auto py-4 px-6 bg-cta hover:bg-cta/90 text-cta-foreground rounded-xl shadow-lg shadow-cta/20 animate-pulse-slow">
                DESTRAVAR MEU APRENDIZADO
            </Button>
            <p className="text-xs text-foreground/60 mt-4">
                Compra segura • Acesso imediato • Suporte exclusivo
            </p>
          </AnimateOnScroll>
        </section>

        {/* Pain & Identification Section */}
        <AnimateOnScroll>
          <section className="bg-card py-20 px-4 text-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold max-w-2xl mx-auto">Você já teve dificuldade para entender a Bíblia?</h2>
              <div className="mt-6 text-lg text-foreground/80 max-w-3xl mx-auto space-y-4">
                  <p>Muitos cristãos se sentem assim. Você começa a ler, mas logo se sente perdido em meio a nomes, lugares e contextos difíceis de conectar. A vontade de aprender existe, mas a falta de um guia claro pode ser frustrante.</p>
                  <p>Sem um método, o estudo se torna cansativo e a absorção do conhecimento é baixa. Essa dificuldade pode abalar sua confiança e te impedir de viver a profundidade que a Palavra de Deus oferece.</p>
                  <p className="font-semibold text-foreground">Nosso material foi desenhado para te guiar, transformando o estudo bíblico em uma jornada clara, envolvente e reveladora.</p>
              </div>
          </section>
        </AnimateOnScroll>

        {/* "Ideal for you" Section */}
        <AnimateOnScroll>
          <section className="py-20 px-4">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center max-w-2xl mx-auto">Este material é ideal para você se:</h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {identificationItems.map((item, index) => (
                      <div key={index} className="bg-card rounded-2xl p-6 border-l-4 border-primary flex items-center shadow-lg">
                          <img src="https://i.postimg.cc/cJtcKgHh/biblia-(1).png" alt="biblia" className="h-6 w-6 mr-4 flex-shrink-0" />
                          <p className="text-foreground/90">{item.text}</p>
                      </div>
                  ))}
              </div>
          </section>
        </AnimateOnScroll>

        {/* "What you get" Section */}
        <AnimateOnScroll>
          <section id="conteudo" className="bg-card py-20 px-4">
               <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                  <div className="text-left">
                      <h2 className="font-headline text-3xl md:text-4xl font-bold">O que você recebe ao garantir seu acesso?</h2>
                      <ul className="mt-6 space-y-4 text-lg text-foreground/80">
                          <li className="flex items-start"><Check className="h-6 w-6 text-cta mr-3 mt-1 flex-shrink-0" /><span>Estudos visuais e comentados de todos os 66 livros da Bíblia.</span></li>
                          <li className="flex items-start"><Check className="h-6 w-6 text-cta mr-3 mt-1 flex-shrink-0" /><span>Explicações versículo por versículo para total clareza.</span></li>
                          <li className="flex items-start"><Check className="h-6 w-6 text-cta mr-3 mt-1 flex-shrink-0" /><span>Mapas mentais, resumos e devocionais para aprofundar seu conhecimento.</span></li>
                          <li className="flex items-start"><Check className="h-6 w-6 text-cta mr-3 mt-1 flex-shrink-0" /><span>Acesso vitalício e atualizações futuras sem custo adicional.</span></li>
                      </ul>
                  </div>
                  <div>
                    {previewImage && (
                        <img
                            src={previewImage.imageUrl}
                            alt={previewImage.description}
                            width={600}
                            height={450}
                            className="rounded-2xl shadow-2xl shadow-primary/10 border-2 border-primary/30"
                            data-ai-hint={previewImage.imageHint}
                        />
                    )}
                  </div>
              </div>
          </section>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <FacebookTestimonialsSection />
        </AnimateOnScroll>
        
        {/* Trust Section */}
        <AnimateOnScroll>
          <section className="py-20 px-4 bg-card">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-center">Sua jornada de fé com total confiança</h2>
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
                  {features.map((feature) => (
                      <div key={feature.title} className="flex flex-col items-center">
                          <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 border border-primary/20">
                              <feature.icon className="h-8 w-8 text-primary" />
                          </div>
                          <h3 className="mt-4 text-xl font-bold">{feature.title}</h3>
                          <p className="mt-1 text-foreground/70">{feature.description}</p>
                      </div>
                  ))}
              </div>
          </section>
        </AnimateOnScroll>

        {/* Final CTA Section */}
        <AnimateOnScroll>
          <section id="oferta-final" className="bg-background py-20 px-4 text-center">
            <p className="font-semibold text-primary">OFERTA ESPECIAL POR TEMPO LIMITADO</p>
            <h2 className="font-headline text-3xl md:text-5xl font-bold mt-4 max-w-3xl mx-auto">Destrave o seu entendimento da Bíblia hoje mesmo</h2>
            
            <div className="mt-12 mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Plano Básico */}
              <div className="w-full bg-card p-8 rounded-2xl border border-primary/20 flex flex-col h-full">
                <h3 className="font-headline text-2xl font-bold text-primary">Plano Essencial</h3>
                <p className="text-foreground/80 mt-2">O guia completo para seu estudo.</p>
                <div className="mt-8 text-center bg-background/50 rounded-lg p-6 flex-grow flex flex-col justify-center">
                  <p className="text-foreground/80">De <span className="line-through">R$57,00</span> por apenas:</p>
                  <p className="text-6xl font-bold my-2 text-cta">R$9,99</p>
                </div>
                <ul className="mt-6 space-y-4 text-lg text-foreground/80 text-left">
                  <li className="flex items-start"><Check className="h-6 w-6 text-cta mr-3 mt-1 flex-shrink-0" /><span>Estudos visuais dos 66 livros</span></li>
                  <li className="flex items-start"><Check className="h-6 w-6 text-cta mr-3 mt-1 flex-shrink-0" /><span>Explicações versículo por versículo</span></li>
                  <li className="flex items-start"><Check className="h-6 w-6 text-cta mr-3 mt-1 flex-shrink-0" /><span>Mapas mentais e resumos</span></li>
                  <li className="flex items-start"><Check className="h-6 w-6 text-cta mr-3 mt-1 flex-shrink-0" /><span>Acesso vitalício e atualizações</span></li>
                </ul>
                <Button onClick={() => setOrderBumpOpen(true)} size="lg" className="mt-8 w-full font-bold text-xl h-auto py-4 px-6 bg-cta/80 hover:bg-cta/70 text-cta-foreground rounded-xl shadow-lg shadow-cta/20">
                    QUERO O PLANO ESSENCIAL
                </Button>
                 <p className="text-xs text-foreground/60 mt-4">
                  Garantia de 7 dias • Acesso vitalício e imediato
              </p>
              </div>

              {/* Plano Premium */}
              <div className="w-full bg-card p-8 rounded-2xl border-2 border-cta shadow-2xl shadow-cta/20 flex flex-col h-full relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cta text-cta-foreground px-4 py-1 rounded-full text-sm font-bold">
                    MAIS POPULAR
                </div>
                <h3 className="font-headline text-2xl font-bold text-cta">Plano Premium + Bônus</h3>
                <p className="text-foreground/80 mt-2">Tudo do essencial e muito mais para acelerar seu aprendizado.</p>
                <div className="mt-8 text-center bg-background/50 rounded-lg p-6 flex-grow flex flex-col justify-center">
                  <p className="text-foreground/80">De <span className="line-through">R$197,00</span> por apenas:</p>
                  <p className="text-6xl font-bold my-2 text-cta">R$17,90</p>
                </div>
                <div className="mt-6 text-left">
                  <p className="font-bold text-lg text-foreground">Tudo do Plano Essencial, mais <span className="text-cta">10 Bônus Exclusivos:</span></p>
                  <ul className="mt-4 space-y-2 text-md text-foreground/80 columns-1 sm:columns-2">
                    {premiumBonuses.map((bonus) => (
                      <li key={bonus} className="flex items-start"><Star className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /><span>{bonus}</span></li>
                    ))}
                  </ul>
                </div>
                <Button asChild size="lg" className="mt-8 w-full font-bold text-xl h-auto py-4 px-6 bg-cta hover:bg-cta/90 text-cta-foreground rounded-xl shadow-lg shadow-cta/20 animate-pulse-slow">
                    <Link href="https://www.ggcheckout.com/checkout/v2/MJBjBouqDlm54NJ0cveH">QUERO O PACOTE COMPLETO</Link>
                </Button>
                 <p className="text-xs text-foreground/60 mt-4">
                  Garantia de 7 dias • Acesso vitalício e imediato
              </p>
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* Guarantee Section */}
        <AnimateOnScroll>
          <section id="garantia" className="py-20 px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 text-center md:text-left">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary text-center">Garantia Incondicional de 7 Dias</h2>
                <p className="mt-4 text-lg text-foreground/80">
                  Sua satisfação é nossa prioridade. Por isso, oferecemos uma garantia de 7 dias. Se, por qualquer motivo, você não ficar 100% satisfeito com o material, basta nos enviar um e-mail e devolveremos todo o seu investimento, sem perguntas.
                </p>
                <p className="mt-4 text-lg text-foreground/80 font-semibold">
                  O risco é todo nosso. Você não tem nada a perder!
                </p>
              </div>
              <div className="order-1 md:order-2 flex justify-center">
                <img
                  src="https://i.postimg.cc/wxwspxxL/Selo-garantia-7dias-curso-1024x1024.png"
                  alt="Selo de Garantia de 7 dias"
                  width="350"
                  height="350"
                  className="max-w-xs"
                />
              </div>
            </div>
          </section>
        </AnimateOnScroll>

        {/* FAQ Section */}
        <AnimateOnScroll>
          <section id="faq" className="py-20 px-4 bg-card">
            <div className="max-w-3xl mx-auto">
                <h3 className="font-headline text-2xl md:text-3xl font-bold text-center mb-8">Perguntas Frequentes</h3>
                <Accordion type="single" collapsible className="w-full">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-xl mb-3 border-none shadow-sm">
                      <AccordionTrigger className="text-left font-bold text-lg p-6 hover:no-underline text-foreground">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-foreground/80 px-6">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
          </section>
        </AnimateOnScroll>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-white/10 text-center py-8 px-4">
        <p className="text-sm text-foreground/70">Bíblia Comentada &copy; {new Date().getFullYear()}. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-4 mt-4 text-sm">
          <Link href="#" className="hover:text-primary">Termos de Uso</Link>
          <Link href="#" className="hover:text-primary">Política de Privacidade</Link>
          <Link href="#" className="hover:text-primary">Contato</Link>
        </div>
      </footer>
    </div>
  );
}
