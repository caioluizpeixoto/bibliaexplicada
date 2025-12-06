import { AiSummarizerClient } from './ai-summarizer-client';

export function AiSummarizerSection() {
  return (
    <section id="ai-summarizer" className="w-full py-12 md:py-24 lg:py-32 bg-muted text-muted-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">
              Understand Complex Passages with AI
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our AI tool helps you grasp difficult scriptures by providing clear, concise summaries and relevant context. Give it a try.
            </p>
          </div>
        </div>
        <AiSummarizerClient />
      </div>
    </section>
  );
}
