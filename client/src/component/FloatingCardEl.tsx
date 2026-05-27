import type { FloatingCard } from "../types";

const FloatingCardEl = ({ card }: { card: FloatingCard }) => {
        const Icon = card.icon;
    const positions: Record<string, string> = {
        rating: "top-2 -left-4",
        projects: "top-16 -right-2",
        ssl: "bottom-16 -right-4",
        location: "bottom-4 -left-2",
    };

    return (
        <div
        className={`absolute ${positions[card.id]} z-20 flex items-center gap-2.5 px-3 py-2 rounded-xl shadow-lg`}
        style={{
            background: "rgba(15,20,60,0.9)",
            border: `1px solid ${card.accent}33`,
            backdropFilter: "blur(12px)",
            animation: `floatY 3s ease-in-out infinite`,
            animationDelay: `${card.delay}s`,
            minWidth: "160px",
        }}
        >
        <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `${card.accent}22`, border: `1px solid ${card.accent}44` }}
        >
            <Icon
                size={14}
                className={
                    card.id === "rating"
                    ? "fill-yellow-400 text-yellow-400"
                    : card.id === "projects"
                    ? "text-pink-400"
                    : card.id === "ssl"
                    ? "text-emerald-400"
                    : "text-blue-400"
                }
            />
        </div>
        <div>
            <div className="text-[12px] font-semibold text-white leading-tight">{card.title}</div>
            <div className="text-[10px] text-white/40">{card.subtitle}</div>
        </div>
        </div>
    );
};

export default FloatingCardEl
