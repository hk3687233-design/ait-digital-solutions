"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  LayoutDashboard, Gift, Star, HelpCircle, Settings, LogOut,
  Plus, Trash2, Edit2, Save, X, Check, AlertCircle,
  MessageSquare, Wrench, BookOpen, Eye, Globe, Phone, RefreshCw,
  Facebook, Youtube, Instagram, Lock, Shield, GraduationCap, Briefcase,
} from "lucide-react";

const PASS = "admin123@";

// ─── Types ────────────────────────────────────────────────────────────────────
interface FAQ        { id: string; q: string; a: string }
interface Testimonial{ id: string; name: string; role: string; rating: number; text: string; initial: string }
interface Tool       { id: string; name: string; description: string; category: string; url: string; badge: string; icon: string }
interface Prompt     { id: string; title: string; category: string; usage: string; prompt: string }
interface Resource   { id: string; title: string; description: string; category: string; url: string; type: string }
interface FreeRes    { tools: Tool[]; prompts: Prompt[]; resources: Resource[] }
interface SiteConfig { company: { name: string; tagline: string; description: string; address: string }; contact: { phone: string; whatsapp: string; email: string; website: string }; social: { facebook: string; youtube: string; instagram: string; tiktok: string } }
interface Course     { id: string; title: string; level: string; duration: string; rating: number; students: string; price: string; badge: string; color: string; iconName: string; outcome: string; includes: string[] }
interface Service    { id: string; title: string; tagline: string; color: string; iconName: string; desc: string; features: string[]; price: string; type: string }
interface AllData    { faq: FAQ[]; testimonials: Testimonial[]; freeResources: FreeRes; siteConfig: SiteConfig; courses: Course[]; services: Service[] }

const uid = () => Math.random().toString(36).slice(2, 9);
const DEFAULT_DATA: AllData = {
  faq: [], testimonials: [],
  freeResources: { tools: [], prompts: [], resources: [] },
  siteConfig: { company: { name: "", tagline: "", description: "", address: "" }, contact: { phone: "", whatsapp: "", email: "", website: "" }, social: { facebook: "", youtube: "", instagram: "", tiktok: "" } },
  courses: [], services: [],
};

// ─── Toast ────────────────────────────────────────────────────────────────────
function Toast({ msg, type, onClose }: { msg: string; type: "success" | "error"; onClose: () => void }) {
  useEffect(() => { const t = setTimeout(onClose, 3000); return () => clearTimeout(t); }, [onClose]);
  return (
    <div className={`fixed bottom-6 right-6 z-[10000] flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-xl text-sm font-semibold animate-slide-up ${type === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white"}`}>
      {type === "success" ? <Check className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
      {msg}
    </div>
  );
}

// ─── Nav Item ─────────────────────────────────────────────────────────────────
function NavItem({ icon: Icon, label, active, onClick, badge }: { icon: React.ElementType; label: string; active: boolean; onClick: () => void; badge?: number }) {
  return (
    <button onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group ${active ? "bg-gold text-ink shadow-gold" : "text-gray-400 hover:bg-white/5 hover:text-white"}`}>
      <Icon className="w-4 h-4 shrink-0" />
      <span className="flex-1 text-left">{label}</span>
      {badge !== undefined && badge > 0 && (
        <span className={`text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center ${active ? "bg-ink/20 text-ink" : "bg-white/10 text-white"}`}>{badge}</span>
      )}
    </button>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
function SectionHeader({ title, desc, onSave, saving }: { title: string; desc: string; onSave: () => void; saving: boolean }) {
  return (
    <div className="flex items-start justify-between mb-8 pb-6 border-b border-surface-200">
      <div>
        <h2 className="font-heading font-black text-ink text-2xl">{title}</h2>
        <p className="text-ink-soft text-sm mt-1">{desc}</p>
      </div>
      <button onClick={onSave} disabled={saving}
        className="btn-gold px-6 py-2.5 rounded-xl font-bold text-sm inline-flex items-center gap-2 shadow-gold disabled:opacity-60 disabled:cursor-not-allowed">
        {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
        {saving ? "Saving…" : "Save Changes"}
      </button>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AdminPage() {
  const [authed,  setAuthed]  = useState(false);
  const [pass,    setPass]    = useState("");
  const [passErr, setPassErr] = useState(false);
  const [section, setSection] = useState("dashboard");
  const [data,    setData]    = useState<AllData>(DEFAULT_DATA);
  const [saving,  setSaving]  = useState(false);
  const [toast,   setToast]   = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const [loading, setLoading] = useState(true);

  // Check session
  useEffect(() => {
    if (sessionStorage.getItem("ait_admin") === "1") {
      setAuthed(true);
      loadData();
    } else {
      setLoading(false);
    }
  }, []);

  const loadData = useCallback(() => {
    setLoading(true);
    fetch("/api/admin")
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const login = () => {
    if (pass === PASS) {
      sessionStorage.setItem("ait_admin", "1");
      setAuthed(true);
      loadData();
    } else {
      setPassErr(true);
      setTimeout(() => setPassErr(false), 2000);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("ait_admin");
    setAuthed(false);
    setPass("");
  };

  const save = async (sec: string, payload: unknown) => {
    setSaving(true);
    try {
      const r = await fetch("/api/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${PASS}` },
        body: JSON.stringify({ section: sec, data: payload }),
      });
      if (r.ok) setToast({ msg: "Saved successfully!", type: "success" });
      else setToast({ msg: "Save failed. Check connection.", type: "error" });
    } catch {
      setToast({ msg: "Network error. Try again.", type: "error" });
    } finally {
      setSaving(false);
    }
  };

  // ── Login Screen ────────────────────────────────────────────────────────────
  if (!authed) {
    return (
      <div className="fixed inset-0 z-[9999] bg-ink flex items-center justify-center">
        <div className="absolute inset-0 grid-pattern-dark opacity-30 pointer-events-none" />
        <div className="relative z-10 w-full max-w-sm mx-4">
          <div className="text-center mb-8">
            <div className="relative w-16 h-16 mx-auto mb-4">
              <Image src="/images/logo.png" alt="AIT" fill className="object-contain rounded-full" />
            </div>
            <h1 className="font-heading font-black text-white text-2xl">Admin Panel</h1>
            <p className="text-gray-500 text-sm mt-1">AIT Digital Solutions</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-5 p-3 bg-gold/10 border border-gold/20 rounded-xl">
              <Shield className="w-4 h-4 text-gold shrink-0" />
              <span className="text-xs text-gold">Secured with password protection</span>
            </div>
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Password</label>
            <div className="relative mb-4">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="password" value={pass}
                onChange={e => setPass(e.target.value)}
                onKeyDown={e => e.key === "Enter" && login()}
                placeholder="Enter admin password"
                className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/10 border text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gold/50 transition-all ${passErr ? "border-red-500 animate-shake" : "border-white/10"}`}
              />
            </div>
            {passErr && <p className="text-red-400 text-xs mb-3 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> Incorrect password.</p>}
            <button onClick={login}
              className="w-full btn-gold py-3 rounded-xl font-bold text-sm">
              Access Admin Panel
            </button>
          </div>
          <p className="text-center text-gray-700 text-xs mt-4">Access restricted to authorised personnel only.</p>
        </div>
      </div>
    );
  }

  // ── Main Panel ──────────────────────────────────────────────────────────────
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex overflow-hidden">

      {/* Sidebar */}
      <aside className="w-64 shrink-0 bg-ink h-full flex flex-col overflow-y-auto">
        <div className="p-5 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 shrink-0">
              <Image src="/images/logo.png" alt="AIT" fill className="object-contain rounded-full" />
            </div>
            <div>
              <p className="font-heading font-bold text-white text-sm leading-tight">AIT Admin</p>
              <p className="text-gray-600 text-[10px] uppercase tracking-widest">Control Panel</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          <p className="text-[9px] text-gray-700 uppercase tracking-[0.2em] font-bold px-4 py-2 mt-1">Main</p>
          <NavItem icon={LayoutDashboard} label="Dashboard"       active={section==="dashboard"}   onClick={() => setSection("dashboard")}  />
          <p className="text-[9px] text-gray-700 uppercase tracking-[0.2em] font-bold px-4 py-2 mt-3">Content</p>
          <NavItem icon={GraduationCap}  label="Courses"          active={section==="courses"}     onClick={() => setSection("courses")}    badge={data.courses.length} />
          <NavItem icon={Briefcase}      label="Services"         active={section==="services"}    onClick={() => setSection("services")}   badge={data.services.length} />
          <NavItem icon={Gift}           label="Free Resources"   active={section==="resources"}   onClick={() => setSection("resources")}  badge={data.freeResources.tools.length + data.freeResources.prompts.length} />
          <NavItem icon={Star}           label="Testimonials"     active={section==="testimonials"} onClick={() => setSection("testimonials")} badge={data.testimonials.length} />
          <NavItem icon={HelpCircle}     label="FAQ"              active={section==="faq"}         onClick={() => setSection("faq")}         badge={data.faq.length} />
          <p className="text-[9px] text-gray-700 uppercase tracking-[0.2em] font-bold px-4 py-2 mt-3">Config</p>
          <NavItem icon={Settings}       label="Site Settings"    active={section==="settings"}    onClick={() => setSection("settings")}   />
        </nav>

        <div className="p-3 border-t border-white/10 space-y-1">
          <a href="/" target="_blank" rel="noopener noreferrer"
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-500 hover:text-white hover:bg-white/5 transition-all duration-200">
            <Eye className="w-4 h-4" /> View Website
          </a>
          <button onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-gray-500 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200">
            <LogOut className="w-4 h-4" /> Sign Out
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-y-auto bg-surface-50">
        {loading ? (
          <div className="flex items-center justify-center h-full">
            <RefreshCw className="w-8 h-8 text-gold animate-spin" />
          </div>
        ) : (
          <div className="max-w-4xl mx-auto p-8">

            {/* Dashboard */}
            {section === "dashboard" && <DashboardSection data={data} onNavigate={setSection} />}

            {/* Courses */}
            {section === "courses" && (
              <CoursesSection
                items={data.courses}
                saving={saving}
                onSave={d => save("courses", d)}
                onChange={c => setData(p => ({ ...p, courses: c }))}
              />
            )}

            {/* Services */}
            {section === "services" && (
              <ServicesSection
                items={data.services}
                saving={saving}
                onSave={d => save("services", d)}
                onChange={s => setData(p => ({ ...p, services: s }))}
              />
            )}

            {/* Free Resources */}
            {section === "resources" && (
              <FreeResourcesSection
                data={data.freeResources}
                saving={saving}
                onSave={d => save("freeResources", d)}
                onChange={fr => setData(p => ({ ...p, freeResources: fr }))}
              />
            )}

            {/* Testimonials */}
            {section === "testimonials" && (
              <TestimonialsSection
                items={data.testimonials}
                saving={saving}
                onSave={d => save("testimonials", d)}
                onChange={t => setData(p => ({ ...p, testimonials: t }))}
              />
            )}

            {/* FAQ */}
            {section === "faq" && (
              <FAQSection
                items={data.faq}
                saving={saving}
                onSave={d => save("faq", d)}
                onChange={f => setData(p => ({ ...p, faq: f }))}
              />
            )}

            {/* Settings */}
            {section === "settings" && (
              <SettingsSection
                config={data.siteConfig}
                saving={saving}
                onSave={d => save("siteConfig", d)}
                onChange={c => setData(p => ({ ...p, siteConfig: c }))}
              />
            )}
          </div>
        )}
      </main>

      {toast && <Toast msg={toast.msg} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────
function DashboardSection({ data, onNavigate }: { data: AllData; onNavigate: (s: string) => void }) {
  const cards = [
    { label: "Courses",       value: data.courses.length,                  icon: GraduationCap, color: "from-indigo-500/10 to-indigo-500/5", border: "border-indigo-500/20", go: "courses"     },
    { label: "Services",      value: data.services.length,                 icon: Briefcase,    color: "from-orange-500/10 to-orange-500/5",border: "border-orange-500/20",go: "services"    },
    { label: "Free Tools",    value: data.freeResources.tools.length,      icon: Wrench,       color: "from-blue-500/10 to-blue-500/5",   border: "border-blue-500/20", go: "resources"    },
    { label: "Testimonials",  value: data.testimonials.length,             icon: Star,         color: "from-gold/10 to-gold/5",           border: "border-gold/20",     go: "testimonials" },
    { label: "FAQ Items",     value: data.faq.length,                      icon: HelpCircle,   color: "from-green-500/10 to-green-500/5", border: "border-green-500/20", go: "faq"         },
  ];
  return (
    <div>
      <div className="mb-8">
        <h2 className="font-heading font-black text-ink text-2xl">Welcome Back 👋</h2>
        <p className="text-ink-soft text-sm mt-1">AIT Digital Solutions Admin Panel — manage all website content from here.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
        {cards.map(c => {
          const Icon = c.icon;
          return (
            <button key={c.label} onClick={() => onNavigate(c.go)}
              className={`card-white p-5 text-left group hover:shadow-card transition-all duration-200 bg-gradient-to-br ${c.color} border ${c.border}`}>
              <Icon className="w-5 h-5 text-ink-soft mb-3 group-hover:text-gold transition-colors" />
              <div className="font-heading font-black text-ink text-3xl">{c.value}</div>
              <div className="text-xs text-ink-soft mt-0.5">{c.label}</div>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {[
          { title: "🎓 Courses",        desc: "Add, edit or remove courses — price, duration, includes, badge, outcome.",           go: "courses"     },
          { title: "💼 Services",       desc: "Manage all services — title, tagline, features, pricing, and type.",                 go: "services"    },
          { title: "🎁 Free Resources", desc: "Add or edit free tools, prompt templates, and learning resources.",                  go: "resources"   },
          { title: "⭐ Testimonials",   desc: "Manage student success stories shown on the home page.",                             go: "testimonials" },
          { title: "❓ FAQ",            desc: "Update frequently asked questions and answers.",                                      go: "faq"         },
          { title: "⚙️ Site Settings",  desc: "Update company info, contact details, and social media links.",                      go: "settings"    },
        ].map(item => (
          <button key={item.title} onClick={() => onNavigate(item.go)}
            className="card-white p-5 text-left group hover:border-gold/30 hover:shadow-gold transition-all duration-200">
            <h3 className="font-heading font-semibold text-ink text-sm mb-1 group-hover:text-gold transition-colors">{item.title}</h3>
            <p className="text-xs text-ink-soft leading-relaxed">{item.desc}</p>
          </button>
        ))}
      </div>

      <div className="mt-8 p-5 bg-gold/5 border border-gold/20 rounded-2xl">
        <p className="text-sm text-ink-muted leading-relaxed">
          <strong className="text-ink">💡 Tip:</strong> Changes you save here reflect instantly on the live website.
          Visit <a href="/free-resources" target="_blank" className="text-gold underline">/free-resources</a> or{" "}
          <a href="/" target="_blank" className="text-gold underline">the homepage</a> to preview after saving.
        </p>
      </div>
    </div>
  );
}

// ─── FAQ Section ──────────────────────────────────────────────────────────────
function FAQSection({ items, saving, onSave, onChange }: { items: FAQ[]; saving: boolean; onSave: (d: FAQ[]) => void; onChange: (d: FAQ[]) => void }) {
  const [editing, setEditing] = useState<string | null>(null);
  const [draft,   setDraft]   = useState<FAQ>({ id: "", q: "", a: "" });

  const startEdit = (item: FAQ) => { setEditing(item.id); setDraft({ ...item }); };
  const startNew  = () => { const n: FAQ = { id: uid(), q: "", a: "" }; setEditing("_new"); setDraft(n); };
  const cancelEdit = () => { setEditing(null); };

  const commitEdit = () => {
    if (!draft.q.trim() || !draft.a.trim()) return;
    if (editing === "_new") {
      onChange([...items, draft]);
    } else {
      onChange(items.map(f => f.id === editing ? draft : f));
    }
    setEditing(null);
  };

  const remove = (id: string) => onChange(items.filter(f => f.id !== id));

  return (
    <div>
      <SectionHeader title="FAQ Manager" desc={`${items.length} questions — edit, reorder, or add new.`} onSave={() => onSave(items)} saving={saving} />

      <div className="space-y-3 mb-6">
        {items.map((faq, i) => (
          <div key={faq.id} className={`card-white overflow-hidden ${editing === faq.id ? "border-gold/40" : ""}`}>
            {editing === faq.id ? (
              <div className="p-5 space-y-3">
                <input value={draft.q} onChange={e => setDraft(p => ({ ...p, q: e.target.value }))}
                  placeholder="Question"
                  className="w-full border border-surface-200 rounded-xl px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold/50" />
                <textarea value={draft.a} onChange={e => setDraft(p => ({ ...p, a: e.target.value }))}
                  placeholder="Answer" rows={4}
                  className="w-full border border-surface-200 rounded-xl px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold/50 resize-none" />
                <div className="flex gap-2">
                  <button onClick={commitEdit} className="btn-gold px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Save</button>
                  <button onClick={cancelEdit} className="px-4 py-2 rounded-lg text-xs font-semibold border border-surface-200 text-ink-soft hover:text-ink transition-colors flex items-center gap-1.5"><X className="w-3.5 h-3.5" /> Cancel</button>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-4 p-5">
                <span className="text-xs font-black text-gold bg-gold/10 rounded-lg w-7 h-7 flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ink text-sm mb-1">{faq.q}</p>
                  <p className="text-xs text-ink-muted leading-relaxed line-clamp-2">{faq.a}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => startEdit(faq)} className="p-2 rounded-lg text-ink-soft hover:text-gold hover:bg-gold/10 transition-all"><Edit2 className="w-3.5 h-3.5" /></button>
                  <button onClick={() => remove(faq.id)} className="p-2 rounded-lg text-ink-soft hover:text-red-500 hover:bg-red-50 transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {editing === "_new" ? (
        <div className="card-white p-5 space-y-3 border-gold/40">
          <p className="text-xs font-bold text-gold uppercase tracking-widest">New Question</p>
          <input value={draft.q} onChange={e => setDraft(p => ({ ...p, q: e.target.value }))}
            placeholder="Question"
            className="w-full border border-surface-200 rounded-xl px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold/50" />
          <textarea value={draft.a} onChange={e => setDraft(p => ({ ...p, a: e.target.value }))}
            placeholder="Answer" rows={4}
            className="w-full border border-surface-200 rounded-xl px-4 py-2.5 text-sm text-ink focus:outline-none focus:border-gold/50 resize-none" />
          <div className="flex gap-2">
            <button onClick={commitEdit} className="btn-gold px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Add Question</button>
            <button onClick={cancelEdit} className="px-4 py-2 rounded-lg text-xs font-semibold border border-surface-200 text-ink-soft hover:text-ink transition-colors flex items-center gap-1.5"><X className="w-3.5 h-3.5" /> Cancel</button>
          </div>
        </div>
      ) : (
        <button onClick={startNew} className="w-full border-2 border-dashed border-surface-300 rounded-2xl py-4 text-sm text-ink-soft hover:border-gold/40 hover:text-gold transition-all flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" /> Add New Question
        </button>
      )}
    </div>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────
function TestimonialsSection({ items, saving, onSave, onChange }: { items: Testimonial[]; saving: boolean; onSave: (d: Testimonial[]) => void; onChange: (d: Testimonial[]) => void }) {
  const [editing, setEditing] = useState<string | null>(null);
  const [draft,   setDraft]   = useState<Testimonial>({ id: "", name: "", role: "", rating: 5, text: "", initial: "" });

  const blank = (): Testimonial => ({ id: uid(), name: "", role: "", rating: 5, text: "", initial: "" });
  const startEdit = (item: Testimonial) => { setEditing(item.id); setDraft({ ...item }); };
  const startNew  = () => { setEditing("_new"); setDraft(blank()); };
  const cancelEdit = () => setEditing(null);

  const commitEdit = () => {
    if (!draft.name.trim() || !draft.text.trim()) return;
    const d = { ...draft, initial: draft.name.charAt(0).toUpperCase() };
    if (editing === "_new") onChange([...items, d]);
    else onChange(items.map(t => t.id === editing ? d : t));
    setEditing(null);
  };

  const remove = (id: string) => onChange(items.filter(t => t.id !== id));

  return (
    <div>
      <SectionHeader title="Testimonials" desc={`${items.length} student reviews shown on the home page.`} onSave={() => onSave(items)} saving={saving} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {items.map(t => (
          <div key={t.id} className={`card-white p-5 ${editing === t.id ? "border-gold/40" : ""}`}>
            {editing === t.id ? (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <input value={draft.name} onChange={e => setDraft(p => ({ ...p, name: e.target.value }))} placeholder="Name"
                    className="border border-surface-200 rounded-xl px-3 py-2 text-sm text-ink focus:outline-none focus:border-gold/50" />
                  <select value={draft.rating} onChange={e => setDraft(p => ({ ...p, rating: +e.target.value }))}
                    className="border border-surface-200 rounded-xl px-3 py-2 text-sm text-ink focus:outline-none focus:border-gold/50">
                    {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Stars</option>)}
                  </select>
                </div>
                <input value={draft.role} onChange={e => setDraft(p => ({ ...p, role: e.target.value }))} placeholder="Role — City"
                  className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm text-ink focus:outline-none focus:border-gold/50" />
                <textarea value={draft.text} onChange={e => setDraft(p => ({ ...p, text: e.target.value }))} rows={3} placeholder="Review text"
                  className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm text-ink focus:outline-none focus:border-gold/50 resize-none" />
                <div className="flex gap-2">
                  <button onClick={commitEdit} className="btn-gold px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Save</button>
                  <button onClick={cancelEdit} className="px-4 py-2 rounded-lg text-xs font-semibold border border-surface-200 text-ink-soft hover:text-ink transition-colors flex items-center gap-1.5"><X className="w-3.5 h-3.5" /> Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center font-black text-gold text-sm">{t.initial}</div>
                    <div>
                      <p className="font-semibold text-ink text-sm">{t.name}</p>
                      <p className="text-xs text-ink-soft">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <button onClick={() => startEdit(t)} className="p-1.5 rounded-lg text-ink-soft hover:text-gold hover:bg-gold/10 transition-all"><Edit2 className="w-3.5 h-3.5" /></button>
                    <button onClick={() => remove(t.id)} className="p-1.5 rounded-lg text-ink-soft hover:text-red-500 hover:bg-red-50 transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </div>
                <p className="text-xs text-ink-muted leading-relaxed line-clamp-3">&ldquo;{t.text}&rdquo;</p>
                <div className="flex gap-0.5 mt-2">{Array.from({length: t.rating}).map((_,i) => <span key={i} className="text-gold text-xs">★</span>)}</div>
              </>
            )}
          </div>
        ))}
      </div>

      {editing === "_new" ? (
        <div className="card-white p-5 space-y-3 border-gold/40">
          <p className="text-xs font-bold text-gold uppercase tracking-widest">New Testimonial</p>
          <div className="grid grid-cols-2 gap-2">
            <input value={draft.name} onChange={e => setDraft(p => ({ ...p, name: e.target.value }))} placeholder="Student Name"
              className="border border-surface-200 rounded-xl px-3 py-2 text-sm text-ink focus:outline-none focus:border-gold/50" />
            <select value={draft.rating} onChange={e => setDraft(p => ({ ...p, rating: +e.target.value }))}
              className="border border-surface-200 rounded-xl px-3 py-2 text-sm text-ink focus:outline-none">
              {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} Stars</option>)}
            </select>
          </div>
          <input value={draft.role} onChange={e => setDraft(p => ({ ...p, role: e.target.value }))} placeholder="Role — City (e.g. Freelancer — Lahore)"
            className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm text-ink focus:outline-none focus:border-gold/50" />
          <textarea value={draft.text} onChange={e => setDraft(p => ({ ...p, text: e.target.value }))} rows={3} placeholder="Student review text"
            className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm text-ink focus:outline-none focus:border-gold/50 resize-none" />
          <div className="flex gap-2">
            <button onClick={commitEdit} className="btn-gold px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Add Testimonial</button>
            <button onClick={cancelEdit} className="px-4 py-2 rounded-lg text-xs font-semibold border border-surface-200 text-ink-soft hover:text-ink transition-colors flex items-center gap-1.5"><X className="w-3.5 h-3.5" /> Cancel</button>
          </div>
        </div>
      ) : (
        <button onClick={startNew} className="w-full border-2 border-dashed border-surface-300 rounded-2xl py-4 text-sm text-ink-soft hover:border-gold/40 hover:text-gold transition-all flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" /> Add New Testimonial
        </button>
      )}
    </div>
  );
}

// ─── Free Resources Section ───────────────────────────────────────────────────
function FreeResourcesSection({ data, saving, onSave, onChange }: { data: FreeRes; saving: boolean; onSave: (d: FreeRes) => void; onChange: (d: FreeRes) => void }) {
  const [tab, setTab] = useState<"tools"|"prompts"|"resources">("tools");
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState<Tool | Prompt | Resource | null>(null);

  const blankTool     = (): Tool     => ({ id: uid(), name: "", description: "", category: "", url: "", badge: "Free", icon: "🔧" });
  const blankPrompt   = (): Prompt   => ({ id: uid(), title: "", category: "", usage: "", prompt: "" });
  const blankResource = (): Resource => ({ id: uid(), title: "", description: "", category: "", url: "", type: "Tool" });

  const startNew = () => {
    const b = tab === "tools" ? blankTool() : tab === "prompts" ? blankPrompt() : blankResource();
    setEditing("_new"); setDraft(b);
  };
  const cancelEdit = () => { setEditing(null); setDraft(null); };

  const commitEdit = () => {
    if (!draft) return;
    const update = (list: unknown[], item: unknown, id: string | null) =>
      id === "_new" ? [...list, item] : list.map((x: unknown) => (x as {id:string}).id === id ? item : x);
    if (tab === "tools")     onChange({ ...data, tools:     update(data.tools,     draft as Tool,     editing) as Tool[] });
    if (tab === "prompts")   onChange({ ...data, prompts:   update(data.prompts,   draft as Prompt,   editing) as Prompt[] });
    if (tab === "resources") onChange({ ...data, resources: update(data.resources, draft as Resource, editing) as Resource[] });
    setEditing(null); setDraft(null);
  };

  const startEdit = (item: Tool | Prompt | Resource) => { setEditing(item.id); setDraft({ ...item }); };
  const remove    = (id: string) => {
    if (tab === "tools")     onChange({ ...data, tools:     data.tools.filter(x => x.id !== id) });
    if (tab === "prompts")   onChange({ ...data, prompts:   data.prompts.filter(x => x.id !== id) });
    if (tab === "resources") onChange({ ...data, resources: data.resources.filter(x => x.id !== id) });
  };

  const currentList = tab === "tools" ? data.tools : tab === "prompts" ? data.prompts : data.resources;

  return (
    <div>
      <SectionHeader title="Free Resources" desc="Manage free tools, prompt templates, and resources for your audience." onSave={() => onSave(data)} saving={saving} />

      {/* Sub-tabs */}
      <div className="flex gap-2 mb-6 p-1 bg-surface-100 rounded-xl w-fit">
        {(["tools","prompts","resources"] as const).map(t => (
          <button key={t} onClick={() => { setTab(t); setEditing(null); setDraft(null); }}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 capitalize ${tab === t ? "bg-white shadow text-ink" : "text-ink-soft hover:text-ink"}`}>
            {t} <span className="ml-1 text-[10px] font-bold text-ink-soft">({tab === "tools" ? data.tools.length : tab === "prompts" ? data.prompts.length : data.resources.length})</span>
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-3 mb-4">
        {currentList.map(item => (
          <div key={item.id} className={`card-white p-4 ${editing === item.id ? "border-gold/40" : ""}`}>
            {editing === item.id && draft ? (
              <div className="space-y-3">
                {tab === "tools" && (
                  <>
                    <div className="grid grid-cols-3 gap-2">
                      <input value={(draft as Tool).icon} onChange={e => setDraft(p => ({...p!, icon: e.target.value} as Tool))} placeholder="Icon (emoji)" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                      <input value={(draft as Tool).name} onChange={e => setDraft(p => ({...p!, name: e.target.value} as Tool))} placeholder="Tool Name" className="col-span-2 border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input value={(draft as Tool).category} onChange={e => setDraft(p => ({...p!, category: e.target.value} as Tool))} placeholder="Category" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                      <input value={(draft as Tool).badge} onChange={e => setDraft(p => ({...p!, badge: e.target.value} as Tool))} placeholder="Badge (Free / Free Tier)" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                    </div>
                    <input value={(draft as Tool).url} onChange={e => setDraft(p => ({...p!, url: e.target.value} as Tool))} placeholder="https://..." className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                    <textarea value={(draft as Tool).description} onChange={e => setDraft(p => ({...p!, description: e.target.value} as Tool))} rows={2} placeholder="Short description" className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50 resize-none" />
                  </>
                )}
                {tab === "prompts" && (
                  <>
                    <div className="grid grid-cols-2 gap-2">
                      <input value={(draft as Prompt).title} onChange={e => setDraft(p => ({...p!, title: e.target.value} as Prompt))} placeholder="Prompt Title" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                      <input value={(draft as Prompt).category} onChange={e => setDraft(p => ({...p!, category: e.target.value} as Prompt))} placeholder="Category" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                    </div>
                    <input value={(draft as Prompt).usage} onChange={e => setDraft(p => ({...p!, usage: e.target.value} as Prompt))} placeholder="Usage hint" className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                    <textarea value={(draft as Prompt).prompt} onChange={e => setDraft(p => ({...p!, prompt: e.target.value} as Prompt))} rows={5} placeholder="The full prompt text..." className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50 resize-none font-mono" />
                  </>
                )}
                {tab === "resources" && (
                  <>
                    <div className="grid grid-cols-2 gap-2">
                      <input value={(draft as Resource).title} onChange={e => setDraft(p => ({...p!, title: e.target.value} as Resource))} placeholder="Resource Title" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                      <input value={(draft as Resource).type} onChange={e => setDraft(p => ({...p!, type: e.target.value} as Resource))} placeholder="Type (Free Course / Tool)" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input value={(draft as Resource).category} onChange={e => setDraft(p => ({...p!, category: e.target.value} as Resource))} placeholder="Category" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                      <input value={(draft as Resource).url} onChange={e => setDraft(p => ({...p!, url: e.target.value} as Resource))} placeholder="https://..." className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                    </div>
                    <textarea value={(draft as Resource).description} onChange={e => setDraft(p => ({...p!, description: e.target.value} as Resource))} rows={2} placeholder="Short description" className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50 resize-none" />
                  </>
                )}
                <div className="flex gap-2">
                  <button onClick={commitEdit} className="btn-gold px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Save</button>
                  <button onClick={cancelEdit} className="px-4 py-2 rounded-lg text-xs font-semibold border border-surface-200 text-ink-soft hover:text-ink transition-colors flex items-center gap-1.5"><X className="w-3.5 h-3.5" /> Cancel</button>
                </div>
              </div>
            ) : (
              <div className="flex items-start gap-3">
                {tab === "tools" && <span className="text-2xl shrink-0 mt-0.5">{(item as Tool).icon}</span>}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ink text-sm">{tab === "tools" ? (item as Tool).name : tab === "prompts" ? (item as Prompt).title : (item as Resource).title}</p>
                  <p className="text-xs text-ink-soft">{tab === "tools" ? (item as Tool).category : tab === "prompts" ? (item as Prompt).category : (item as Resource).type}</p>
                  <p className="text-xs text-ink-muted mt-1 line-clamp-1">{tab === "tools" ? (item as Tool).description : tab === "prompts" ? (item as Prompt).usage : (item as Resource).description}</p>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button onClick={() => startEdit(item)} className="p-2 rounded-lg text-ink-soft hover:text-gold hover:bg-gold/10 transition-all"><Edit2 className="w-3.5 h-3.5" /></button>
                  <button onClick={() => remove(item.id)} className="p-2 rounded-lg text-ink-soft hover:text-red-500 hover:bg-red-50 transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {editing === "_new" && draft ? (
        <div className="card-white p-5 space-y-3 border-gold/40 mb-4">
          <p className="text-xs font-bold text-gold uppercase tracking-widest">New {tab.slice(0,-1)}</p>
          {tab === "tools" && (
            <>
              <div className="grid grid-cols-3 gap-2">
                <input value={(draft as Tool).icon} onChange={e => setDraft(p => ({...p!, icon: e.target.value} as Tool))} placeholder="Icon emoji" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                <input value={(draft as Tool).name} onChange={e => setDraft(p => ({...p!, name: e.target.value} as Tool))} placeholder="Tool Name" className="col-span-2 border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input value={(draft as Tool).category} onChange={e => setDraft(p => ({...p!, category: e.target.value} as Tool))} placeholder="Category" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                <input value={(draft as Tool).badge} onChange={e => setDraft(p => ({...p!, badge: e.target.value} as Tool))} placeholder="Badge" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
              </div>
              <input value={(draft as Tool).url} onChange={e => setDraft(p => ({...p!, url: e.target.value} as Tool))} placeholder="https://..." className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
              <textarea value={(draft as Tool).description} onChange={e => setDraft(p => ({...p!, description: e.target.value} as Tool))} rows={2} placeholder="Description" className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50 resize-none" />
            </>
          )}
          {tab === "prompts" && (
            <>
              <div className="grid grid-cols-2 gap-2">
                <input value={(draft as Prompt).title} onChange={e => setDraft(p => ({...p!, title: e.target.value} as Prompt))} placeholder="Prompt Title" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                <input value={(draft as Prompt).category} onChange={e => setDraft(p => ({...p!, category: e.target.value} as Prompt))} placeholder="Category" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
              </div>
              <input value={(draft as Prompt).usage} onChange={e => setDraft(p => ({...p!, usage: e.target.value} as Prompt))} placeholder="Usage hint" className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
              <textarea value={(draft as Prompt).prompt} onChange={e => setDraft(p => ({...p!, prompt: e.target.value} as Prompt))} rows={5} placeholder="The prompt text..." className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50 resize-none font-mono" />
            </>
          )}
          {tab === "resources" && (
            <>
              <div className="grid grid-cols-2 gap-2">
                <input value={(draft as Resource).title} onChange={e => setDraft(p => ({...p!, title: e.target.value} as Resource))} placeholder="Title" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                <input value={(draft as Resource).type} onChange={e => setDraft(p => ({...p!, type: e.target.value} as Resource))} placeholder="Type" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input value={(draft as Resource).category} onChange={e => setDraft(p => ({...p!, category: e.target.value} as Resource))} placeholder="Category" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
                <input value={(draft as Resource).url} onChange={e => setDraft(p => ({...p!, url: e.target.value} as Resource))} placeholder="https://..." className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
              </div>
              <textarea value={(draft as Resource).description} onChange={e => setDraft(p => ({...p!, description: e.target.value} as Resource))} rows={2} placeholder="Description" className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50 resize-none" />
            </>
          )}
          <div className="flex gap-2">
            <button onClick={commitEdit} className="btn-gold px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> Add</button>
            <button onClick={cancelEdit} className="px-4 py-2 rounded-lg text-xs font-semibold border border-surface-200 text-ink-soft hover:text-ink transition-colors flex items-center gap-1.5"><X className="w-3.5 h-3.5" /> Cancel</button>
          </div>
        </div>
      ) : (
        <button onClick={startNew} className="w-full border-2 border-dashed border-surface-300 rounded-2xl py-4 text-sm text-ink-soft hover:border-gold/40 hover:text-gold transition-all flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" /> Add New {tab === "tools" ? "Tool" : tab === "prompts" ? "Prompt" : "Resource"}
        </button>
      )}
    </div>
  );
}

// ─── Courses Section ──────────────────────────────────────────────────────────
function CoursesSection({ items, saving, onSave, onChange }: { items: Course[]; saving: boolean; onSave: (d: Course[]) => void; onChange: (d: Course[]) => void }) {
  const blank = (): Course => ({ id: uid(), title: "", level: "Beginner", duration: "4 Weeks", rating: 5, students: "0+", price: "PKR 10,000", badge: "New", color: "#F5B400", iconName: "BookOpen", outcome: "", includes: [""] });
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState<Course | null>(null);

  const startEdit = (c: Course) => { setEditing(c.id); setDraft({ ...c, includes: [...c.includes] }); };
  const startNew  = () => { setEditing("_new"); setDraft(blank()); };
  const cancel    = () => { setEditing(null); setDraft(null); };

  const commit = () => {
    if (!draft || !draft.title.trim()) return;
    const d = { ...draft, includes: draft.includes.filter(x => x.trim()) };
    onChange(editing === "_new" ? [...items, d] : items.map(c => c.id === editing ? d : c));
    cancel();
  };

  const setDraftField = (k: keyof Course, v: unknown) => setDraft(p => p ? ({ ...p, [k]: v }) : p);
  const setInclude = (i: number, v: string) => setDraft(p => { if (!p) return p; const inc = [...p.includes]; inc[i] = v; return { ...p, includes: inc }; });
  const addInclude = () => setDraft(p => p ? ({ ...p, includes: [...p.includes, ""] }) : p);
  const removeInclude = (i: number) => setDraft(p => p ? ({ ...p, includes: p.includes.filter((_, idx) => idx !== i) }) : p);

  const FormFields = ({ d }: { d: Course }) => (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <input value={d.title} onChange={e => setDraftField("title", e.target.value)} placeholder="Course Title" className="col-span-2 border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
        <input value={d.badge} onChange={e => setDraftField("badge", e.target.value)} placeholder="Badge (Most Popular)" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
        <input value={d.price} onChange={e => setDraftField("price", e.target.value)} placeholder="Price (PKR 15,000)" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
        <input value={d.level} onChange={e => setDraftField("level", e.target.value)} placeholder="Level (Beginner → Advanced)" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
        <input value={d.duration} onChange={e => setDraftField("duration", e.target.value)} placeholder="Duration (6 Weeks)" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
        <input value={d.students} onChange={e => setDraftField("students", e.target.value)} placeholder="Students (3,500+)" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
        <input value={d.color} onChange={e => setDraftField("color", e.target.value)} placeholder="Color (#FF0000)" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
      </div>
      <textarea value={d.outcome} onChange={e => setDraftField("outcome", e.target.value)} rows={2} placeholder="Outcome — what student achieves" className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50 resize-none" />
      <div>
        <p className="text-xs font-bold text-ink-soft mb-2 uppercase tracking-widest">Course Includes</p>
        <div className="space-y-2">
          {d.includes.map((inc, i) => (
            <div key={i} className="flex gap-2">
              <input value={inc} onChange={e => setInclude(i, e.target.value)} placeholder={`Include item ${i + 1}`} className="flex-1 border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
              <button onClick={() => removeInclude(i)} className="p-2 rounded-lg text-ink-soft hover:text-red-500 hover:bg-red-50 transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          ))}
          <button onClick={addInclude} className="text-xs text-gold hover:text-gold/80 flex items-center gap-1 transition-colors"><Plus className="w-3.5 h-3.5" /> Add Item</button>
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={commit} className="btn-gold px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> {editing === "_new" ? "Add Course" : "Save"}</button>
        <button onClick={cancel} className="px-4 py-2 rounded-lg text-xs font-semibold border border-surface-200 text-ink-soft hover:text-ink transition-colors flex items-center gap-1.5"><X className="w-3.5 h-3.5" /> Cancel</button>
      </div>
    </div>
  );

  return (
    <div>
      <SectionHeader title="Courses Manager" desc={`${items.length} courses — edit price, duration, includes, outcome, badge.`} onSave={() => onSave(items)} saving={saving} />
      <div className="space-y-3 mb-4">
        {items.map((c, i) => (
          <div key={c.id} className={`card-white overflow-hidden ${editing === c.id ? "border-gold/40" : ""}`}>
            {editing === c.id && draft ? (
              <div className="p-5"><FormFields d={draft} /></div>
            ) : (
              <div className="flex items-center gap-4 p-5">
                <span className="text-xs font-black text-gold bg-gold/10 rounded-lg w-7 h-7 flex items-center justify-center shrink-0">{i + 1}</span>
                <div className="w-3 h-3 rounded-full shrink-0" style={{ background: c.color }} />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ink text-sm">{c.title}</p>
                  <p className="text-xs text-ink-soft">{c.duration} · {c.level} · {c.price}</p>
                </div>
                <span className="text-[10px] font-bold bg-gold/10 text-gold border border-gold/20 rounded-full px-2.5 py-0.5 shrink-0">{c.badge}</span>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => startEdit(c)} className="p-2 rounded-lg text-ink-soft hover:text-gold hover:bg-gold/10 transition-all"><Edit2 className="w-3.5 h-3.5" /></button>
                  <button onClick={() => onChange(items.filter(x => x.id !== c.id))} className="p-2 rounded-lg text-ink-soft hover:text-red-500 hover:bg-red-50 transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {editing === "_new" && draft ? (
        <div className="card-white p-5 border-gold/40 mb-4">
          <p className="text-xs font-bold text-gold uppercase tracking-widest mb-3">New Course</p>
          <FormFields d={draft} />
        </div>
      ) : (
        <button onClick={startNew} className="w-full border-2 border-dashed border-surface-300 rounded-2xl py-4 text-sm text-ink-soft hover:border-gold/40 hover:text-gold transition-all flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" /> Add New Course
        </button>
      )}
    </div>
  );
}

// ─── Services Section ─────────────────────────────────────────────────────────
function ServicesSection({ items, saving, onSave, onChange }: { items: Service[]; saving: boolean; onSave: (d: Service[]) => void; onChange: (d: Service[]) => void }) {
  const blank = (): Service => ({ id: uid(), title: "", tagline: "", color: "#F5B400", iconName: "Briefcase", desc: "", features: [""], price: "From PKR 10,000", type: "Course" });
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraft] = useState<Service | null>(null);

  const startEdit = (s: Service) => { setEditing(s.id); setDraft({ ...s, features: [...s.features] }); };
  const startNew  = () => { setEditing("_new"); setDraft(blank()); };
  const cancel    = () => { setEditing(null); setDraft(null); };

  const commit = () => {
    if (!draft || !draft.title.trim()) return;
    const d = { ...draft, features: draft.features.filter(x => x.trim()) };
    onChange(editing === "_new" ? [...items, d] : items.map(s => s.id === editing ? d : s));
    cancel();
  };

  const setField = (k: keyof Service, v: unknown) => setDraft(p => p ? ({ ...p, [k]: v }) : p);
  const setFeat  = (i: number, v: string) => setDraft(p => { if (!p) return p; const f = [...p.features]; f[i] = v; return { ...p, features: f }; });
  const addFeat  = () => setDraft(p => p ? ({ ...p, features: [...p.features, ""] }) : p);
  const remFeat  = (i: number) => setDraft(p => p ? ({ ...p, features: p.features.filter((_, idx) => idx !== i) }) : p);

  const FormFields = ({ d }: { d: Service }) => (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <input value={d.title} onChange={e => setField("title", e.target.value)} placeholder="Service Title" className="col-span-2 border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
        <input value={d.tagline} onChange={e => setField("tagline", e.target.value)} placeholder="Tagline" className="col-span-2 border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
        <input value={d.price} onChange={e => setField("price", e.target.value)} placeholder="Price (From PKR 15,000)" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
        <input value={d.type} onChange={e => setField("type", e.target.value)} placeholder="Type (Course / Service)" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
        <input value={d.color} onChange={e => setField("color", e.target.value)} placeholder="Color (#FF0000)" className="border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
      </div>
      <textarea value={d.desc} onChange={e => setField("desc", e.target.value)} rows={3} placeholder="Service description" className="w-full border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50 resize-none" />
      <div>
        <p className="text-xs font-bold text-ink-soft mb-2 uppercase tracking-widest">Features</p>
        <div className="space-y-2">
          {d.features.map((f, i) => (
            <div key={i} className="flex gap-2">
              <input value={f} onChange={e => setFeat(i, e.target.value)} placeholder={`Feature ${i + 1}`} className="flex-1 border border-surface-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:border-gold/50" />
              <button onClick={() => remFeat(i)} className="p-2 rounded-lg text-ink-soft hover:text-red-500 hover:bg-red-50 transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          ))}
          <button onClick={addFeat} className="text-xs text-gold hover:text-gold/80 flex items-center gap-1 transition-colors"><Plus className="w-3.5 h-3.5" /> Add Feature</button>
        </div>
      </div>
      <div className="flex gap-2">
        <button onClick={commit} className="btn-gold px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-1.5"><Check className="w-3.5 h-3.5" /> {editing === "_new" ? "Add Service" : "Save"}</button>
        <button onClick={cancel} className="px-4 py-2 rounded-lg text-xs font-semibold border border-surface-200 text-ink-soft hover:text-ink transition-colors flex items-center gap-1.5"><X className="w-3.5 h-3.5" /> Cancel</button>
      </div>
    </div>
  );

  return (
    <div>
      <SectionHeader title="Services Manager" desc={`${items.length} services — edit title, tagline, features, price, type.`} onSave={() => onSave(items)} saving={saving} />
      <div className="space-y-3 mb-4">
        {items.map((s, i) => (
          <div key={s.id} className={`card-white overflow-hidden ${editing === s.id ? "border-gold/40" : ""}`}>
            {editing === s.id && draft ? (
              <div className="p-5"><FormFields d={draft} /></div>
            ) : (
              <div className="flex items-center gap-4 p-5">
                <span className="text-xs font-black text-gold bg-gold/10 rounded-lg w-7 h-7 flex items-center justify-center shrink-0">{i + 1}</span>
                <div className="w-3 h-3 rounded-full shrink-0" style={{ background: s.color }} />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-ink text-sm">{s.title}</p>
                  <p className="text-xs text-ink-soft">{s.tagline} · {s.price}</p>
                </div>
                <span className="text-[10px] font-bold bg-surface-100 text-ink-soft border border-surface-200 rounded-full px-2.5 py-0.5 shrink-0">{s.type}</span>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => startEdit(s)} className="p-2 rounded-lg text-ink-soft hover:text-gold hover:bg-gold/10 transition-all"><Edit2 className="w-3.5 h-3.5" /></button>
                  <button onClick={() => onChange(items.filter(x => x.id !== s.id))} className="p-2 rounded-lg text-ink-soft hover:text-red-500 hover:bg-red-50 transition-all"><Trash2 className="w-3.5 h-3.5" /></button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {editing === "_new" && draft ? (
        <div className="card-white p-5 border-gold/40 mb-4">
          <p className="text-xs font-bold text-gold uppercase tracking-widest mb-3">New Service</p>
          <FormFields d={draft} />
        </div>
      ) : (
        <button onClick={startNew} className="w-full border-2 border-dashed border-surface-300 rounded-2xl py-4 text-sm text-ink-soft hover:border-gold/40 hover:text-gold transition-all flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" /> Add New Service
        </button>
      )}
    </div>
  );
}

// ─── Settings Section ─────────────────────────────────────────────────────────
function SettingsSection({ config, saving, onSave, onChange }: { config: SiteConfig; saving: boolean; onSave: (d: SiteConfig) => void; onChange: (d: SiteConfig) => void }) {
  const set = (section: keyof SiteConfig, key: string, val: string) =>
    onChange({ ...config, [section]: { ...config[section], [key]: val } });

  return (
    <div>
      <SectionHeader title="Site Settings" desc="Update company info, contact details, and social links." onSave={() => onSave(config)} saving={saving} />

      <div className="space-y-8">
        {/* Company */}
        <div>
          <h3 className="font-heading font-bold text-ink text-sm uppercase tracking-widest mb-4 flex items-center gap-2"><Globe className="w-4 h-4 text-gold" /> Company Info</h3>
          <div className="space-y-3">
            <input value={config.company.name} onChange={e => set("company","name",e.target.value)} placeholder="Company Name"
              className="w-full border border-surface-200 rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold/50" />
            <input value={config.company.tagline} onChange={e => set("company","tagline",e.target.value)} placeholder="Tagline (Training · Services · Growth)"
              className="w-full border border-surface-200 rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold/50" />
            <textarea value={config.company.description} onChange={e => set("company","description",e.target.value)} rows={3} placeholder="Company description"
              className="w-full border border-surface-200 rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold/50 resize-none" />
            <input value={config.company.address} onChange={e => set("company","address",e.target.value)} placeholder="Address"
              className="w-full border border-surface-200 rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold/50" />
          </div>
        </div>

        <div className="border-t border-surface-200" />

        {/* Contact */}
        <div>
          <h3 className="font-heading font-bold text-ink text-sm uppercase tracking-widest mb-4 flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> Contact</h3>
          <div className="grid grid-cols-2 gap-3">
            <input value={config.contact.phone} onChange={e => set("contact","phone",e.target.value)} placeholder="Phone (0316 6768001)"
              className="border border-surface-200 rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold/50" />
            <input value={config.contact.whatsapp} onChange={e => set("contact","whatsapp",e.target.value)} placeholder="WhatsApp (923166768001)"
              className="border border-surface-200 rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold/50" />
            <input value={config.contact.email} onChange={e => set("contact","email",e.target.value)} placeholder="Email"
              className="border border-surface-200 rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold/50" />
            <input value={config.contact.website} onChange={e => set("contact","website",e.target.value)} placeholder="Website URL"
              className="border border-surface-200 rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold/50" />
          </div>
        </div>

        <div className="border-t border-surface-200" />

        {/* Social */}
        <div>
          <h3 className="font-heading font-bold text-ink text-sm uppercase tracking-widest mb-4 flex items-center gap-2"><Facebook className="w-4 h-4 text-gold" /> Social Media Links</h3>
          <div className="space-y-3">
            {([
              { key: "facebook",  label: "Facebook Page URL",  icon: Facebook  },
              { key: "youtube",   label: "YouTube Channel URL", icon: Youtube   },
              { key: "instagram", label: "Instagram Profile URL",icon: Instagram },
              { key: "tiktok",    label: "TikTok Profile URL",  icon: Globe     },
            ] as const).map(s => (
              <div key={s.key} className="flex items-center gap-3">
                <s.icon className="w-4 h-4 text-ink-soft shrink-0" />
                <input value={config.social[s.key]} onChange={e => set("social", s.key, e.target.value)} placeholder={s.label}
                  className="flex-1 border border-surface-200 rounded-xl px-4 py-3 text-sm text-ink focus:outline-none focus:border-gold/50" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
