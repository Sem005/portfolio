"use client";

import { FC, useState } from "react";
import { Label, Wrap } from "../primitives/primitives";
import { CONTACT_LINKS } from "../data/data";

const Contact: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="contact"
      className="py-[clamp(80px,10vw,140px)] bg-[#0D1117] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-[#080B10] via-[#0D1117] to-[#080B10]" />

      <Wrap className="relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="reveal text-center mb-20">
            <Label className="block mb-4">Prenons contact</Label>

            <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-bold tracking-tight mb-6 font-syne leading-tight">
              Prêt à démarrer
              <br />
              <span className="bg-linear-to-r from-[#00E5FF] to-[#7C3AED] bg-clip-text text-transparent">
                votre projet ?
              </span>
            </h2>

            <p className="text-[1.1rem] text-[#8B9BAD] leading-relaxed max-w-2xl mx-auto">
              Choisissez votre canal préféré pour entrer en contact
            </p>
          </div>

          {/* Grid */}
          <div className="reveal delay-100 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONTACT_LINKS.map((link, index) => {
              const hovered = hoveredIndex === index;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group relative overflow-hidden rounded-3xl border border-white/5 bg-linear-to-br from-[#161D26] to-[#1C2530] p-8 transition-all duration-300 hover:border-[#00E5FF]/30 hover:shadow-[0_20px_60px_rgba(0,229,255,.2)] hover:-translate-y-1 min-h-70"
                >
                  {/* Animated gradient */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#00E5FF]/0 via-[#00E5FF]/5 to-[#7C3AED]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative h-full flex flex-col justify-between">
                    <div>
                      <div
                        className={`
                          w-14 h-14 rounded-2xl
                          flex items-center justify-center
                          text-2xl mb-4
                          transition-all duration-300
                          ${
                            hovered
                              ? "bg-[#00E5FF] text-[#080B10] scale-110"
                              : "bg-[#1C2530] text-[#00E5FF]"
                          }
                        `}
                      >
                        {link.icon}
                      </div>

                      <div className="text-[0.7rem] tracking-[.12em] uppercase text-[#5A6A7A] mb-2 font-semibold">
                        {link.label}
                      </div>

                      <div
                        className={`
                          text-[0.95rem] font-semibold transition-colors whitespace-nowrap wrap-break-word
                          ${hovered ? "text-[#00E5FF]" : "text-[#F0F4F8]"}
                        `}
                      >
                        {link.val}
                      </div>
                    </div>

                    <div
                      className={`
                        flex items-center gap-2 text-[0.85rem] text-[#00E5FF] font-medium
                        transition-all duration-300
                        ${hovered ? "translate-x-2" : "translate-x-0"}
                      `}
                    >
                      Contacter
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </Wrap>
    </section>
  );
};

export default Contact;
