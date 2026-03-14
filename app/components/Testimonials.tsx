"use client";

import { FC } from "react";
import { CARD_CLASS } from "../constants/design_constants";
import { TESTIMONIALS } from "../data/data";
import { SectionHeader, Wrap } from "../primitives/primitives";

const Testimonials: FC = () => {
  return (
    <section id="testimonials" className="py-[clamp(80px,10vw,140px)] bg-[#080B10]">
      <Wrap>
        <SectionHeader
          label="Ils me font confiance"
          title="Ce que disent mes clients"
          sub="La satisfaction client n'est pas un objectif, c'est mon standard de base."
        />
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={testimonial.name} className={`reveal ${CARD_CLASS} p-8 relative delay-${i + 1}00`}>
              <div className="absolute top-2 left-6 text-[5rem] text-[#00E5FF]/10 leading-none pointer-events-none select-none font-syne">
                "
              </div>
              <div className="text-[#F59E0B] text-[0.9rem] mb-5">
                {'★'.repeat(testimonial.stars)}
              </div>
              <p className="text-[0.95rem] text-[#8B9BAD] leading-[1.8] mb-6 italic">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3.5 pt-5 border-t border-white/5">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-[0.85rem] text-white shrink-0"
                  style={{ background: testimonial.g }}
                >
                  {testimonial.i}
                </div>
                <div>
                  <div className="font-semibold text-[0.9rem] text-[#F0F4F8]">{testimonial.name}</div>
                  <div className="text-[0.78rem] text-[#5A6A7A]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

export default Testimonials