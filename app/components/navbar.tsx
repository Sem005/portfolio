"use client";

import { FC, useState } from "react";

import useScrolled from "../Hooks/useScrolled";
import { Wrap } from "../primitives/primitives";
import { BTN_PRIMARY } from "../constants/design_constants";
import { NAV_LINKS } from "../data/data";

interface NavLinkProps {
  label: string;
  href: string;
}

const NavLinkComponent: FC<NavLinkProps> = ({ label, href }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      className={`text-[0.9rem] transition-colors duration-200 no-underline ${
        hovered ? 'text-[#00E5FF]' : 'text-[#8B9BAD]'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  );
};

const Navbar: FC = () => {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 border-b border-white/5 transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_4px_40px_rgba(0,0,0,.5)]' : ''
        }`}
        style={{ background: 'rgba(8,11,16,0.92)', backdropFilter: 'blur(20px)' }}
      >
        <Wrap className="flex items-center justify-between py-5">
          <a href="#hero" className="no-underline text-[1.2rem] font-extrabold tracking-tight text-[#F0F4F8] font-syne">
            Semiou<span className="text-[#00E5FF]">.</span>
          </a>
          <ul className="hide-md flex gap-10 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <NavLinkComponent {...link} />
              </li>
            ))}
          </ul>
          <a href="#contact" className={`${BTN_PRIMARY} hide-md !px-5 !py-2 !text-[0.85rem]`}>
            Démarrer un projet →
          </a>
          <button
            className="show-sm flex-col gap-1.5 bg-transparent border-0 cursor-pointer p-1"
            onClick={() => setOpen(true)}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span key={i} className="block w-[22px] h-[2px] bg-[#F0F4F8] rounded" />
            ))}
          </button>
        </Wrap>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-8 bg-[#080B10] animate-[fadeIn_.25s_ease]"
        >
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 right-8 bg-transparent border-0 text-[#8B9BAD] text-2xl cursor-pointer"
          >
            ✕
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="no-underline text-[2rem] font-bold text-[#F0F4F8] hover:text-[#00E5FF] transition-colors font-syne"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className={BTN_PRIMARY} onClick={() => setOpen(false)}>
            Démarrer un projet →
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;