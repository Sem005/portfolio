"use client";

import { FC } from "react";
import { Label, Wrap } from "../primitives/primitives";
import { BTN_PRIMARY, BTN_SECONDARY } from "../constants/design_constants";

const CTABand: FC = () => {
  return (
    <section className="py-[clamp(60px,8vw,100px)] bg-[#080B10] border-y border-white/5 relative overflow-hidden text-center">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 800px 400px at 50% 50%,rgba(0,229,255,.08),transparent)",
        }}
      />
      <Wrap className="relative z-10">
        <div className="reveal">
          <Label className="block mb-3">Prêt à démarrer ?</Label>
          <h2 className="text-[clamp(1.9rem,3.5vw,3rem)] font-bold tracking-tight mb-5 font-syne">
            Votre prochain projet mérite
            <br />
            les meilleures fondations.
          </h2>
          <p className="text-[#8B9BAD] max-w-120 mx-auto leading-relaxed mb-10">
            Que vous ayez une idée à valider ou un produit à scaler, parlons-en.
            Premier appel gratuit, sans engagement.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className={BTN_PRIMARY}>
              Démarrer un projet →
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=semkolawole604@gmail.com&su=Nouveau%20projet"
              target="_blank"
              rel="noopener noreferrer"
              className={BTN_SECONDARY}
            >
              Envoyer un email
            </a>
          </div>
        </div>
      </Wrap>
    </section>
  );
};

export default CTABand;
