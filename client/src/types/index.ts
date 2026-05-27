import type { LucideIcon } from "lucide-react";

export interface FloatingCard {
    id: string;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    accent: string;
    delay: number;
}