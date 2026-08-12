"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  end, suffix = "", prefix = "", duration = 2200, className = "",
}: Props) {
  const [count, setCount]       = useState(0);
  const [started, setStarted]   = useState(false);
  const ref                     = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let startTime = 0;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(step);
      else setCount(end);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}
