import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, CheckCircle, Target, Eye, Heart,
  Award, BookOpen, Globe2, Users, Lightbulb, Youtube, Brain, Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Our Story & Mission",
  description:
    "Learn about AIT Digital Solutions — founded in Gujranwala by Arslan Ahmad, Iftikhar-UL-Hassan, and M. Gulzar. Our mission: empowering 100,000+ Pakistanis with real digital income skills.",
  alternates: { canonical: "https://aitdigitalsolutions.com/about" },
  openGraph: {
    title: "About AIT Digital Solutions — Our Story & Mission",
    description: "Founded in Gujranwala by 3 entrepreneurs. 25,000+ students trained. Building Pakistan's most impactful digital skills ecosystem.",
    url: "https://aitdigitalsolutions.com/about",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "About AIT Digital Solutions" }],
  },
};

const milestones = [
  { year: "2024", event: "AIT Digital Solutions Founded in Gujranwala" },
  { year: "2024", event: "First 1,000 Students Enrolled" },
  { year: "2024", event: "Launched YouTube & TikTok Automation Courses" },
  { year: "2025", event: "Crossed 25,000 Students Trained" },
  { year: "2025", event: "Expanded to Full Digital Agency Services" },
  { year: "2025", event: "Launched AI Tools & Web Development Programs" },
];

const founders = [
  {
    name: "Arslan Ahmad",
    role: "Co-Founder & CEO",
    img: "/images/team/arslan.jpg",
    caption: "Co Founder & CEO | Writer | Speaker | Content Creation Consultant | Business Strategist | Entrepreneur",
    bio: [
      "Arslan Ahmad is one of Pakistan's most dynamic young entrepreneurs — a writer, speaker, content creation consultant, and business strategist who has built a community of 80,000+ followers across social media platforms.",
      "Having trained 25,000+ students through seminars, workshops, and online programs, Arslan brings unmatched expertise in content creation, AI, digital marketing, and entrepreneurship. With experience across 8 physical businesses, he is the creative and strategic force behind AIT.",
    ],
    stats: [
      { icon: Users,    v: "25K+", l: "Students"  },
      { icon: Globe2,   v: "80K+", l: "Followers" },
      { icon: BookOpen, v: "2",    l: "Books"     },
    ],
    roles: [
      "Co-Founder — Star X",
      "Sr. Sales Executive — MIS Real Estate",
      "Writer — 2 Published Books",
      "Public Speaker",
      "Punjab Speech Competition Topper",
      "Qasim Ali Shah Foundation Interview",
    ],
    quote: "My mission is to empower people with practical knowledge in content creation, entrepreneurship, AI, and digital business.",
  },
  {
    name: "Iftikhar-UL-Hassan",
    role: "Co-Founder & Director",
    img: "/images/team/iftikhar.jpg",
    caption: "Co-Founder & Director | YouTube Automation Expert | AI & Digital Marketing Strategist | Top Rated Freelancer",
    bio: [
      "With 8+ years of industry experience and 5+ years of dedicated teaching, Iftikhar-UL-Hassan is the driving force behind AIT's most practical, result-oriented training programs.",
      "As a Top Rated Freelancer, he has trained 2,000+ students through online and in-person programs, specialising in YouTube Automation, AI Tools, Content Creation, Social Media Management, Personal Branding, Digital Marketing, E-Commerce, and Freelancing.",
    ],
    stats: [
      { icon: Youtube, v: "2K+", l: "Students"   },
      { icon: Brain,   v: "8+",  l: "Yrs Exp."   },
      { icon: Star,    v: "Top", l: "Freelancer"  },
    ],
    roles: [
      "YouTube Automation Expert",
      "AI & Digital Marketing Strategist",
      "Content Creator & Social Media Manager",
      "Personal Branding Specialist",
      "E-Commerce Specialist",
      "Top Rated Freelancer",
    ],
    quote: "I believe in empowering people with practical digital skills that create real, sustainable income — not just theory.",
  },
  {
    name: "M. Gulzar",
    role: "Founder & Director",
    img: "/images/team/gulzar.jpg",
    caption: "Founder & Director | AIT Digital Solutions | Director at Thcommerce Company | Business Operations & Networking Expert",
    bio: [
      "M. Gulzar is a seasoned business operations and networking expert with extensive experience managing multiple physical businesses across different industries.",
      "As the Founder & Director of AIT and Director at Thcommerce Company, his expertise in strategic planning, team leadership, and building long-term partnerships forms the operational backbone of AIT — ensuring consistent, world-class quality.",
    ],
    stats: [
      { icon: Award,  v: "8+",  l: "Businesses" },
      { icon: Globe2, v: "10+", l: "Years Exp." },
    ],
    roles: [
      "Founder — AIT Digital Solutions",
      "Director — Thcommerce Company",
      "Business Operations Expert",
      "Business Development Strategist",
      "Team Leadership & Management",
      "Entrepreneur & Networking Expert",
    ],
    quote: "My mission is to help individuals and businesses achieve long-term success by combining practical business experience, effective networking, and modern digital strategies.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 section-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern-light opacity-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[50%] h-[60%] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 10%, #FFF8DC 0%, transparent 65%)" }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="section-badge mb-6 inline-flex">About AIT Digital Solutions</span>
            <h1 className="font-heading font-black text-ink text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
              We Are Pakistan&apos;s<br />
              <span className="gold-text">Digital Growth Engine</span>
            </h1>
            <p className="text-ink-muted text-base sm:text-xl leading-relaxed mb-8">
              Founded in Gujranwala, Punjab — AIT Digital Solutions is on a mission to democratize
              digital education and empower the next generation of creators, entrepreneurs, and
              business leaders across Pakistan and beyond.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact" className="btn-gold px-8 py-3.5 rounded-full text-sm font-bold inline-flex items-center gap-2 shadow-gold">
                Work With Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/courses" className="btn-outline px-8 py-3.5 rounded-full text-sm font-bold">
                Our Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Target, title: "Our Mission", color: "#F5B400", text: "To empower individuals and businesses with practical digital skills, AI-driven tools, and results-oriented services that create real, measurable income and growth." },
              { icon: Eye,    title: "Our Vision",  color: "#111111", text: "To become Pakistan's most impactful digital ecosystem — where every ambitious person, regardless of background, can access world-class digital education and services." },
              { icon: Heart,  title: "Our Values",  color: "#D4A000", text: "Integrity, innovation, and impact. We believe in honest education, cutting-edge methods, and measuring our success by the transformations we create in students' lives." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-white p-8 text-center">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: `${item.color}15`, border: `1.5px solid ${item.color}30` }}>
                    <Icon className="w-6 h-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-heading font-bold text-ink text-lg mb-3">{item.title}</h3>
                  <p className="text-ink-muted text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founders — 3 people */}
      <section className="section-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="section-badge mb-5 inline-flex">Our Founders</span>
            <h2 className="font-heading font-black text-ink text-3xl sm:text-4xl md:text-5xl mb-4">
              The Minds Behind <span className="gold-text">AIT</span>
            </h2>
            <p className="text-ink-muted text-lg max-w-xl mx-auto">
              Three experienced entrepreneurs and educators building Pakistan&apos;s digital future — one student at a time.
            </p>
            <div className="gold-divider mx-auto mt-6" />
          </div>

          <div className="space-y-24">
            {founders.map((f, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={f.name}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>

                  {/* Photo Card */}
                  <div className={`${!isEven ? "lg:order-2" : ""}`}>
                    <div className="relative rounded-3xl overflow-hidden shadow-premium" style={{ minHeight: "min(460px, 60vw)" }}>
                      <Image
                        src={f.img}
                        alt={`${f.name} — ${f.role}, AIT Digital Solutions`}
                        fill
                        className="object-cover object-top"
                      />
                      {/* Bottom gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                      {/* Name badge */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="h-0.5 w-12 bg-gold mb-3" />
                        <h3 className="font-heading font-black text-white text-2xl leading-tight">{f.name}</h3>
                        <p className="text-gold font-semibold text-sm mt-1">{f.role}</p>
                        {/* Stats row */}
                        <div className="flex gap-3 mt-4">
                          {f.stats.map((s) => {
                            const Icon = s.icon;
                            return (
                              <div key={s.l} className="flex items-center gap-1.5 bg-black/50 backdrop-blur-sm border border-gold/20 rounded-xl px-3 py-2">
                                <Icon className="w-3.5 h-3.5 text-gold" />
                                <span className="font-heading font-black text-gold text-sm">{s.v}</span>
                                <span className="text-gray-400 text-[10px] uppercase">{s.l}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${!isEven ? "lg:order-1" : ""}`}>
                    <span className="section-badge mb-4 inline-flex">{f.role}</span>
                    <h2 className="font-heading font-black text-ink text-3xl md:text-4xl mb-2">{f.name}</h2>
                    <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-5 leading-relaxed">{f.caption}</p>

                    {f.bio.map((para, pi) => (
                      <p key={pi} className="text-ink-muted leading-relaxed mb-4 text-[15px]">{para}</p>
                    ))}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-6">
                      {f.roles.map((r) => (
                        <div key={r} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                          <span className="text-xs text-ink-muted">{r}</span>
                        </div>
                      ))}
                    </div>

                    <blockquote className="border-l-2 border-gold pl-4">
                      <p className="text-ink font-semibold italic text-sm leading-relaxed">
                        &ldquo;{f.quote}&rdquo;
                      </p>
                      <cite className="block text-ink-soft text-xs font-normal mt-2 not-italic">— {f.name}</cite>
                    </blockquote>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="section-badge mb-5 inline-flex">Our Values</span>
            <h2 className="font-heading font-black text-ink text-3xl sm:text-4xl md:text-5xl mb-4">
              What Drives Us <span className="gold-text">Forward</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Target,    title: "Mission-Driven",  desc: "Every course and service is built around one goal: your measurable success." },
              { icon: Lightbulb, title: "Innovation First", desc: "We integrate cutting-edge AI tools and strategies before they become mainstream." },
              { icon: Heart,     title: "Student-Centric", desc: "Your growth is our growth. We measure success by your results, not our revenue." },
              { icon: Globe2,    title: "Pakistan-Proud",  desc: "Built in Gujranwala, serving Pakistan — but our students compete globally." },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="card-white p-6 text-center group">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="font-heading font-bold text-ink text-sm mb-2">{v.title}</h4>
                  <p className="text-ink-soft text-xs leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="section-badge mb-5 inline-flex"><Award className="w-3 h-3" /> Our Journey</span>
            <h2 className="font-heading font-black text-ink text-3xl sm:text-4xl md:text-5xl mb-4">
              From Vision to <span className="gold-text">Reality</span>
            </h2>
          </div>
          <div className="relative space-y-6">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/50 to-transparent" />
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-6 pl-4">
                <div className="w-8 h-8 rounded-full border-2 border-gold bg-gold/10 flex items-center justify-center shrink-0 relative z-10">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>
                <div className="card-white p-4 flex-1">
                  <span className="text-xs font-bold text-gold tracking-widest">{m.year}</span>
                  <p className="text-ink font-semibold text-sm mt-0.5">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users,    v: "25,000+", l: "Students Trained"      },
              { icon: Globe2,   v: "80,000+", l: "Social Followers"      },
              { icon: BookOpen, v: "2",        l: "Published Books"      },
              { icon: Award,    v: "100%",     l: "Commitment to Growth" },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.l}>
                  <Icon className="w-6 h-6 text-gold mx-auto mb-3" />
                  <div className="font-heading font-black text-4xl gold-text mb-1">{s.v}</div>
                  <div className="text-gray-500 text-xs uppercase tracking-wide">{s.l}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-heading font-black text-ink text-3xl md:text-4xl mb-5">
            Ready to Join the <span className="gold-text">AIT Ecosystem?</span>
          </h2>
          <p className="text-ink-muted mb-8">
            Whether you want to learn digital skills or need professional digital services, we&apos;re here to help you grow.
          </p>
          <Link href="/contact"
            className="btn-gold px-10 py-4 rounded-full text-base font-bold inline-flex items-center gap-2 shadow-gold">
            Get Started Today <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
