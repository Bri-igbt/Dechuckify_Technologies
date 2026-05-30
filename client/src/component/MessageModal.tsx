import { ChevronDown, Send } from "lucide-react"
import type { FormState } from "../types";
import { useState } from "react";
import { items } from "../utils/data";

const MessageModal = () => {
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
    )
}

export default MessageModal
