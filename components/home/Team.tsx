"use client";

import Link from "next/link";
import Image from "next/image";
import { BookOpen, Users, Award, ArrowUpRight, Youtube, Brain, Star } from "lucide-react";
import FadeUp from "@/components/shared/FadeUp";

const team = [
  {
    name:     "Arslan Ahmad",
    role:     "Co-Founder & CEO",
    img:      "/images/team/arslan.jpg",
    initials: "AA",
    caption:  "Co Founder & CEO | AIT Digital Solutions | Co-Founder of Star X | Writer | Speaker | Content Creation Consultant | Business Strategist | Entrepreneur",
    bio:      "With experience across 8 physical businesses, Arslan has built a community of 80,000+ followers and trained 25,000+ students. Author of 2 published books, Punjab-Level Speech Competition Topper, and featured by the Qasim Ali Shah Foundation.",
    stats:    [
      { icon: Users,    v: "25K+", l: "Students"  },
      { icon: BookOpen, v: "2",    l: "Books"     },
      { icon: Award,    v: "80K+", l: "Followers" },
    ],
    tags: ["Content Creation", "AI Tools", "Business Strategy", "Public Speaker"],
  },
  {
    name:     "Iftikhar-UL-Hassan",
    role:     "Co-Founder & Director",
    img:      "/images/team/iftikhar.jpg",
    initials: "IH",
    caption:  "Co-Founder & Director | AIT Digital Solutions | YouTube Automation Expert | AI & Digital Marketing Strategist | Content Creator | Top Rated Freelancer",
    bio:      "With 8+ years of industry experience and 5+ years of teaching, Iftikhar specialises in YouTube Automation, AI, Content Creation, Social Media Management, Personal Branding, Digital Marketing, E-Commerce, and Freelancing. Trained 2,000+ students.",
    stats:    [
      { icon: Youtube, v: "2K+",  l: "Students" },
      { icon: Brain,   v: "8+",   l: "Yrs Exp." },
      { icon: Star,    v: "Top",  l: "Freelancer"},
    ],
    tags: ["YouTube Automation", "AI & Digital Marketing", "E-Commerce", "Freelancing"],
  },
  {
    name:     "M. Gulzar",
    role:     "Founder & Director",
    img:      "/images/team/gulzar.jpg",
    initials: "MG",
    caption:  "Founder & Director | AIT Digital Solutions | Director at Thcommerce Company | Business Operations & Networking Expert | Business Development Strategist",
    bio:      "Seasoned business operations and networking expert with extensive experience managing multiple physical businesses. His expertise in strategic planning, team leadership, and building long-term business relationships forms the operational backbone of AIT.",
    stats:    [
      { icon: Award, v: "8+",  l: "Businesses" },
      { icon: Users, v: "10+", l: "Years Exp." },
    ],
    tags: ["Business Operations", "Strategic Planning", "Team Leadership", "Networking"],
  },
];

export default function Team() {
  return (
    <section className="section-soft section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <span className="section-badge mb-5 inline-flex">Our Leaders</span>
          <h2 className="font-heading font-black text-ink text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
            Meet the Visionaries<br />
            <span className="gold-text">Behind AIT</span>
          </h2>
          <p className="text-ink-muted text-lg max-w-xl mx-auto">
            Real entrepreneurs and educators dedicated to transforming
            Pakistan&apos;s digital landscape — one student at a time.
          </p>
          <div className="gold-divider mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, i) => {
            return (
              <FadeUp key={member.name} delay={i * 0.1}>
              <div className="card-white overflow-hidden group flex flex-col h-full">
                {/* Gold top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-gold/30 via-gold to-gold/30" />

                {/* Photo */}
                <div className="relative w-full aspect-[4/3] bg-ink overflow-hidden">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Fallback overlay with initials (shown if image missing) */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-ink to-ink/80"
                    style={{ opacity: 0 }} aria-hidden>
                    <span className="font-heading font-black text-5xl gold-text">{member.initials}</span>
                  </div>
                  {/* Bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ink/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-white font-heading font-black text-base leading-tight">{member.name}</span>
                    <p className="text-gold text-xs font-semibold">{member.role}</p>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Caption */}
                  <p className="text-[10px] text-gold/70 uppercase tracking-wider font-semibold mb-3 leading-relaxed">
                    {member.caption}
                  </p>

                  <p className="text-ink-muted text-sm leading-relaxed mb-4 flex-1">
                    {member.bio}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-2 mb-4">
                    {member.stats.map((s) => {
                      const Icon = s.icon;
                      return (
                        <div key={s.l} className="flex-1 text-center bg-surface-50 rounded-xl py-2.5 border border-surface-200">
                          <Icon className="w-3.5 h-3.5 text-gold mx-auto mb-1" />
                          <div className="font-heading font-black text-ink text-base leading-none">{s.v}</div>
                          <div className="text-[9px] text-ink-soft uppercase tracking-wide mt-0.5">{s.l}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {member.tags.map((t) => (
                      <span key={t} className="text-[9px] font-semibold tracking-wide uppercase px-2 py-1 rounded-full bg-gold/8 text-gold border border-gold/20">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </FadeUp>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/team"
            className="btn-outline px-8 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2"
          >
            Full Team Story <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
