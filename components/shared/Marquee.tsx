"use client";

const items = [
  { text: "25,000+ Students Trained",       icon: "🎓" },
  { text: "AI-Powered Curriculum",           icon: "⚡" },
  { text: "9+ Digital Services",            icon: "🚀" },
  { text: "Pakistan's #1 Digital Hub",      icon: "🏆" },
  { text: "80,000+ Social Followers",       icon: "📱" },
  { text: "Based in Gujranwala",            icon: "📍" },
  { text: "Real Business Results",          icon: "💰" },
  { text: "Lifetime Community Support",     icon: "🤝" },
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-track overflow-hidden bg-ink border-y border-white/5 py-3 select-none">
      <div className="flex gap-0 marquee-inner animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2.5 px-6 text-[13px] font-semibold text-gray-400 tracking-wide">
            <span className="text-base">{item.icon}</span>
            {item.text}
            <span className="ml-4 w-1 h-1 rounded-full bg-gold/50 inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}
