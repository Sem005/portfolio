
"use client";

import { FC, useEffect } from "react";
import useReveal from "../Hooks/useReveal";
import Hero from "./Hero";
import Navbar from "./navbar";
import CursorGlow from "./CursorGlow";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Footer from "./Footer";
import CTABand from "./CTABand";
import Contact from "./Contact";

const Portfolio: FC = () => {
  useReveal();

  useEffect(() => {
    document.body.style.cssText = 'background:#080B10!important;margin:0;padding:0';
    document.documentElement.style.cssText = 'background:#080B10!important';
  }, []);

  return (
    <div className="bg-[#080B10] text-[#F0F4F8] font-dm min-h-screen overflow-x-hidden">
       <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <CTABand />
        <Contact /> 
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;