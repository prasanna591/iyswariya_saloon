type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      <div className={`${align === "center" ? "flex justify-center" : ""}`}>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="h-section mt-5 text-brand-950">{title}</h2>
      {description && (
        <p className="mt-5 font-sans text-[15px] font-light leading-relaxed text-ink-mute">
          {description}
        </p>
      )}
    </div>
  );
}