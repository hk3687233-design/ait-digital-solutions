"use client";

import { useRef } from "react";

export default function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", ((e.clientX - r.left) / r.width * 100) + "%");
    el.style.setProperty("--y", ((e.clientY - r.top) / r.height * 100) + "%");
  }

  return (
    <div ref={ref} onMouseMove={onMove} className={"spotlight-card glow-card " + className}>
      {children}
    </div>
  );
}
