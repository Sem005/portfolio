"use client";

import { FC, useState } from "react";
import { BTN_PRIMARY, BTN_SECONDARY, COLORS } from "../constants/design_constants";
import { STATS } from "../data/data";
import { Label, Wrap } from "../primitives/primitives";

interface TechPillProps {
  label: string;
  delay: number;
}

const TechPill: FC<TechPillProps> = ({ label, delay }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        animation: `floatY 4s ${delay}s ease-in-out infinite`,
        background: COLORS.surface,
        border: `1px solid ${hovered ? COLORS.accent : COLORS.border}`,
        boxShadow: hovered ? '0 0 20px rgba(0,229,255,.2)' : 'none',
        transition: 'all .2s',
        borderRadius: 100,
        padding: '.6rem 1.1rem',
        fontSize: '.8rem',
        fontWeight: 500,
        color: hovered ? COLORS.accent : COLORS.text2,
        display: 'flex',
        alignItems: 'center',
        gap: '.5rem',
        cursor: 'default',
      }}
    >
      <span
        style={{
          width: 7,
          height: 7,
          borderRadius: '50%',
          background: COLORS.accent,
          display: 'block',
        }}
      />
      {label}
    </div>
  );
};

const Hero: FC = () => {
  return (
    <section id="hero" className="relative flex items-center min-h-screen overflow-hidden pt-24">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(0,229,255,.12),transparent 70%)' }}
      />
      <div
        className="absolute top-1/4 right-[10%] w-100 h-100 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle,rgba(124,58,237,.1),transparent 70%)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,229,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,.03) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <Wrap className="relative z-10 w-full">
        <div className="max-w-225">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00E5FF]/20 bg-[#00E5FF]/8 mb-8 animate-[fadeInUp_.8s_both]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] block animate-[pulse_2s_infinite]" />
            <Label>Disponible pour de nouveaux projets</Label>
          </div>

          <h1 className="leading-[1.1] tracking-tight mb-6 font-syne text-[clamp(3rem,8vw,7rem)] font-extrabold animate-[fadeInUp_.8s_.1s_both]">
            <span className="block text-[#F0F4F8]">Je construis des</span>
            <span className="block text-[#00E5FF] relative">
              produits digitaux
              <span
                className="absolute bottom-1 left-0 w-full h-0.75 rounded-sm"
                style={{ background: 'linear-gradient(90deg,#00E5FF,transparent)' }}
              />
            </span>
            <span className="block text-[#F0F4F8]">qui scalent.</span>
          </h1>

          <p className="text-[1.1rem] text-[#8B9BAD] leading-[1.75] max-w-135 mb-10 animate-[fadeInUp_.8s_.2s_both]">
            Développeur Full-Stack & créateur SaaS — je transforme vos idées en applications rapides,
            fiables et prêtes à croître. React, Next.js, Node.js, Flutter.
          </p>

          <div className="flex flex-wrap gap-4 mb-0 animate-[fadeInUp_.8s_.3s_both]">
            <a href="#projects" className={BTN_PRIMARY}>
              Voir mes projets →
            </a>
            <a href="#contact" className={BTN_SECONDARY}>
              Discutons ↗
            </a>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-4 mt-14 pt-10 border-t border-white/5 animate-[fadeInUp_.8s_.4s_both]">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-[2rem] font-extrabold text-[#F0F4F8] font-syne">
                  {stat.num}
                  <span className="text-[#00E5FF]">{stat.s}</span>
                </div>
                <div className="text-[0.82rem] text-[#5A6A7A] mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Wrap>

      <div className="hide-md absolute right-[5%] top-1/2 -translate-y-1/2 flex flex-col gap-3 z-10 animate-[fadeIn_1s_.6s_both]">
        {['React / Next.js', 'Node.js / NestJS', 'TypeScript', 'Flutter', 'Docker / CI/CD'].map(
          (tech, i) => (
            <TechPill key={tech} label={tech} delay={i * 0.5} />
          )
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#5A6A7A] text-[0.75rem] tracking-widest z-10 animate-[fadeIn_1s_1s_both]">
        <div
          className="w-px h-10 animate-[scrollBar_2s_ease_infinite]"
          style={{ background: `linear-gradient(to bottom,${COLORS.accent},transparent)` }}
        />
        scroll
      </div>
    </section>
  );
};

export default Hero;