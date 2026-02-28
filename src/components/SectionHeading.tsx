import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: ReactNode;
  subtitle?: string;
  alignment?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({ title, subtitle, alignment = "center", light = false }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${alignment === "center" ? "text-center" : "text-left"}`}>
      {subtitle && (
        <span className={`text-sm font-bold tracking-widest uppercase mb-3 block ${light ? "text-[#F5A623]" : "text-[#E94560]"}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${light ? "text-white" : "text-[#1A1A2E]"}`}>
        {title}
      </h2>
      <div className={`h-1.5 w-24 rounded-full ${alignment === "center" ? "mx-auto" : ""} ${light ? "bg-[#F5A623]" : "bg-[#1A1A2E]"}`} />
    </div>
  );
}
