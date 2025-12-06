import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Explorer',
    price: 'Free',
    description: 'Start your journey with essential tools.',
    features: ['Access to Genesis', 'Basic Search', 'Community Access'],
    isPopular: false,
  },
  {
    name: 'Scholar',
    price: '$99',
    priceTerm: 'one-time',
    description: 'Unlock the entire Bible with advanced study aids.',
    features: [
      'Access to all 66 books',
      'Advanced Search',
      'AI Passage Summarizer',
      'Video Lessons Library',
      'Exclusive Community',
    ],
    isPopular: true,
  },
  {
    name: 'Disciple Group',
    price: '$299',
    priceTerm: 'one-time',
    description: 'Equip your small group for deeper study.',
    features: ['Up to 10 Scholar licenses', 'Group Progress Tracking', 'Dedicated Support'],
    isPopular: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted text-muted-foreground">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold font-headline tracking-tighter md:text-4xl/tight text-primary">
            Choose Your Plan
          </h2>
          <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A single investment for a lifetime of spiritual growth. No subscriptions, no hidden fees.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn('relative flex flex-col bg-card text-card-foreground shadow-lg', plan.isPopular && 'border-primary border-2 shadow-primary/20')}>
              {plan.isPopular && (
                <Badge className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              <CardHeader className="items-center text-center">
                <CardTitle className="font-headline text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-card-foreground/80">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-6">
                <div className="text-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.priceTerm && <span className="text-card-foreground/70">/{plan.priceTerm}</span>}
                </div>
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={plan.isPopular ? 'default' : 'outline'}>
                  <Link href="#">Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
