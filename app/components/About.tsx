"use client";

import { FC } from "react";
import { COLORS } from "../constants/design_constants";
import { Label, Wrap } from "../primitives/primitives";
import {
  Briefcase,
  Clock,
  MapPin,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

const About: FC = () => {
  return (
    <section id="about" className="py-[clamp(80px,10vw,140px)] bg-[#0D1117]">
      <Wrap>
        <div className="grid gap-20 items-center lg:grid-cols-[1fr_1.2fr] grid-cols-1">
          <div className="reveal relative pb-8 pr-6">
            <div className="rounded-2xl border border-white/5 bg-[#161D26] p-10 relative overflow-hidden">
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background: `linear-gradient(90deg,${COLORS.accent2},${COLORS.accent},transparent)`,
                }}
              />
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-[1.8rem] font-extrabold mb-6 font-syne"
                style={{
                  background: `linear-gradient(135deg,${COLORS.accent},${COLORS.accent2})`,
                  color: COLORS.bg,
                }}
              >
                SY
              </div>
              <div className="text-[1.3rem] font-bold mb-1 font-syne">
                Semiou Yessoufou
              </div>
              <div className="text-[#00E5FF] text-[0.85rem] mb-4">
                Développeur Full-Stack • Créateur SaaS
              </div>
              <p className="text-[0.88rem] text-[#8B9BAD] leading-relaxed">
                Architecte de solutions digitales pour startups et PME à travers
                le monde.
              </p>
              <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-white/5">
                {[
                  { Icon: MapPin, text: "Disponible en remote" },
                  { Icon: Clock, text: "Réponse sous 24h" },
                  { Icon: Briefcase, text: "Freelance & Agences" },
                ].map(({ Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 text-[0.88rem] text-[#8B9BAD]"
                  >
                    <Icon size={18} className="text-[#00E5FF]/80" />{" "}
                    {/* ← icône Lucide */}
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 rounded-xl border border-white/5 bg-[#1C2530] px-5 py-3 flex items-center gap-4 shadow-[0_20px_40px_rgba(0,0,0,.4)]">
              <div>
                <div className="text-[1.5rem] font-extrabold text-[#00E5FF] font-syne">
                  5★
                </div>
                <div className="text-[0.78rem] text-[#5A6A7A]">
                  Note moyenne
                </div>
              </div>
              <div className="w-px h-9 bg-white/5" />
              <div>
                <div className="text-[1.5rem] font-extrabold text-[#4ADE80] font-syne">
                  98%
                </div>
                <div className="text-[0.78rem] text-[#5A6A7A]">
                  Dans les délais
                </div>
              </div>
            </div>
          </div>

          <div className="reveal delay-100">
            <Label>À propos de moi</Label>
            <h2 className="text-[clamp(1.9rem,3.5vw,2.8rem)] font-bold tracking-tight mt-3 mb-5 font-syne">
              L'efficacité est
              <br />
              ma marque de fabrique.
            </h2>
            <p className="text-[#8B9BAD] mb-5 leading-[1.8]">
              Je suis Semiou Yessoufou, développeur Full-Stack passionné avec
              plus de 4 ans d'expérience dans la création d'applications web,
              mobiles et de SaaS performants. De la maquette au déploiement, je
              pilote chaque projet avec rigueur et transparence.
            </p>
            <p className="text-[#8B9BAD] mb-5 leading-[1.8]">
              Mon approche : comprendre votre métier avant d'écrire la première
              ligne de code. Je conçois des architectures scalables qui
              grandissent avec votre business, pas contre lui.
            </p>
            <p className="text-[#8B9BAD] mb-5 leading-[1.8]">
              J'ai travaillé avec le startups Devschap, Inosoft
           et des agences digitales — toujours avec le même
              objectif :{" "}
              <strong className="text-[#F0F4F8]">
                livrer de la valeur mesurable, pas juste du code.
              </strong>
            </p>

            <div className="flex flex-wrap gap-2.5 mt-8">
              {[
                { Icon: Zap, label: "Rapidité" },
                { Icon: Target, label: "Efficacité" },
                { Icon: Sparkles, label: "Simplicité" },
                { Icon: Shield, label: "Fiabilité" },
                { Icon: TrendingUp, label: "Scalabilité" },
              ].map(({ Icon, label }) => (
                <span
                  key={label}
                  className="text-[0.82rem] font-medium text-[#00E5FF] px-4 py-1.5 rounded-full border border-[#00E5FF]/20 bg-[rgba(0,229,255,.07)] flex items-center gap-1.5"
                >
                  <Icon
                    size={16}
                    className="text-[#00E5FF]/90"
                    strokeWidth={2.5}
                  />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
};

export default About;
