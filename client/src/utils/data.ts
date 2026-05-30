import { Star, Zap, Shield, Globe, Monitor, Code2, BarChart3, Palette, ShoppingCart, Search, Smartphone, Settings, Brush, Server, Clock, TrendingUp, ShieldCheck, Users, HeadphonesIcon, Lightbulb, Award, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
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
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export const items = [
    "Website Design & Development",
    "E-Commerce Website",
    "Mobile App Development",
    "Custom Software Development",
    "UI/UX Design",
    "Search Engine Optimization",
    "Cloud & DevOps Solutions",
    "Graphic Design & Branding",
    "Website Hosting & Management",
    "Other",
];

export const contact = [

    { 
        icon: FaWhatsapp, 
        href: "https://wa.me/2349055918964", 
        label: "WhatsApp" 
    },
    { 
        icon: Mail, 
        href: "mailto:hr@dechuckify.com", 
        label: "Mail" 
    },

]

export const works = [
  "Website Design & Development",
  "E-Commerce Websites",
  "Mobile App Development",
  "Custom Software Development",
  "UI/UX Design",
  "SEO & Digital Marketing",
  "Cloud & DevOps",
  "Graphic Design & Branding",
];

export const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "#about" },
  { label: "Services", to: "#services" },
  { label: "Portfolio", to: "#portfolio" },
  { label: "Testimonials", to: "#testimonials" },
  { label: "Why Choose Us", to: "#why-us" },
  { label: "Contact", to: "#contact" },
];

export const socials = [
  { icon: FaWhatsapp,  href: "https://wa.me/2349055918964", label: "WhatsApp" },
  { icon: FaFacebook,  href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedin,  href: "#", label: "LinkedIn" },
  { icon: MdEmail,     href: "mailto:hr@dechuckify.com", label: "Email" },
];

export const contactInfo = [
    {
        icon: MapPin,
        label: "OUR OFFICE",
        lines: [
            "Jakande Gate, Lagos, Nigeria",
        ],
        bold: 2,
    },
    {
        icon: Phone,
        label: "PHONE / WHATSAPP",
        lines: ["+2349055918964"],
        bold: 0,
    },
    {
        icon: Mail,
        label: "EMAIL US",
        lines: ["hr@dechuckify.com"],
        bold: 0,
    },
    {
        icon: Clock,
        label: "BUSINESS HOURS",
        lines: ["Mon – Fri: 8am – 6pm", "Sat: 9am – 3pm"],
        bold: -1,
    },
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
    name: "Faith Agbamu",
    role: "HR",
    company: "Newlord Nigeria Limited",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFYawYk0F7FDQ/profile-displayphoto-crop_800_800/B4DZmR0RLtH0AI-/0/1759088024620?e=1781740800&v=beta&t=wD78zJLD_kKjRXmO2sd2Iu9Nb7C8GPdiSNIsVJTs77o",
    rating: 5,
    text: "Dechuckify Technologies completely transformed our online presence. The team delivered a stunning, fast website that has tripled our leads in just 3 months. Absolutely world-class service.",
    date: "March 2025",
  },
  {
    id: 2,
    name: "Roma Blake",
    role: "CTO",
    company: "StackQuest Electric",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIf-SfE4mmsE-hR7mof9XQeG3pSa_UpPAeHQ&s",
    rating: 5,
    text: "We needed a modern but complex website built fast. Dechuckify delivered beyond expectations clean code, great UI, and impeccable attention to security. Will use them again.",
    date: "January 2025",
  },
  {
    id: 3,
    name: "Fatima Al-Hassan",
    role: "Marketing Director",
    company: "Nosak Group",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1PLpcTHmmhyx4cpZzNEiC6ln3Wttc_Gyxvg&s",
    rating: 5,
    text: "Professional, responsive, and incredibly talented. Our e-commerce platform went from concept to launch in 6 weeks. Revenue has grown by 40% since the new site launched.",
    date: "February 2025",
  },
  {
    id: 4,
    name: "Jessica Owen",
    role: "HR",
    company: "Loft Cargo",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMVoNEmB0J2js4SYLnHVVGNcPlPAdyvX2Uyw&s",
    rating: 4,
    text: "Solid engineering team. They understood our technical requirements immediately and built a robust, scalable solution. Communication throughout the project was excellent.",
    date: "April 2025",
  },
  {
    id: 5,
    name: "Chisom Eze",
    role: "Operations Manager",
    company: "AfriCare Health",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQGvoCZVTevimQ/profile-displayphoto-crop_800_800/B4DZnAYwRpIgAI-/0/1759869460159?e=1781740800&v=beta&t=bdp_aQvozBqQo0oEP9GsxlmjlOG1cqAnXT59po1pwLs",
    rating: 5,
    text: "From the first call, Dechuckify made us feel heard. They built a patient management portal that our staff loves using. The attention to UX detail is second to none.",
    date: "May 2025",
  },
  {
    id: 6,
    name: "Princess Karen",
    role: "Product Lead",
    company: "Kuda Bank",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQEHD-pITvwSQQ/profile-displayphoto-crop_800_800/B4DZsFJt6uI8AI-/0/1765317993690?e=1781740800&v=beta&t=Kdw7mJHL7Y9tKsxl15PdklIJ3l99YBImXjmRiHZvevk",
    rating: 5,
    text: "Exceptional mobile first design. Our app retention improved by 60% after the redesign. Dechuckify understands African users and builds products that actually resonate.",
    date: "June 2025",
  },
];

export const reasons = [
  {
    icon: Code2,
    title: "Clean, Scalable Code",
    desc: "We write maintainable, well documented code built to scale. No shortcuts, no technical debt just solid engineering that grows with your business.",
    stat: "100%",
    statLabel: "Code Quality",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We respect your deadlines. Our agile workflow and transparent project management ensure every milestone is hit without compromising quality.",
    stat: "98%",
    statLabel: "On-Time Rate",
  },
  {
    icon: TrendingUp,
    title: "Results-Driven Approach",
    desc: "We don't just build we strategize. Every decision is tied to measurable outcomes: more traffic, better conversions, and real business growth.",
    stat: "3x",
    statLabel: "Avg. ROI",
  },
  {
    icon: ShieldCheck,
    title: "Security First",
    desc: "Security is baked into everything we build from SSL and encrypted databases to regular audits and compliance ready architecture.",
    stat: "0",
    statLabel: "Breaches",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    desc: "You get a committed team of designers, developers, and strategists who treat your project as their own. No freelancers. No handoffs.",
    stat: "15+",
    statLabel: "Specialists",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    desc: "We're always available. Whether it's a critical bug at midnight or a feature request on a Sunday, our support team responds fast.",
    stat: "< 2hrs",
    statLabel: "Avg. Response",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Led Thinking",
    desc: "We stay ahead of technology trends so you don't have to. From AI integrations to modern frameworks, we bring cutting edge solutions to every project.",
    stat: "5+",
    statLabel: "Tech Stacks",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "With 8+ years in the industry and clients across Nigeria and beyond, our portfolio speaks for itself. We've helped startups scale and enterprises modernize.",
    stat: "200+",
    statLabel: "Projects Done",
  },
];

export const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];
