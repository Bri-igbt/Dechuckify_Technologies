import type { LucideIcon } from "lucide-react";

export interface Service {
    icon: LucideIcon;
    title: string;
    desc: string;
    featured?: boolean;
}

export interface FloatingCard {
    id: string;
    icon: LucideIcon;
    title: string;
    subtitle: string;
    accent: string;
    delay: number;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    avatar: string;
    rating: number;
    text: string;
    date: string;
}