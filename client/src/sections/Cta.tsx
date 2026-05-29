import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";


const CTA = () => {
    return (
        <section className="w-full bg-black/85 relative overflow-hidden py-24 px-6 md:px-12 lg:px-20">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[700px] h-[400px] bg-white/10 opacity-[0.06] blur-[120px] rounded-full" />
            </div>

            <div className="absolute -top-10 -left-10 w-[300px] h-[300px] bg-white opacity-[0.08] blur-[90px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] bg-white opacity-[0.08] blur-[90px] rounded-full pointer-events-none" />

            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(circle, #22c55e 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                }}
            />

            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-[#22c55e]/5">
                    <Sparkles size={14} className="text-purple-500" />
                    <span className="text-purple-500 text-xs font-semibold tracking-widest uppercase" >
                        Let's Build Something Great
                    </span>
                </div>

                <h2 className="text-white text-3xl md:text-5xl lg:text-[52px] font-extrabold leading-tight">
                    Transform Your Ideas Into{" "}
                    <span className="relative inline-block">
                        <span className="text-purple-500">Exceptional</span>
                        <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-purple-300 to-transparent rounded-full" />
                    </span>

                    <span className="block mt-3">
                        Digital Experiences
                    </span>
                </h2>

                <p className="text-[#94a3b8] text-sm md:text-base max-w-2xl leading-relaxed">
                    we transform ambitious ideas into impactful digital experiences. From startups 
                    building their foundation to enterprises scaling for growth, we deliver the 
                    expertise, strategy, and technology needed to bring visions to life.
                </p>

                {/* <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
                    <a href="#contact" className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-white hover:bg-black/85 hover:text-white text-[#0b1a12] font-bold text-[15px] rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-purple-900/40 hover:-translate-y-0.5" >
                        Start Your Project
                        <ArrowRight
                            size={17}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                        />
                    </a>

                <a
                    href="https://wa.me/2348000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 border-2 border-white/40 hover:border-purple-300 text-white font-bold text-[15px] rounded-xl transition-all duration-200 hover:bg-purple-300/10 hover:-translate-y-0.5"
                    
                >
                    <MessageCircle
                        size={17}
                        className="text-white transition-transform duration-200 group-hover:scale-110"
                    />
                    Chat on WhatsApp
                </a>
                </div> */}
            </div>
        </section>
    );
}

export default CTA;
