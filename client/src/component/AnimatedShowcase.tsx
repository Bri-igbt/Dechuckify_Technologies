import { CheckCircle2, Code2, Palette, Search, Shield, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import FloatingCardEl from "./FloatingCardEl";
import { floatingCards } from "../utils/data";

const AnimatedShowcase = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [progress, setProgress] = useState(0);
    const [seoScore, setSeoScore] = useState(42);
    const [tick, setTick] = useState(0);

    const tabs = ["Web Design", "Development", "SEO"];
    

    useEffect(() => {
        const interval = setInterval(() => {
        setTick((t) => t + 1);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setProgress(0);
        setSeoScore(42);
        const p = setInterval(() => {
        setProgress((v) => {
            if (v >= 100) { clearInterval(p); return 100; }
            return v + 2;
        });
        }, 30);
        const s = setInterval(() => {
        setSeoScore((v) => {
            if (v >= 94) { clearInterval(s); return 94; }
            return v + 1;
        });
        }, 40);
        return () => { clearInterval(p); clearInterval(s); };
    }, [activeTab]);

    useEffect(() => {
        const t = setInterval(() => {
        setActiveTab((a) => (a + 1) % 3);
        }, 3200);
        return () => clearInterval(t);
    }, []);

    return (
        <div className="relative w-full h-full flex items-center justify-center">
        {/* Main browser mockup */}
        <div
            className="relative z-10 w-full max-w-[480px] rounded-2xl overflow-hidden shadow-2xl"
            style={{
            background: "rgba(15, 20, 60, 0.85)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(20px)",
            }}
        >
            <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
            <div className="w-3 h-3 rounded-full bg-red-400/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/70" />
            <div className="w-3 h-3 rounded-full bg-green-400/70" />
            <div
                className="ml-3 flex-1 h-6 rounded-md px-3 flex items-center gap-2"
                style={{ background: "rgba(255,255,255,0.06)" }}
            >
                <Shield size={10} className="text-emerald-400" />
                <span className="text-white/40 text-[11px] font-mono">dechuckifytechnologiesltd.com </span>
            </div>
            </div>

            {/* Tab switcher */}
            <div className="flex gap-1 px-4 pt-4 pb-2">
            {tabs.map((tab, i) => (
                <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className="px-3 py-1.5 rounded-md text-[12px] font-semibold transition-all duration-300"
                style={{
                    background: activeTab === i ? "rgba(236,72,153,0.25)" : "rgba(255,255,255,0.05)",
                    color: activeTab === i ? "#f472b6" : "rgba(255,255,255,0.4)",
                    border: activeTab === i ? "1px solid rgba(236,72,153,0.4)" : "1px solid transparent",
                }}
                >
                {tab}
                </button>
            ))}
            </div>

            {/* Content area */}
            <div className="px-4 pb-4 min-h-[240px]">
            {activeTab === 0 && (
                <div className="space-y-3 animate-fadeIn">
                {/* Design canvas preview */}
                <div className="rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    {/* Mock hero */}
                    <div className="h-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e3a5f 100%)" }}>
                    <div className="absolute inset-0 flex items-center px-4 gap-3">
                        <div className="flex-1 space-y-1.5">
                        <div className="h-2 rounded bg-white/30 w-3/4" />
                        <div className="h-1.5 rounded bg-pink-400/50 w-1/2" />
                        <div className="h-1.5 rounded bg-white/15 w-2/3" />
                        <div className="flex gap-2 mt-2">
                            <div className="h-5 w-16 rounded-md bg-pink-500/70" />
                            <div className="h-5 w-14 rounded-md" style={{ border: "1px solid rgba(255,255,255,0.3)" }} />
                        </div>
                        </div>
                        <div className="w-16 h-16 rounded-lg" style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
                        <div className="w-full h-full flex items-center justify-center">
                            <Palette size={20} className="text-pink-300/60" />
                        </div>
                        </div>
                    </div>
                    </div>
                    {/* Color palette */}
                    <div className="px-3 py-2 flex items-center gap-2">
                    <span className="text-white/30 text-[10px]">Palette</span>
                    {["#ec4899","#8b5cf6","#3b82f6","#10b981","#f59e0b"].map(c => (
                        <div key={c} className="w-4 h-4 rounded-full" style={{ background: c }} />
                    ))}
                    <span className="ml-auto text-[10px] text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 size={10} /> Approved
                    </span>
                    </div>
                </div>
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2">
                    {[["Load Time","0.8s","↓ 60%","#34d399"],["Mobile","100/100","Perfect","#60a5fa"],["CLS","0.02","Stable","#f472b6"]].map(([label,val,sub,color]) => (
                    <div key={label} className="rounded-lg p-2 text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                        <div className="text-[10px] text-white/40">{label}</div>
                        <div className="text-sm font-bold" style={{ color }}>{val}</div>
                        <div className="text-[9px]" style={{ color }}>{sub}</div>
                    </div>
                    ))}
                </div>
                </div>
            )}

            {activeTab === 1 && (
                <div className="space-y-3 animate-fadeIn">
                {/* Code editor mock */}
                <div className="rounded-xl overflow-hidden font-mono text-[11px]" style={{ background: "#0d1117", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="flex items-center gap-2 px-3 py-2" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <Code2 size={12} className="text-blue-400" />
                    <span className="text-white/40">App.tsx</span>
                    <span className="ml-auto text-emerald-400 text-[10px]">● saved</span>
                    </div>
                    <div className="px-3 py-3 space-y-1">
                    <div><span className="text-purple-400">const</span> <span className="text-blue-300">Hero</span> <span className="text-white/50">= () =&gt; {"{"}</span></div>
                    <div className="pl-4"><span className="text-purple-400">return</span> <span className="text-white/50">(</span></div>
                    <div className="pl-8"><span className="text-pink-400">&lt;section</span> <span className="text-yellow-300">className</span><span className="text-white/50">=</span><span className="text-emerald-400">"hero"</span><span className="text-pink-400">&gt;</span></div>
                    <div className="pl-12 text-white/30">{"// ✨ magic here"}</div>
                    <div className="pl-8"><span className="text-pink-400">&lt;/section&gt;</span></div>
                    <div className="pl-4 text-white/50">)</div>
                    <div className="text-white/50">{"}"}</div>
                    </div>
                </div>
                {/* Build progress */}
                <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="flex justify-between items-center mb-2">
                    <span className="text-[11px] text-white/50">Build progress</span>
                    <span className="text-[11px] text-emerald-400">{progress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                    <div
                        className="h-full rounded-full transition-all duration-100"
                        style={{ width: `${progress}%`, background: "linear-gradient(90deg, #3b82f6, #ec4899)" }}
                    />
                    </div>
                    <div className="flex gap-3 mt-3">
                    {[["React 18","✓"],["TypeScript","✓"],["Tailwind","✓"],["Vite","✓"]].map(([name, status]) => (
                        <span key={name} className="text-[10px] text-white/40">
                        <span className="text-emerald-400">{status}</span> {name}
                        </span>
                    ))}
                    </div>
                </div>
                </div>
            )}

            {activeTab === 2 && (
                <div className="space-y-3 animate-fadeIn">
                {/* SEO score ring */}
                <div className="flex items-center gap-4 p-3 rounded-xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="relative w-16 h-16 flex-shrink-0">
                    <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
                        <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
                        <circle
                        cx="32" cy="32" r="26" fill="none"
                        stroke="#34d399" strokeWidth="6"
                        strokeDasharray={`${(seoScore / 100) * 163} 163`}
                        strokeLinecap="round"
                        style={{ transition: "stroke-dasharray 0.1s" }}
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-white">{seoScore}</span>
                    </div>
                    </div>
                    <div>
                    <div className="text-sm font-bold text-white">SEO Score</div>
                    <div className="text-[11px] text-emerald-400">Excellent ↑ +52pts</div>
                    <div className="text-[10px] text-white/30 mt-0.5">From 42 → {seoScore}</div>
                    </div>
                </div>
                {/* Keyword rankings */}
                <div className="rounded-xl overflow-hidden" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="px-3 py-2 flex items-center gap-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <Search size={11} className="text-pink-400" />
                    <span className="text-[11px] text-white/50">Keyword Rankings</span>
                    </div>
                    {[
                    ["web design Lagos","#1","↑5"],
                    ["SEO company Nigeria","#2","↑11"],
                    ["web developer Jakande","#1","↑8"],
                    ].map(([kw, rank, delta]) => (
                    <div key={kw} className="flex items-center px-3 py-2 gap-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                        <TrendingUp size={10} className="text-emerald-400" />
                        <span className="flex-1 text-[11px] text-white/60">{kw}</span>
                        <span className="text-[11px] font-bold text-pink-400">{rank}</span>
                        <span className="text-[10px] text-emerald-400">{delta}</span>
                    </div>
                    ))}
                </div>
                </div>
            )}
            </div>
        </div>

        {/* Floating cards */}
        {floatingCards.map((card) => (
            <FloatingCardEl key={card.id} card={card} />
        ))}
        </div>
    );
};

export default AnimatedShowcase;