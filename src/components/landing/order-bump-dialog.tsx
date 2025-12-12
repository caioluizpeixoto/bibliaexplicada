
'use client';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Star, X } from 'lucide-react';
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
      <AlertDialogContent className="bg-card border-cta max-w-lg md:max-w-2xl p-0" onPointerDownOutside={(e) => onOpenChange(false)}>
        <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none text-foreground z-10"
        >
            <X className="h-5 w-5" />
            <span className="sr-only">Fechar</span>
        </button>
        <div className="max-h-[90vh] overflow-y-auto p-4 sm:p-6 text-center">
            <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl md:text-3xl font-headline font-bold text-center text-cta">
                ESPERE! Oferta Imperdível!
            </AlertDialogTitle>
            <AlertDialogDescription className="text-base md:text-lg text-foreground/80 pt-2">
                Por apenas <span className="font-bold text-foreground">R$8 a mais</span>, turbine seu aprendizado com o Pacote Premium Completo.
            </AlertDialogDescription>
            </AlertDialogHeader>
            
            <div className="my-4 p-4 bg-background/50 rounded-xl border border-primary/20">
                <p className="font-bold text-base md:text-lg text-foreground mt-2">Leve o acesso completo por:</p>
                 <p className="text-4xl md:text-5xl font-bold my-2 text-cta">R$17,90</p>
                <p className="font-bold text-base text-foreground mt-4">Receba tudo do Plano Essencial, mais <span className="text-cta">10 Bônus Exclusivos:</span></p>
                  <ul className="mt-4 space-y-2 text-sm text-foreground/80 columns-1 sm:columns-2 text-left">
                    {premiumBonuses.map((bonus) => (
                      <li key={bonus} className="flex items-start"><Star className="h-5 w-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /><span>{bonus}</span></li>
                    ))}
                  </ul>
            </div>
            
            <AlertDialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-3 w-full max-w-md mx-auto">
            <Button asChild size="lg" className="w-full font-bold text-lg md:text-xl h-auto py-3 md:py-4 px-6 bg-cta hover:bg-cta/90 text-cta-foreground rounded-xl shadow-lg shadow-cta/20 animate-pulse-slow">
                <Link href={premiumCheckoutUrl}>SIM, QUERO A OFERTA!</Link>
            </Button>
            <Button asChild variant="link" size="sm" className="text-foreground/60 hover:text-foreground/80 h-auto">
                <Link href={essentialCheckoutUrl}>Não, obrigado. Quero apenas o plano de R$9,99</Link>
            </Button>
            </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
