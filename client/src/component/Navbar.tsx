import { useState, useEffect } from "react";
import { Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { navLinks } from '../utils/data.ts';
import { motion } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1, delay: 0, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
                scrolled ? "bg-black/40 backdrop-blur-md transition-colors" : ""
            }`}
        >
            <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <motion.a
                    href="/"
                    className="flex flex-col leading-none select-none"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    <div className="flex items-center">
                        <span className="relative flex items-center">
                            <svg width="44" height="38" viewBox="0 0 44 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-0.5">
                                <path d="M22 2C11.5 2 3 10.5 3 21C3 31.5 11.5 36 22 36C28 36 33 33.5 36.5 29.5V20H22V25H31V28C28.5 30.5 25.5 31.5 22 31.5C14 31.5 8 26 8 21C8 15 14 6.5 22 6.5C26.5 6.5 30 8.5 32.5 11.5L36.5 8C33 4.5 28 2 22 2Z" fill="#22c55e" />
                                <circle cx="22" cy="19" r="5" fill="white" />
                                <circle cx="22" cy="19" r="3" fill="#0b1a12" />
                                <circle cx="23.5" cy="17.5" r="1" fill="white" />
                            </svg>
                        </span>
                        <span className="text-[#22c55e] font-bold text-3xl tracking-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                            ntech
                        </span>
                    </div>
                    <span className="text-[#22c55e] text-[8px] tracking-[0.18em] uppercase ml-1 font-medium opacity-80 font-outfit">
                        Connecting you with tech trends.
                    </span>
                </motion.a>

                {/* Nav links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.li
                            key={link.id}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.8 + i * 0.07 }}
                        >
                            <Link
                                to={`#${link.id}`}
                                className="group relative text-white/75 text-[15px] font-sans font-medium hover:text-purple-200 transition-all duration-200 inline-block hover:scale-110 hover:-translate-y-1"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-purple-500 to-transparent group-hover:w-full transition-all duration-300 ease-out shadow-[0_0_6px_#fff,0_0_12px_#fff]" />
                                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-3 bg-purple-500 opacity-0 blur-md rounded-full group-hover:w-full group-hover:opacity-20 transition-all duration-300 ease-out" />
                            </Link>
                        </motion.li>
                    ))}
                </ul>

                {/* Actions */}
                <motion.div
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <button
                        aria-label="Toggle theme"
                        className="w-10 h-10 rounded-full border border-[#2a3a2a] bg-[#111f14] flex items-center justify-center hover:border-[#22c55e] transition-colors duration-200"
                    >
                        <Sun size={17} className="text-[#c8d8c8]" strokeWidth={1.8} />
                    </button>

                    <a
                        href="#contact"
                        className="bg-purple-950 hover:bg-purple-900 text-white font-sans font-bold text-[15px] px-6 py-2.5 rounded-lg transition-colors duration-200 whitespace-nowrap"
                    >
                        Let's Talk
                    </a>
                </motion.div>
            </div>
        </motion.nav>
    );
}

export default Navbar;