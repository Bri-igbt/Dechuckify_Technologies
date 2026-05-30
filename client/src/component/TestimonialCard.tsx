import { Quote } from "lucide-react";
import type { Testimonial } from "../types";
import StarRating from "./StarRating";

const TestimonialCard = ({ t }: { t: Testimonial }) => {
    return (
        <div className="group relative flex flex-col gap-5 bg-white border border-[#1e2e1e] hover:border-purple-950 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-green-950/40 h-full">
            <Quote
                size={32}
                className="text-purple-500 opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                fill="currentColor"
            />

            <StarRating rating={t.rating} />

            <p className="text-purple-500 text-[14.5px] leading-relaxed flex-1" >
                "{t.text}"
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-[#22c55e]/20 to-transparent" />

            <div className="flex items-center gap-3">
                <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-[#22c55e]/30 group-hover:ring-[#22c55e]/60 transition-all duration-300"
                    />
                <div>
                <p className="text-black/50 font-medium text-sm" >
                    {t.name}
                </p>
                <p className="text-purple-500 text-xs font-medium">
                    {t.role}, {t.company}
                </p>
                </div>
                <span className="ml-auto text-[#2a3a2a] text-xs" >
                    {t.date}
                </span>
            </div>
        </div>
    );
}

export default TestimonialCard;