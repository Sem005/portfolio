"use client";

import { FC } from "react";
import useCursor from "../Hooks/useCursor";

const CursorGlow: FC = () => {
  const { x, y } = useCursor();
  return (
    <div
      className="fixed w-[320px] h-[320px] rounded-full pointer-events-none z-[999]"
      style={{
        background: 'radial-gradient(circle,rgba(0,229,255,.04),transparent 70%)',
        left: x,
        top: y,
        transform: 'translate(-50%,-50%)',
        transition: 'left .12s,top .12s',
      }}
    />
  );
};

export default CursorGlow;