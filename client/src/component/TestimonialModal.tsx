import { useState } from "react";
import type { Testimonial } from "../types";
import { Send, Star, X } from "lucide-react";
import StarRating from "./StarRating";

const TestimonialModal = ({ onClose, onSubmit }: { onClose: () => void; onSubmit: (t: Omit<Testimonial, "id" | "date" | "avatar">) => void; }) => {
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: "",
        role: "",
        company: "",
        rating: 5,
        text: "",
    });

    const handleSubmit = () => {
        if (!form.name || !form.text || !form.rating) return;
        onSubmit(form);
        setSubmitted(true);
        setTimeout(onClose, 2000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            <div className="relative z-10 w-full max-w-lg bg-purple-900/20 border border-[#1e2e1e] rounded-2xl p-8 shadow-2xl">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[#64748b] hover:text-white/90 transition-colors"
                >
                    <X size={20} />
                </button>

                {submitted ? (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                    <div className="w-16 h-16 rounded-full bg-[#22c55e]/20 flex items-center justify-center">
                        <Star size={30} className="text-purple-500 fill-purple-500" />
                    </div>
                    <h3 className="text-white text-xl font-bold" >
                        Thank you!
                    </h3>
                    <p className="text-[#64748b] text-sm" >
                        Your testimonial has been added.
                    </p>
                </div>
                ) : (
                <>
                    <h3 className="text-slate-50/70 text-xl font-bold mb-6" >
                        Share Your Experience
                    </h3>

                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your full name *"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full bg-white/10 border border-[#1e2e1e] focus:border-purple-950 rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-purple-200/20 transition-colors"
                        />

                        <div className="flex gap-3">
                            <input
                                type="text"
                                placeholder="Your role"
                                value={form.role}
                                onChange={(e) => setForm({ ...form, role: e.target.value })}
                                className="flex-1 bg-white/10 border border-[#1e2e1e] focus:border-purple-950 rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-purple-200/20 transition-colors"
                            />
                            <input
                                type="text"
                                placeholder="Company"
                                value={form.company}
                                onChange={(e) => setForm({ ...form, company: e.target.value })}
                                className="flex-1 bg-white/10 border border-[#1e2e1e] focus:border-purple-950 rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-purple-200/20 transition-colors"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[#64748b] text-xs font-medium">
                                Your Rating *
                            </label>
                            
                            <StarRating
                            rating={form.rating}
                            interactive
                            onRate={(r) => setForm({ ...form, rating: r })}
                            />
                        </div>

                        <textarea
                            rows={4}
                            placeholder="Share your experience with Dechuckify Technologies *"
                            value={form.text}
                            onChange={(e) => setForm({ ...form, text: e.target.value })}
                            className="w-full bg-white/10 border border-[#1e2e1e] focus:border-purple-950 rounded-xl px-4 py-3 text-white/95 text-sm outline-none placeholder-purple-200/20 transition-colors resize-none"
                        />

                        <button
                            onClick={handleSubmit}
                            disabled={!form.name || !form.text}
                            className="flex items-center justify-center gap-2 w-full bg-purple-400 hover:bg-purple-500/50 disabled:opacity-40 disabled:cursor-not-allowed text-[#0b1a12] font-bold text-sm py-3.5 rounded-xl transition-colors duration-200"
                        >
                            <Send size={16} />
                            Submit Testimonial
                        </button>
                    </div>
                </>
                )}
            </div>
        </div>
    );
}

export default TestimonialModal;