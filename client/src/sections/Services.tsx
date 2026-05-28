import { ArrowRight } from "lucide-react";
import { service } from "../utils/data";



const Services = () => {  
    return (
        <section
            id="services"
            className="w-full bg-black/85 py-20 px-6 md:px-12 lg:px-20"
        >
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14 flex flex-col items-center gap-3">
                    <p className="text-purple-500 text-sm font-bold tracking-[0.25em] uppercase">
                        Our Services
                    </p>
                    <h2 className="text-white/75 text-4xl md:text-5xl font-extrabold leading-tight" >
                        What We{" "}
                        <span className="text-purple-500">Offer</span>
                    </h2>
                    <p className="text-white text-base md:text-lg max-w-2xl mt-1" >
                        From stunning designs to powerful software solutions, we provide
                        everything you need to succeed in the digital world.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {service.map((service, i) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={i}
                                className="
                                    group relative flex flex-col gap-5 p-7 rounded-2xl cursor-pointer
                                    transition-all duration-300 ease-out
                                    hover:-translate-y-3 hover:shadow-2xl hover:z-10
                                    bg-white border border-[#e2e8f0] shadow-sm hover:border-purple-900 "
                            >
                                <div className="
                                        w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0
                                        transition-all duration-300
                                        bg-purple-100 text-purple-500 group-hover:bg-purple-500 group-hover:text-white group-hover:rotate-45
                                    "
                                >
                                    <Icon size={26} className="transition-all duration-300 group-hover:-rotate-45" />
                                </div>

                                <h3 className="
                                        text-[17px] font-bold leading-snug
                                        text-[#0f172a] group-hover:text-purple-500
                                        transition-colors duration-300
                                    "
                                >
                                    {service.title}
                                </h3>

                                <p className="text-black/55 text-[14px] leading-relaxed flex-1">
                                    {service.desc}
                                </p>

                                <div className="
                                    flex items-center gap-1.5 text-purple-500 text-sm font-semibold
                                    transition-all duration-300
                                    opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0
                                    "
                                >
                                    Learn more
                                    <ArrowRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Services;
