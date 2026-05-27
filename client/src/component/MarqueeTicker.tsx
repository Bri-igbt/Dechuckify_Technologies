import { tags } from "../utils/data";
import TagPill from "./TagPill";

const MarqueeTicker = () => {
    const items = [...tags, ...tags];

    return (
        <div className="relative w-full overflow-hidden py-4 bg-gradient-to-br from-purple-400 via-purple-300 to-purple-500">
            <div className="pointer-events-none absolute inset-0 opacity-20" />

            <div className="marquee-fade-left pointer-events-none absolute left-0 top-0 z-10 h-full w-24" />
            <div className="marquee-fade-right pointer-events-none absolute right-0 top-0 z-10 h-full w-24" />

            <div className="marquee-track">
                {items.map((tag, i) => (
                    <TagPill key={i} label={tag} />
                ))}
            </div>
        </div>
    );
};

export default MarqueeTicker;