import Link from 'next/link';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import { Logo } from '@/components/logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border/20">
      <div className="container py-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <Logo />
        <p className="text-sm text-card-foreground/70">
          &copy; {currentYear} Study Bible Hub. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link href="#" className="text-card-foreground/70 hover:text-primary">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-card-foreground/70 hover:text-primary">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-card-foreground/70 hover:text-primary">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
