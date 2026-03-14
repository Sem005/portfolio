"use client";

import { FC, useState } from "react";
import { NAV_LINKS } from "../data/data";
import { Wrap } from "../primitives/primitives";

const Footer: FC = () => {

    const [hovered, setHovered] = useState(false);
  return (
    <footer className="bg-[#080B10] border-t border-white/5 py-12">
      <Wrap className="flex flex-wrap items-center justify-between gap-6">
        <div className="text-[1.1rem] font-extrabold text-[#8B9BAD] font-syne">
          YS<span className="text-[#00E5FF]">.</span>
        </div>
        <div className="text-[0.82rem] text-[#5A6A7A]">
          © {new Date().getFullYear()} Semiou Yessoufou
        </div>
        <div className="flex gap-6">
          {NAV_LINKS.map((link) => {
          
            return (
              <a
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className={`text-[0.82rem] no-underline transition-colors ${
                  hovered ? 'text-[#00E5FF]' : 'text-[#5A6A7A]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </Wrap>
    </footer>
  );
};

export default Footer;