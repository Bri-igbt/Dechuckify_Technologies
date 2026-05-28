import { Star, Zap, Shield, Globe, Monitor, Code2, BarChart3, Palette, ShoppingCart, Search, Smartphone, Settings, Brush, Server } from "lucide-react";
import type { FloatingCard, Service, Testimonial } from "../types";
import africare from '../assets/africare.jpeg'
import bua from '../assets/bua.jpeg'
import chilimited from '../assets/chilimited.png'
import dori from '../assets/dori.png'
import ecm from '../assets/Ecm.png'
import firs from '../assets/firs.png'
import keystonebank from '../assets/keystone bank.jpeg'
import kuda from '../assets/kuda.png'
import moniepoint from '../assets/moniepoint.png'
import mybuddy from '../assets/Mybuddy.png'
import newlord from '../assets/newlord.jpeg'
import paystack from '../assets/paystack.png'

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
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

export const features = [
  { label: "Beautiful", desc: "clean and modern designs." },
  { label: "Fast", desc: "optimized for speed and SEO." },
  { label: "Secure", desc: "protected with SSL and regular updates." },
  { label: "Mobile-Friendly", desc: "perfect on phones, tablets, and computers." },
];

export const service: Service[] = [
  {
    icon: Monitor,
    title: "Website Design & Development",
    desc: "We create stunning, custom websites that capture your brand essence and deliver seamless experiences through modern, responsive design.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Websites",
    desc: "Launch a high performing online store with secure payments, smart inventory management, and optimized checkout flows designed to maximize sales.",
  },
  {
    icon: Search,
    title: "Search Engine Optimization",
    desc: "Boost your online visibility with data-backed SEO strategies that enhance rankings, attract quality traffic, and maximize conversions.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "We build powerful native and cross-platform mobile apps for iOS and Android, delivering smooth, intuitive, and engaging user experiences.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    desc: "Custom software solutions built from the ground up to streamline business operations, automate processes, and solve complex challenges.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "We craft research led interface designs that simplify complex user experiences into intuitive, user friendly, and delightful digital products.",
  },
  {
    icon: Server,
    title: "Website Hosting",
    desc: "Fast, secure, and dependable hosting solutions designed for peak performance, backed by a 99.9% uptime guarantee and round the clock technical support.",
  },
  {
    icon: Settings,
    title: "Website Management",
    desc: "Comprehensive website maintenance services including regular updates, secure backups, proactive security monitoring, and continuous performance optimization.",
  },
  {
    icon: Brush,
    title: "Graphic Design and Branding",
    desc: "Elevate your brand with complete branding and graphic design services, from crafting a unique identity to creating eye catching visuals that make your business stand out.",
  },
];

export const brands = [
  { name: "Africare", logo: africare },
  { name: "Bua Limited", logo: bua },
  { name: "Chi Limited", logo: chilimited },
  { name: "Dori", logo: dori },
  { name: "ECM", logo: ecm },
  { name: "FIRS", logo: firs },
  { name: "Keystone Bank", logo: keystonebank },
  { name: "Kuda MFB", logo: kuda },
  { name: "Moniepoint", logo: moniepoint },
  { name: "My BuddyTech", logo: mybuddy },
  { name: "Newlord Nigeria Limited", logo: newlord },
  { name: "PayStack", logo: paystack },
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    role: "CEO",
    company: "BrightPath Nigeria",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Dechuckify Technologies completely transformed our online presence. The team delivered a stunning, fast website that has tripled our leads in just 3 months. Absolutely world-class service.",
    date: "March 2025",
  },
  {
    id: 2,
    name: "Emeka Nwosu",
    role: "Founder",
    company: "SwiftPay Fintech",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "We needed a complex fintech dashboard built fast. Dechuckify delivered beyond expectations — clean code, great UI, and impeccable attention to security. Will use them again.",
    date: "January 2025",
  },
  {
    id: 3,
    name: "Fatima Al-Hassan",
    role: "Marketing Director",
    company: "Nosak Group",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Professional, responsive, and incredibly talented. Our e-commerce platform went from concept to launch in 6 weeks. Revenue has grown by 40% since the new site launched.",
    date: "February 2025",
  },
  {
    id: 4,
    name: "Tunde Adeyemi",
    role: "CTO",
    company: "Moniepoint",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 4,
    text: "Solid engineering team. They understood our technical requirements immediately and built a robust, scalable solution. Communication throughout the project was excellent.",
    date: "April 2025",
  },
  {
    id: 5,
    name: "Chisom Eze",
    role: "Operations Manager",
    company: "AfriCare Health",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    text: "From the first call, Dechuckify made us feel heard. They built a patient management portal that our staff loves using. The attention to UX detail is second to none.",
    date: "May 2025",
  },
  {
    id: 6,
    name: "Oluwaseun Bakare",
    role: "Product Lead",
    company: "Kuda Bank",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    rating: 5,
    text: "Exceptional mobile-first design. Our app retention improved by 60% after the redesign. Dechuckify understands African users and builds products that actually resonate.",
    date: "June 2025",
  },
];