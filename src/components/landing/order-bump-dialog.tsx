
'use client';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import Link from 'next/link';

interface OrderBumpDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  premiumBonuses: string[];
  essentialCheckoutUrl: string;
  premiumCheckoutUrl: string;
}

export function OrderBumpDialog({
  isOpen,
  onOpenChange,
  premiumBonuses,
  essentialCheckoutUrl,
  premiumCheckoutUrl,
}: OrderBumpDialogProps) {
  return (
    <AlertDialog open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent className="bg-card border-cta max-w-2xl text-center">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-3xl font-headline font-bold text-center text-cta">
            ESPERE! Oferta Imperdível!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-foreground/80 pt-2">
            Por apenas <span className="font-bold text-foreground">R$5 a mais</span>, adicione o Pacote Premium Completo ao seu pedido e acelere seu aprendizado.
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <div className="my-6 p-6 bg-background/50 rounded-xl border border-primary/20">
            <p className="text-foreground/80">De <span className="line-through">R$197,00</span> por apenas:</p>
            <p className="text-5xl font-bold my-2 text-cta">R$14,90</p>
            <p className="font-bold text-lg text-foreground mt-4">Você recebe tudo do Plano Essencial, mais <span className="text-cta">10 Bônus Exclusivos:</span></p>
            <ul className="mt-4 space-y-2 text-md text-foreground/80 columns-1 sm:columns-2 text-left">
                {premiumBonuses.map((bonus) => (
                    <li key={bonus} className="flex items-start"><Star className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /><span>{bonus}</span></li>
                ))}
            </ul>
        </div>
        
        <AlertDialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-3 w-full max-w-md mx-auto">
          <Button asChild size="lg" className="w-full font-bold text-xl h-auto py-4 px-6 bg-cta hover:bg-cta/90 text-cta-foreground rounded-xl shadow-lg shadow-cta/20 animate-pulse-slow">
            <Link href={premiumCheckoutUrl}>SIM, QUERO A OFERTA POR R$14,90</Link>
          </Button>
          <Button asChild variant="link" size="lg" className="text-foreground/60 hover:text-foreground/80">
            <Link href={essentialCheckoutUrl}>Não, obrigado. Quero apenas o plano de R$9,99</Link>
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
