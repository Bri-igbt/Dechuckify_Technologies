import { Star, Zap, Shield, Globe, Monitor, Code2, BarChart3 } from "lucide-react";
import type { FloatingCard } from "../types";

export const navLinks = [
    { id: "home",        label: "Home"        },
    { id: "about",        label: "About"        },
    { id: "services",     label: "Services"     },
    { id: "contact",      label: "Contact"      },
];

export const floatingCards: FloatingCard[] = [
    {
        id: "rating",
        icon: Star,
        title: "5.0 Google Rating",
        subtitle: "168 verified reviews",
        accent: "#f59e0b",
        delay: 0,
    },
    {
        id: "projects",
        icon: Zap,
        title: "500+ Projects",
        subtitle: "Delivered in Nigeria",
        accent: "#ec4899",
        delay: 0.4,
    },
    {
        id: "ssl",
        icon: Shield,
        title: "SSL Secured",
        subtitle: "Free with every site",
        accent: "#34d399",
        delay: 0.8,
    },
    {
        id: "location",
        icon: Globe,
        title: "Jakande, Lagos",
        subtitle: "Nigeria 🇳🇬",
        accent: "#60a5fa",
        delay: 1.2,
    },
];


export const services = [
    { icon: Monitor, label: "Web Design" },
    { icon: Code2, label: "Development" },
    { icon: BarChart3, label: "SEO" },
];

export const tags = [
    "Design",
    "Laundry & Dry Cleaning Website Design",
    "HealthCare Website Design",
    "RealEstate Website Design",
    "Company Website Design",
    "Startup Website Design",
    "eCommerce Website Design",
    "Restaurant Website Design",
    "Portfolio Website Design",
    "Blog Website Design",
    "SaaS Website Design",
    "Fashion Website Design",
];