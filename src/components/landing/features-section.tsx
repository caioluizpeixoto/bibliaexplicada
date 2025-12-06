import { BookOpen, Sparkles, Users, Video, MessageSquare, Lock } from 'lucide-react';

const features = [
  {
    name: 'Complete Biblical Studies',
    description: 'Explore all 66 books of the Bible with in-depth analysis and commentary.',
    icon: BookOpen,
  },
  {
    name: 'AI-Powered Insights',
    description: 'Understand complex passages with AI-generated summaries and context.',
    icon: Sparkles,
  },
  {
    name: 'Exclusive Community',
    description: 'Connect with a community of fellow learners and grow in faith together.',
    icon: Users,
  },
  {
    name: 'Video Lessons',
    description: 'Visualize biblical stories and concepts with high-quality video content.',
    icon: Video,
  },
  {
    name: 'Expert Support',
    description: 'Get your questions answered by our team of biblical scholars.',
    icon: MessageSquare,
  },
  {
    name: 'Lifetime Access',
    description: 'Pay once and get unlimited access to all current and future content.',
    icon: Lock,
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted text-muted-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-5xl text-primary">
              Everything You Need for a Deeper Study
            </h2>
            <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform provides a rich and immersive learning experience with tools designed to illuminate the Word of God.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-12 py-12 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="grid gap-4 items-start text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold font-headline text-muted-foreground">{feature.name}</h3>
                <p className="text-sm text-muted-foreground/80">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
