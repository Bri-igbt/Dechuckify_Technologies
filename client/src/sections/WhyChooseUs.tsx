import { useState } from "react";
import { reasons, stats } from "../utils/data";
import { ArrowRight } from "lucide-react";


const WhyChooseUs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section
            id="why-us"
            className="w-full bg-black/90 py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden"
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-950/100 opacity-[0.04] blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-950/100 opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <span className="px-5 py-1.5 rounded-full border border-purple-950 text-white text-xs font-bold tracking-[0.25em] uppercase" >
                        Why Choose Us
                    </span>
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight max-w-3xl" >
                        The Dechuckify{" "}
                        <span className="text-purple-500">Difference</span>
                    </h2>
                    <p className="text-white/75 text-sm md:text-base max-w-2xl leading-relaxed" >
                        We're not just another tech agency. We are your long term digital partner
                        obsessed with quality, accountability, and delivering work that actually moves the needle.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center gap-1 bg-white border border-[#1e2e1e] rounded-2xl py-6 px-4 text-center hover:border-purple-950/100 transition-colors duration-300"
                        >
                            <span className="text-purple-500 text-3xl md:text-4xl font-extrabold" >
                                {s.value}
                            </span>
                            <span className="text-[#64748b] text-xs font-medium" >
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {reasons.map((reason, i) => {
                        const Icon = reason.icon;
                        const isActive = activeIndex === i;
                        return (
                        <div
                            key={i}
                            onMouseEnter={() => setActiveIndex(i)}
                            onMouseLeave={() => setActiveIndex(null)}
                            className={`
                                group relative flex flex-col gap-4 p-6 rounded-2xl cursor-pointer border transition-all duration-300
                                ${isActive
                                    ? "bg-white/75 border-purple-500/60 -translate-y-2 shadow-xl shadow-purple-950/40"
                                    : "bg-white border-purple-900 hover:border-purple-500/30"
                                }
                            `}
                        >
                            <div className="absolute top-4 right-4">
                                <span
                                    className={`text-xs font-bold px-2 py-0.5 rounded-full transition-all duration-300 ${
                                    isActive ? "bg-purple-100 text-purple-500" : "bg-purple-100 text-purple-500" }`}
                                >
                                    {reason.stat}
                                </span>
                            </div>

                            <div
                                className={`
                                    w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0
                                    transition-all duration-300 bg-purple-100 text-purple-500 group-hover:bg-purple-500 group-hover:text-white
                                    ${isActive
                                    ? "bg-white text-[#0b1a12] shadow-lg shadow-indigo-700/30 rotate-6"
                                    : "bg-[#0f1f14] text-purple-500 group-hover:bg-purple-500 group-hover:text-white"
                                    }
                                `}
                            >
                                <Icon size={22} strokeWidth={1.8} />
                            </div>

                            <h3 className="text-[17px] font-bold leading-snug text-[#0f172a] group-hover:text-purple-500 transition-colors duration-300 " >
                                {reason.title}
                            </h3>

                            <p className="text-[#64748b] text-[13px] leading-relaxed flex-1" >
                                {reason.desc}
                            </p>

                            <p className={`text-xs font-medium transition-colors duration-300 ${ isActive ? "text-purple-500/70" : "text-[#2a3a2a]" }`} >
                                {reason.statLabel}
                            </p>

                            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#22c55e] to-transparent transition-all duration-300 ${ isActive ? "w-3/4 opacity-100" : "w-0 opacity-0"}`} />
                        </div>
                        );
                    })}
                </div>

                <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#contact" className="group flex items-center gap-2 px-8 py-3.5 rounded-full border border-white  text-white font-semibold text-[15px] hover:bg-white hover:text-black transition-all duration-300"  >
                        Start Your Project
                        <ArrowRight
                            size={17}
                            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        />
                    </a>

                    <a href="#portfolio" className="group flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-purple-300 bg-white text-purple-500 font-semibold text-[15px] hover:bg-purple-300 hover:text-[#0d1117] transition-all duration-300"  >
                        View Our Work
                        <ArrowRight
                            size={17}
                            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;