import { Link } from "react-router-dom";
import logooo from "../assets/logooo.png";
import { ArrowRight, Heart, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { quickLinks, socials, works } from "../utils/data";
import Newsletter from "../component/Newsletter";




const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full bg-black/85 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/30 opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

            <Newsletter />

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="flex flex-col  lg:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src={logooo}
                                alt="Dechuckify Technologies"
                                className="w-14 h-14 object-contain flex-shrink-0"
                            />
                            <div className="flex flex-col leading-none">
                                <span
                                    className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-purple-600 text-xl tracking-widest"
                                    style={{ fontFamily: "'Palatino Linotype', Palatino, Georgia, serif" }}
                                >
                                    DECHUCKIFY
                                </span>

                                <div className="h-px bg-gradient-to-r from-purple-700 via-purple-400 to-purple-700 my-1 opacity-60" />
                                <span
                                    className="text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-600 to-purple-400 text-[9px] tracking-[0.35em] font-medium"
                                    style={{ fontFamily: "'Palatino Linotype', Palatino, Georgia, serif" }}
                                >
                                    TECHNOLOGIES
                                </span>
                            </div>
                        </div>

                        <p className="text-[#64748b] text-sm leading-relaxed mb-3" >
                            Dechuckify Technologies is a Lagos-based software and web development
                            company dedicated to crafting scalable, high-performance digital products
                            for businesses in Nigeria and across global markets.
                        </p>


                        <div className="flex gap-2.5 mt-1">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="w-9 h-9 rounded-xl  bg-purple-200 shadow-sm hover:shadow-purple-500 border border-purple-950 flex items-center justify-center  text-black hover:bg-white/95 hover:text-purple-500 hover:border-purple-950 transition-all duration-200"
                                >
                                    <Icon size={15} strokeWidth={1.8} />
                                </a>
                            ))}
                        </div>
                    </div>

                <div>
                    <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5" >
                        Quick Links
                    </h4>

                    <ul className="flex flex-col gap-3">
                        {quickLinks.map((link) => (
                            <li key={link.label}>
                                <Link
                                    to={link.to}
                                    className="group flex items-center gap-2 text-[#64748b] text-sm hover:text-purple-500 transition-colors duration-200"
                
                                >
                                    <ArrowRight
                                        size={13}
                                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-white/85"
                                    />
                                        {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5" >
                        Our Services
                    </h4>

                    <ul className="flex flex-col gap-3">
                        {works.map((s) => (
                            <li key={s}>
                                <Link
                                    to="#services"
                                    className="group flex items-center gap-2 text-[#64748b] text-sm hover:text-purple-500 transition-colors duration-200"
                
                                >
                                    <ArrowRight
                                        size={13}
                                        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-white/85"
                                    />
                                    {s}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-5" >
                        Contact Us
                    </h4>

                    <ul className="flex flex-col gap-5">
                        <li className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-lg bg-purple-200 border border-[#1e2e1e] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <MapPin size={14} className="text-black" strokeWidth={1.8} />
                            </div>
                            <p className="text-[#64748b] text-sm leading-relaxed" >
                                Jakande Gate, Lagos, Nigeria
                            </p>
                        </li>

                    <li className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-200 border border-[#1e2e1e] flex items-center justify-center flex-shrink-0">
                            <Phone size={14} className="text-black" strokeWidth={1.8} />
                        </div>
                        <a
                            href="tel:09055918964"
                            className="text-[#64748b] text-sm hover:text-purple-500 transition-colors"
                        >
                            +2349055918964
                        </a>
                    </li>

                    <li className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-200 border border-[#1e2e1e] flex items-center justify-center flex-shrink-0">
                            <Mail size={14} className="text-black" strokeWidth={1.8} />
                        </div>
                        <a
                            href="mailto:hello@dechuckify.com"
                            className="text-[#64748b] text-sm hover:text-purple-500 transition-colors"
                        >
                            hr@dechuckify.com
                        </a>
                    </li>

                    <li className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-200 border border-[#1e2e1e] flex items-center justify-center flex-shrink-0">
                            <MessageCircle size={14} className="text-black" strokeWidth={1.8} />
                        </div>
                        <a
                            href="https://wa.me/2349055918964"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#64748b] text-sm hover:text-purple-500 transition-colors"
                        >
                            Chat on WhatsApp
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="border-t border-white/30">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-[#64748b] text-xs text-center sm:text-left" >
                    © {year} Dechuckify Technologies. All rights reserved.
                </p>
                <p className="text-[#64748b] text-xs flex items-center gap-1" >
                    Built with <Heart size={11} className="text-purple-300 fill-purple-400" /> in Lagos, Nigeria
                </p>
            <div className="flex items-center gap-4">
                {["Privacy Policy", "Terms of Service"].map((item) => (
                <Link
                    key={item}
                    to="#"
                    className="text-[#64748b] text-xs hover:text-[#22c55e] transition-colors"

                >
                    {item}
                </Link>
                ))}
            </div>
            </div>
        </div>
        </footer>
    );
}

export default Footer;