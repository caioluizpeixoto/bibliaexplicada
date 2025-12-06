export function OrnamentalDivider() {
  return (
    <div
      className="w-full flex items-center justify-center py-12 lg:py-16"
      aria-hidden="true"
    >
      <div className="w-2/5 h-px bg-border/50" />
      <div className="mx-4 text-primary text-xl font-headline">◆</div>
      <div className="w-2/5 h-px bg-border/50" />
    </div>
  );
}
