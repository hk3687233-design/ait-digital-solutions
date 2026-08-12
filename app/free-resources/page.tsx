"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Gift, Wrench, MessageSquare, BookOpen, Copy, Check,
  ExternalLink, Sparkles, ArrowRight, Search, Filter
} from "lucide-react";

interface Tool       { id: string; name: string; description: string; category: string; url: string; badge: string; icon: string; }
interface Prompt     { id: string; title: string; category: string; usage: string; prompt: string; }
interface Resource   { id: string; title: string; description: string; category: string; url: string; type: string; }
interface FreeData   { tools: Tool[]; prompts: Prompt[]; resources: Resource[]; }

const TABS = [
  { id: "tools",     label: "Free AI Tools",        icon: Wrench },
  { id: "prompts",   label: "Prompt Templates",      icon: MessageSquare },
  { id: "resources", label: "Free Resources",        icon: BookOpen },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy}
      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-gold/30 text-gold hover:bg-gold/10 transition-all duration-200">
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? "Copied!" : "Copy Prompt"}
    </button>
  );
}

export default function FreeResourcesPage() {
  const [activeTab,  setActiveTab]  = useState("tools");
  const [search,     setSearch]     = useState("");
  const [filter,     setFilter]     = useState("All");
  const [data,       setData]       = useState<FreeData>({ tools: [], prompts: [], resources: [] });
  const [loading,    setLoading]    = useState(true);

  useEffect(() => {
    fetch("/api/admin")
      .then(r => r.json())
      .then(d => { setData(d.freeResources ?? { tools: [], prompts: [], resources: [] }); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const tools     = data.tools.filter(t =>
    (filter === "All" || t.category === filter) &&
    (t.name.toLowerCase().includes(search.toLowerCase()) || t.description.toLowerCase().includes(search.toLowerCase()))
  );
  const prompts   = data.prompts.filter(p =>
    (filter === "All" || p.category === filter) &&
    (p.title.toLowerCase().includes(search.toLowerCase()) || p.prompt.toLowerCase().includes(search.toLowerCase()))
  );
  const resources = data.resources.filter(r =>
    (filter === "All" || r.category === filter) &&
    (r.title.toLowerCase().includes(search.toLowerCase()) || r.description.toLowerCase().includes(search.toLowerCase()))
  );

  const toolCategories     = ["All", ...Array.from(new Set(data.tools.map(t => t.category)))];
  const promptCategories   = ["All", ...Array.from(new Set(data.prompts.map(p => p.category)))];
  const resourceCategories = ["All", ...Array.from(new Set(data.resources.map(r => r.category)))];
  const currentCategories  = activeTab === "tools" ? toolCategories : activeTab === "prompts" ? promptCategories : resourceCategories;

  return (
    <div className="pt-28 pb-24 bg-white min-h-screen">

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-14">
        <span className="section-badge mb-5 inline-flex">
          <Gift className="w-3 h-3 text-gold" /> 100% Free — No Sign Up Required
        </span>
        <h1 className="font-heading font-black text-ink text-4xl sm:text-5xl md:text-6xl leading-tight mb-5">
          Free <span className="gold-text">Resources</span><br />
          For Digital Creators
        </h1>
        <p className="text-ink-muted text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Hand-picked free AI tools, copy-paste prompt templates, and learning resources
          curated by AIT Digital Solutions to help you grow faster — no cost, no strings attached.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-ink-soft">
          {[`${data.tools.length}+ Free Tools`, `${data.prompts.length}+ Prompt Templates`, `${data.resources.length}+ Resources`].map(s => (
            <span key={s} className="flex items-center gap-2 bg-surface-50 border border-surface-200 rounded-full px-4 py-2">
              <Sparkles className="w-3.5 h-3.5 text-gold" /> {s}
            </span>
          ))}
        </div>
        <div className="gold-divider mx-auto mt-8" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-surface-50 border border-surface-200 rounded-2xl w-fit mx-auto">
          {TABS.map(tab => {
            const Icon = tab.icon;
            return (
              <button key={tab.id} onClick={() => { setActiveTab(tab.id); setFilter("All"); setSearch(""); }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white shadow-card text-ink border border-surface-200"
                    : "text-ink-soft hover:text-ink"
                }`}>
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft" />
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder={`Search ${activeTab}...`}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-surface-200 bg-white text-sm text-ink focus:outline-none focus:border-gold/50 focus:ring-2 focus:ring-gold/10 transition-all"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft pointer-events-none" />
            <select value={filter} onChange={e => setFilter(e.target.value)}
              className="pl-10 pr-8 py-3 rounded-xl border border-surface-200 bg-white text-sm text-ink focus:outline-none focus:border-gold/50 appearance-none cursor-pointer min-w-[160px]">
              {currentCategories.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-24 text-ink-soft">Loading resources...</div>
        ) : (
          <>
            {/* TOOLS TAB */}
            {activeTab === "tools" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {tools.map(tool => (
                  <a key={tool.id} href={tool.url} target="_blank" rel="noopener noreferrer"
                    className="card-white p-5 group hover:border-gold/30 hover:shadow-gold transition-all duration-300 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{tool.icon}</span>
                      <span className="text-[10px] font-bold bg-gold/10 text-gold border border-gold/20 rounded-full px-2.5 py-0.5 tracking-wide uppercase">
                        {tool.badge}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-ink text-base mb-1 group-hover:text-gold transition-colors">{tool.name}</h3>
                    <span className="text-[10px] text-ink-soft uppercase tracking-widest mb-2">{tool.category}</span>
                    <p className="text-sm text-ink-muted leading-relaxed flex-1">{tool.description}</p>
                    <div className="flex items-center gap-1.5 mt-4 text-xs font-semibold text-gold">
                      Open Tool <ExternalLink className="w-3 h-3" />
                    </div>
                  </a>
                ))}
                {tools.length === 0 && <p className="col-span-3 text-center py-12 text-ink-soft">No tools match your search.</p>}
              </div>
            )}

            {/* PROMPTS TAB */}
            {activeTab === "prompts" && (
              <div className="space-y-5">
                {prompts.map(prompt => (
                  <div key={prompt.id} className="card-white p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <span className="text-[10px] font-bold bg-surface-100 text-ink-soft rounded-full px-2.5 py-0.5 uppercase tracking-widest">{prompt.category}</span>
                        <h3 className="font-heading font-bold text-ink text-lg mt-1">{prompt.title}</h3>
                        <p className="text-xs text-ink-soft mt-0.5">{prompt.usage}</p>
                      </div>
                      <CopyButton text={prompt.prompt} />
                    </div>
                    <div className="bg-surface-50 border border-surface-200 rounded-xl p-4 mt-3">
                      <pre className="text-xs text-ink-muted leading-relaxed whitespace-pre-wrap font-sans">{prompt.prompt}</pre>
                    </div>
                  </div>
                ))}
                {prompts.length === 0 && <p className="text-center py-12 text-ink-soft">No prompts match your search.</p>}
              </div>
            )}

            {/* RESOURCES TAB */}
            {activeTab === "resources" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {resources.map(res => (
                  <a key={res.id} href={res.url} target="_blank" rel="noopener noreferrer"
                    className="card-white p-5 group hover:border-gold/30 hover:shadow-gold transition-all duration-300 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <BookOpen className="w-4.5 h-4.5 text-gold" style={{ width: 18, height: 18 }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-heading font-bold text-ink text-sm group-hover:text-gold transition-colors leading-snug">{res.title}</h3>
                        <span className="text-[9px] font-bold bg-surface-100 text-ink-soft rounded-full px-2 py-0.5 uppercase tracking-wide shrink-0">{res.type}</span>
                      </div>
                      <span className="text-[10px] text-ink-soft uppercase tracking-widest">{res.category}</span>
                      <p className="text-xs text-ink-muted leading-relaxed mt-1">{res.description}</p>
                    </div>
                  </a>
                ))}
                {resources.length === 0 && <p className="col-span-2 text-center py-12 text-ink-soft">No resources match your search.</p>}
              </div>
            )}
          </>
        )}

        {/* CTA */}
        <div className="mt-16 bg-ink rounded-3xl p-6 sm:p-10 text-center">
          <h2 className="font-heading font-black text-white text-2xl md:text-3xl mb-3">
            Ready to Take It Further?
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto mb-7">
            These free resources are just the beginning. Join AIT Digital Solutions and get
            structured training, live mentorship, and a community of 25,000+ learners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/courses" className="btn-gold px-8 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2 shadow-gold">
              Explore Our Courses <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/923166768001" target="_blank" rel="noopener noreferrer"
              className="btn-outline-gold px-8 py-3.5 rounded-full font-bold text-sm inline-flex items-center gap-2">
              WhatsApp Us Free
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
