"use client";

import { FC, useState } from "react";
import { SERVICES } from "../data/data";
import { SectionHeader, Wrap } from "../primitives/primitives";
import { Service } from "../types/portfolio_types";
import { COLORS } from "../constants/design_constants";

interface ServiceCardProps {
  service: Service;
  delay: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ service, delay }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`reveal p-9 rounded-2xl border bg-[#161D26] relative overflow-hidden transition-all duration-300 ${delay}`}
      style={{
        borderColor: hovered ? 'rgba(0,229,255,.25)' : 'rgba(255,255,255,.07)',
        transform: hovered ? 'translateY(-6px)' : 'none',
        boxShadow: hovered ? '0 20px 50px rgba(0,0,0,.3)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute top-0 left-0 w-full h-px transition-transform duration-300"
        style={{
          background: `linear-gradient(90deg,transparent,${COLORS.accent},transparent)`,
          transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
        }}
      />
      <div className="text-[3rem] font-extrabold leading-none mb-4 text-[#00E5FF]/10 font-syne">
        {service.n}
      </div>
      <h3 className="text-[1.15rem] font-semibold text-[#F0F4F8] mb-3 font-syne">{service.title}</h3>
      <p className="text-[0.9rem] text-[#8B9BAD] leading-relaxed mb-5">{service.desc}</p>
      <ul className="flex flex-col gap-2 list-none p-0 m-0">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[0.85rem] text-[#5A6A7A]">
            <span className="text-[#00E5FF] shrink-0">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: FC = () => {
  return (
    <section id="services" className="py-[clamp(80px,10vw,140px)] bg-[#080B10]">
      <Wrap>
        <SectionHeader
          label="Ce que je fais"
          title="Services & expertises"
          sub="Du développement pur au conseil stratégique, je m'adapte à vos besoins et à votre stade de développement."
        />
        <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.n} service={service} delay={`delay-${(i % 3) + 1}00`} />
          ))}
        </div>
      </Wrap>
    </section>
  );
};


export default Services;