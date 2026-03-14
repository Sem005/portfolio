"use client";

import { FC, useCallback, useRef, MouseEvent } from "react";
import { Skill } from "../types/portfolio_types";
import { CARD_CLASS, TAG_CLASS } from "../constants/design_constants";
import { SectionHeader, Wrap } from "../primitives/primitives";
import { SKILLS } from "../data/data";

interface SkillCardProps {
  skill: Skill;
  delay: string;
}

const SkillCard: FC<SkillCardProps> = ({ skill, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !glowRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glowRef.current.style.setProperty('--mx', `${x}%`);
    glowRef.current.style.setProperty('--my', `${y}%`);
    glowRef.current.style.opacity = '1';
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (glowRef.current) {
      glowRef.current.style.opacity = '0';
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`reveal ${CARD_CLASS} p-8 relative overflow-hidden ${delay}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-300"
        style={{
          background:
            'radial-gradient(circle at var(--mx,50%) var(--my,50%),rgba(0,229,255,.07),transparent 60%)',
        }}
      />
      <div className="text-[2rem] mb-5">{skill.icon}</div>
      <h3 className="text-[1.1rem] font-semibold mb-3 text-[#F0F4F8] font-syne">{skill.title}</h3>
      <p className="text-[0.9rem] text-[#8B9BAD] leading-relaxed mb-4">{skill.desc}</p>
      <div className="flex flex-wrap gap-2">
        {skill.tags.map((tag) => (
          <span key={tag} className={TAG_CLASS}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills: FC = () => {
  return (
    <section id="skills" className="py-[clamp(80px,10vw,140px)] bg-[#080B10]">
      <Wrap>
        <SectionHeader
          label="Stack technique"
          title="Les outils de mon arsenal"
          sub="Des technologies battle-tested, choisies pour leur robustesse et leur capacité à créer des produits pérennes."
        />
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {SKILLS.map((skill, i) => (
            <SkillCard key={skill.title} skill={skill} delay={`delay-${(i % 3) + 1}00`} />
          ))}
        </div>
      </Wrap>
    </section>
  );
};

export default Skills;
