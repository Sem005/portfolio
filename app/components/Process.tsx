"use client";

import { FC, useState } from "react";
import { SectionHeader, Wrap } from "../primitives/primitives";
import { STEPS } from "../data/data";
import { COLORS } from "../constants/design_constants";
import { Step } from "../types/portfolio_types";

interface StepItemProps {
  step: Step;
  delay: string;
}

const StepItem: FC<StepItemProps> = ({ step, delay }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`reveal grid gap-8 items-start py-8 ${
        step.last ? '' : 'border-b border-white/5'
      } ${delay} grid-cols-[80px_1fr]`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col items-center">
        <div
          className="w-[52px] h-[52px] rounded-full flex items-center justify-center font-extrabold text-[1rem] shrink-0 transition-all duration-300 font-syne"
          style={{
            background: hovered ? COLORS.accent : COLORS.surface2,
            border: `2px solid ${hovered ? COLORS.accent : COLORS.border}`,
            color: hovered ? COLORS.bg : COLORS.accent,
            boxShadow: hovered ? '0 0 20px rgba(0,229,255,.3)' : 'none',
          }}
        >
          {step.n}
        </div>
        {!step.last && <div className="w-px flex-1 min-h-[20px] mt-2 bg-white/5" />}
      </div>
      <div className="pt-2.5">
        <h3 className="text-[1.15rem] font-semibold text-[#F0F4F8] mb-2 font-syne">{step.title}</h3>
        <p className="text-[0.9rem] text-[#8B9BAD] leading-relaxed">{step.desc}</p>
        <div className="text-[0.78rem] text-[#00E5FF] font-medium mt-2">⏱ {step.dur}</div>
      </div>
    </div>
  );
};

const Process: FC = () => {
  return (
    <section id="process" className="py-[clamp(80px,10vw,140px)] bg-[#0D1117]">
      <Wrap>
        <SectionHeader
          label="Comment je travaille"
          title="Un processus sans surprises"
          sub="Transparence, rigueur et communication à chaque étape. Vous savez toujours où en est votre projet."
        />
        <div className="flex flex-col max-w-[800px] mx-auto">
          {STEPS.map((step, i) => (
            <StepItem key={step.n} step={step} delay={`delay-${(i % 3) + 1}00`} />
          ))}
        </div>
      </Wrap>
    </section>
  );
};

export default Process