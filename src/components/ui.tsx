import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-shell px-5 sm:px-8", className)}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  id,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  id?: string;
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 id={id} className="mt-3 font-serif text-3xl sm:text-4xl leading-tight text-forest-950">{title}</h2>
      {lead ? <p className="mt-3 text-ink-700 leading-7">{lead}</p> : null}
    </div>
  );
}
