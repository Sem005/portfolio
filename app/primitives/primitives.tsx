import { FC, ReactNode } from "react";

interface WrapProps {
  children: ReactNode;
  className?: string;
}

export const Wrap: FC<WrapProps> = ({ children, className }) => (
  <div className={`max-w-[1200px] mx-auto px-[clamp(1.5rem,4vw,3rem)] ${className}`}>
    {children}
  </div>
);

interface LabelProps {
  children: ReactNode;
  className?: string;
}

export const Label: FC<LabelProps> = ({ children, className = '' }) => (
  <span className={`text-[0.72rem] font-medium tracking-[0.16em] uppercase text-[#00E5FF] ${className}`}>
    {children}
  </span>
);

interface SectionHeaderProps {
  label: string;
  title: string;
  sub?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ label, title, sub }) => (
  <div className="reveal text-center mb-[clamp(3rem,5vw,5rem)]">
    <Label className="block mb-4">{label}</Label>
    <h2 className="text-[clamp(1.9rem,3.8vw,3rem)] font-bold tracking-tight mb-3 font-syne">
      {title}
    </h2>
    {sub && <p className="text-[#8B9BAD] max-w-[520px] mx-auto leading-relaxed">{sub}</p>}
  </div>
);