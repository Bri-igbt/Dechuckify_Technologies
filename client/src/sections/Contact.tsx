import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
    Send,
    ChevronDown,
} from "lucide-react";
import type { FormState } from "../types";
import { contact, contactInfo, items } from "../utils/data";


const Contact = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState < FormState > ({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const update = (k: keyof FormState, v: string) =>
        setForm((p) => ({ ...p, [k]: v }));

    const isValid =
        form.firstName && form.lastName && form.email && form.service && form.message;

    const handleSubmit = () => {
        if (!isValid) return;
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    const inputClass =
        "w-full bg-purple-200/100 border border-indigo-900 focus:border-purple-500/60 rounded-xl px-4 py-3.5 text-black text-sm outline-none placeholder-gray-500 transition-colors duration-200";

    const labelClass =
        "text-black/55 text-sm font-medium mb-1.5 flex items-center gap-1";

    return (
        <section
            id="contact"
            className="w-full bg-black/90 py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden"
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-white/85 opacity-[0.03] blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center gap-3 mb-14">
                    <span className="px-5 py-1.5 rounded-full border border-white/30 bg-[#22c55e]/5 text-purple-500 text-xs font-bold tracking-[0.25em] uppercase" >
                        Get In Touch
                    </span>
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight" >
                        Let's{" "}
                        <span className="text-purple-500">Build Together</span>
                    </h2>
                    <p className="text-white/75 text-sm md:text-base max-w-xl leading-relaxed" >
                        Have a project in mind? We'd love to hear about it. Reach out and
                        let's create something extraordinary together.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-full lg:w-[380px] flex-shrink-0 bg-purple-100 border border-[#1e2e1e] rounded-2xl p-8 flex flex-col gap-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#22c55e] opacity-[0.05] blur-[80px] rounded-full pointer-events-none" />
                        <div>
                            <h3 className="text-black/95 text-xl font-bold mb-2" >
                                Contact Information
                            </h3>
                            <p className="text-black/50 text-sm leading-relaxed">
                                Dechuckify Technologies is headquartered in Jakande, Lagos, delivering
                                world class digital solutions to businesses across Nigeria and internationally.
                                Let's talk about your goals.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            {contactInfo.map((item, i) => {
                                const Icon = item.icon;
                                return (
                                    <div key={i} className="flex items-start gap-4">
                                        <div className="w-11 h-11 rounded-xl bg-purple-200 border border-purple-300 flex items-center justify-center flex-shrink-0">
                                            <Icon size={18} className="text-black/100" strokeWidth={1.8} />
                                        </div>
                                        <div>
                                            <p className="text-black text-[10px] font-bold tracking-widest uppercase mb-1" >
                                                {item.label}
                                            </p>
                                            {item.lines.map((line, j) => (
                                                <p
                                                    key={j}
                                                    className={`text-sm leading-relaxed ${j === item.bold
                                                            ? "text-black/90 font-medium"
                                                            : "text-black/50"
                                                        }`}
                                                    
                                                >
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div>
                            <p className="text-black text-[10px] font-bold tracking-widest uppercase mb-3" >
                                Follow Us
                            </p>

                            <div className="flex gap-3">
                                {contact.map(({ icon: Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        className="w-10 h-10 rounded-xl bg-purple-200 shadow-sm hover:shadow-purple-500 border border-purple-950 flex items-center justify-center text-black hover:bg-white/95 hover:text-purple-500 hover:border-purple-950 transition-all duration-200"
                                    >
                                        <Icon size={17} strokeWidth={1.8} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <a
                            href="https://wa.me/08138081564"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center shadow-lg gap-2 w-full py-3.5 bg-purple-300 border border-black/100 hover:bg-black/85 hover:border-purple-950 hover:shadow-indigo-950 hover:text-white text-[#0b1a12] font-bold text-sm rounded-xl transition-colors duration-200 mt-auto"
                            
                        >
                            <FaWhatsapp size={20}/>
                            Chat on WhatsApp
                        </a>
                    </div>

                    <div className="flex-1 bg-purple-100 border border-[#1e2e1e] rounded-2xl p-8">
                            <>
                                <div className="mb-7">
                                    <h3 className="text-black/75 text-xl font-bold mb-1" >
                                        Send Us a Message
                                    </h3>
                                    <p className="text-black/50 text-sm" >
                                        We respond within 24 hours with a free, no obligation quote.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className={labelClass} >
                                                First Name <span className="text-purple-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Emeka"
                                                value={form.firstName}
                                                onChange={(e) => update("firstName", e.target.value)}
                                                className={inputClass}
                                                
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass} >
                                                Last Name <span className="text-purple-500">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="e.g. Olalekan"
                                                value={form.lastName}
                                                onChange={(e) => update("lastName", e.target.value)}
                                                className={inputClass}
                                                
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className={labelClass} >
                                                Email Address <span className="text-purple-500">*</span>
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="you@example.com"
                                                value={form.email}
                                                onChange={(e) => update("email", e.target.value)}
                                                className={inputClass}
                                                
                                            />
                                        </div>
                                        <div>
                                            <label className={labelClass} >
                                                Phone Number{" "}
                                                <span className="text-[#3a5a3a] text-xs font-normal">(optional)</span>
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="+234 xxx xxx xxxx"
                                                value={form.phone}
                                                onChange={(e) => update("phone", e.target.value)}
                                                className={inputClass}
                                                
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className={labelClass} >
                                            Service Needed <span className="text-purple-500">*</span>
                                        </label>
                                        <div className="relative">
                                            <select
                                                value={form.service}
                                                onChange={(e) => update("service", e.target.value)}
                                                className={`${inputClass} appearance-none pr-10 cursor-pointer`}
                                                
                                            >
                                                <option value="" disabled>— Select a service —</option>
                                                {items.map((s) => (
                                                    <option key={s} value={s} className="bg-[#0f1f14]">
                                                        {s}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown
                                                size={16}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3a5a3a] pointer-events-none"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className={labelClass} >
                                            Your Message <span className="text-purple-500">*</span>
                                        </label>
                                        <textarea
                                            rows={5}
                                            placeholder="Tell us about your business and what you need. The more detail, the better we can help!"
                                            value={form.message}
                                            onChange={(e) => update("message", e.target.value)}
                                            className={`${inputClass} resize-none`}
                                            
                                        />
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        className="group flex items-center justify-center gap-2 w-full py-4 bg-purple-300 border border-black/100 hover:bg-black/85 hover:border-purple-950 hover:shadow-indigo-950 hover:text-white text-[#0b1a12] disabled:opacity-40 disabled:cursor-not-allowed  font-bold text-[15px] rounded-xl transition-all duration-200 hover:shadow-lg"  
                                    >
                                    
                                        <>
                                            <Send size={16} />
                                            Send Message
                                        </>
                                        
                                    </button>
                                </div>
                            </>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
