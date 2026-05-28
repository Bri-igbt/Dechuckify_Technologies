import { Star } from "lucide-react";
import { useState } from "react";

const StarRating = ({ rating, interactive = false, onRate }: {
    rating: number;
    interactive?: boolean;
    onRate?: (r: number) => void;
}) => {
    const [hovered, setHovered] = useState(0);
    return (
        <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <Star
                key={star}
                size={interactive ? 22 : 16}
                className={`transition-all duration-150 ${
                    star <= (interactive ? hovered || rating : rating)
                    ? "text-purple-500 fill-purple-500/50"
                    : "text-[#2a3a2a]"
                } ${interactive ? "cursor-pointer hover:scale-110" : ""}`}
                onMouseEnter={() => interactive && setHovered(star)}
                onMouseLeave={() => interactive && setHovered(0)}
                onClick={() => interactive && onRate?.(star)}
                />
            ))}
        </div>
    );
}

export default StarRating;