interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentSection({ children, className = "" }: ContentSectionProps) {
  return (
    <section className={`bg-[#151820] ${className}`}>
      <div className="container mx-auto px-4 prose prose-lg prose-invert max-w-4xl">
        {children}
      </div>
    </section>
  );
}