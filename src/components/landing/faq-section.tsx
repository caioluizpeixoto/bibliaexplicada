import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is Study Bible Hub?',
    answer:
      'Study Bible Hub is a comprehensive digital platform for Bible study. We provide in-depth materials, modern tools like an AI summarizer, and a vibrant community to help you deepen your understanding of the Scriptures.',
  },
  {
    question: 'Is this a one-time payment or a subscription?',
    answer:
      'Our main "Scholar" plan is a one-time payment that grants you lifetime access to all current and future content. We believe in providing lasting value without recurring fees.',
  },
  {
    question: 'Which Bible translation do you use?',
    answer:
      "Our platform primarily uses the World English Bible (WEB) for its modern language and public domain status. However, we often reference other translations like the KJV, NIV, and ESV for comparative study.",
  },
  {
    question: 'Can I use this on my phone or tablet?',
    answer:
      'Absolutely! Our platform is fully responsive and designed to work beautifully on all devices, including desktops, tablets, and smartphones. Your study can go wherever you go.',
  },
  {
    question: "What if I'm new to studying the Bible?",
    answer:
      "You're in the right place! Our materials are structured to be accessible to beginners while still offering profound insights for those who have been studying for years. Our community and support are also here to help you on your journey.",
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container max-w-3xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed">
              Have questions? We have answers. Here are some of the most common inquiries we receive.
            </p>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-headline text-lg hover:no-underline text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-foreground/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
