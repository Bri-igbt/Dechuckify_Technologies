import { useState, useEffect } from "react";
import {
    ArrowRight,
    Code2,
    Monitor,
    BarChart3,
} from "lucide-react";
import AnimatedShowcase from "./AnimatedShowcase";
import { services } from "../utils/data";

const HeroSection = () => {
    const [typedIndex, setTypedIndex] = useState(0);
    const words = ["Web Design", "Development", "SEO"];
    const [charIndex, setCharIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[typedIndex];
        const timeout = setTimeout(() => {
        if (!deleting && charIndex < word.length) {
            setCharIndex((c) => c + 1);
        } else if (!deleting && charIndex === word.length) {
            setTimeout(() => setDeleting(true), 1400);
        } else if (deleting && charIndex > 0) {
            setCharIndex((c) => c - 1);
        } else if (deleting && charIndex === 0) {
            setDeleting(false);
            setTypedIndex((i) => (i + 1) % words.length);
        }
        }, deleting ? 60 : 90);
        return () => clearTimeout(timeout);
    }, [charIndex, deleting, typedIndex]);


    return (
        <section className="relative min-h-screen w-full overflow-hidden flex items-center font-montserrat">

            <div 
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" 
                style={{ background: "#ec4899" }} 
            />
            <div 
                className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl" 
                style={{ background: "#6366f1" }} 
            />

            <div className="relative z-10 max-w-[1300px] mx-auto px-6 lg:px-12 py-24 grid lg:grid-cols-2 gap-12 items-center w-full">
                <div className="space-y-6">
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                        style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.8)",
                        }}
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        #1 Software Company in Lagos, Nigeria
                    </div>

                    <h1 className="text-4xl lg:text-[3.2rem] font-extrabold leading-[1.1] text-white">
                        Premium{" "}
                        <span className="inline-block min-w-[240px] text-purple-950 drop-shadow-[0_0_40px_rgba(236,72,153,0.4)]">

                            {words[typedIndex].slice(0, charIndex)}
                            <span className="animate-pulse">|</span>
                        </span>

                        <br />
                        <span>Services in </span>
                        <span className="text-purple-950">Lagos</span>
                    </h1>

                    <p className="text-[16px] leading-relaxed max-w-[520px] font-outfit text-slate-900/75 tracking-wider">
                    Dechuckify Technologies is a trusted digital agency in Lagos, Nigeria, delivering fast, modern, and SEO-optimized websites that help businesses grow, rank on Google, and convert visitors into loyal customers.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {services.map((s) => {
                            const Icon = s.icon;

                            return (
                            <div
                                key={s.label}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[13px] font-medium bg-black border border-purple-500/25 text-white"
                            >
                                <Icon size={16} />
                                {s.label}
                            </div>
                            );
                        })}
                    </div>

                    <div className="flex flex-wrap gap-4 pt-2">
                        <button
                            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl text-[15px] font-outfit font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-xl bg-black shadow-[0_4px_24px_rgba(236,72,153,0.35)]"
                        >
                            Book a Consultation
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </button>
                    
                    </div>
                    
                </div>

                <div className="relative h-[480px] lg:h-[520px] flex items-center justify-center">
                    <AnimatedShowcase />
                </div>
            </div>

        <style>{`
            @keyframes floatY {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            }
            @keyframes fadeIn {
            from { opacity: 0; transform: translateY(6px); }
            to { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeIn { animation: fadeIn 0.4s ease-out both; }
        `}</style>
        </section>
    );
};

export default HeroSection;
