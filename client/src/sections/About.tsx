import { Dot, ArrowRight } from "lucide-react";
import { features } from "../utils/data";

const About = () =>  {
    return (
        <section
            id="about"
            className="w-full bg-black/90 py-16 px-6 md:px-12 lg:px-20"
        >
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative w-full rounded-xl overflow-hidden">
                <img
                    src="https://img.freepik.com/premium-photo/portrait-young-black-man-using-computer-high-technology-office-data-systems-programming-co_236854-44709.jpg"
                    alt="Web designer at work"
                    className="w-full h-[420px] md:h-[520px] lg:h-[580px] object-cover object-top rounded-xl"
                />

                <div className="absolute inset-0 rounded-xl ring-1 ring-white/10" />
            </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col gap-6">

                <p className="text-purple-500 text-sm font-semibold tracking-[0.25em] uppercase">
                    About Us
                </p>

                <h2 className="text-white text-4xl md:text-5xl font-extrabold leading-tight" >
                    Web Design <br className="hidden sm:block" />
                    Company In Lagos
                </h2>

                <div className="text-[#94a3b8] text-[15px] md:text-base leading-relaxed space-y-1">
                    <p>
                        At <span className="text-white font-semibold">Dechuckify Technologies</span>, we
                        specialize in building powerful digital experiences for businesses across Nigeria
                        and beyond.
                    </p>
                    <p>
                        We don't just write code, we craft solutions that drive growth, elevate your
                        brand, and turn your vision into reality.
                    </p>
                </div>

                <p className="text-[#94a3b8] text-[15px] md:text-base" >
                    Our team focuses on creating websites that are:
                </p>

                <ul className="space-y-3">
                    {features.map((f) => (
                        <li
                            key={f.label}
                            className="flex items-start gap-2 text-[#94a3b8] text-[15px] md:text-base"
                        >
                            <Dot
                                className="text-white mt-0.5 flex-shrink-0"
                                size={22}
                                strokeWidth={4}
                            />

                            <span>
                                <span className="text-white font-bold">{f.label}</span>
                                {" – "}
                                {f.desc}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="pt-2">
                    <button className="group flex items-center gap-2 px-8 py-3.5 rounded-full border-2 border-white text-white font-semibold text-[15px] hover:bg-white hover:text-[#0d1117] transition-all duration-300" >
                        More About Us
                        <ArrowRight
                            size={17}
                            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                        />
                    </button>
                </div>
            </div>
        </div>
        </section>
    );
}


export default About;